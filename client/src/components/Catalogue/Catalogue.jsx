import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setHidden, setVisible } from '../../redux/searchBarReducer/searchBarActions'
import { addDoggies } from '../../redux/catalogueReducer/catalogueActions'
import Card from '../Card/Card'
import SearchBar from '../SearchBar/SearchBar'
import Button from '@material-ui/core/Button';
import './_Catalogue.scss'

export default function Catalogue() {
    const status = useSelector((state) => state.searchBarReducer.status);
    //const query = useSelector((state) => state.searchBarReducer.query);
    const search = useSelector((state) => state.searchBarReducer.search)
    const dogs = useSelector((state) => state.catalogueReducer.dogs)
    const searchDogs = useSelector((state) => state.catalogueReducer.searchDogs)
    const filter = useSelector((state) => state.searchBarReducer.filter);
    const [catalogue, setCatalogue] = useState([])
    const totalCards = 12;
    const [page, setPage] = useState(1)
    const [more, setMore] = useState(true)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    useEffect(()=>{    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    })

    useEffect(() => {
        if(!search){
            let filtering = dogs.filter(dog => {
                if(filter === 'All'){
                    return true
                }else{
                    if(!dog.breeds[0].breed_group){
                        if(filter === 'Unknown'){
                            return true 
                        }
                        return false
                    }
                    return dog.breeds[0].breed_group === filter
                }
            })
            setCatalogue(filtering)
        }else{
            let filtering = searchDogs.filter(dog => {
                if(filter === 'All'){
                    return true
                }else{
                    if(!dog.breeds[0].breed_group){// caso especial de cuando no hay informacion
                        if(filter === 'Unknown'){
                            return true 
                        }
                        return false
                    }
                    return dog.breeds[0].breed_group === filter
                }
            })
            setCatalogue(filtering)
        }
    }, [dogs, searchDogs, search, filter])

    const handleScroll = (event) => {
        if(window.scrollY > 60){
            dispatch(setHidden())
        }else{
            dispatch(setVisible())
        }
    }

    const handleLoad = () => {
        if(page < 12){
            dispatch(addDoggies(page+1))
            setPage(page + 1)
            if(page + 1 === 12){//limitamos a 12 paginas, algunas respuestas de la API estan vacias
                setMore(false)
            }
        }        
    }

    return (
        <div className='catalogueContainer'>
            <div className='catalogueScreen'>
                <SearchBar status={status}/>
                <div className='catalogueMatrix'>
                {
                    catalogue && catalogue?.map(dog => {
                        return <Card dog={dog} key={dog.id}/>
                    }).slice(0, (page - 1) * totalCards + totalCards)
                }
                </div> 
                {
                    loading ? (<div>Loading...</div>) : <></>
                }
                {                    
                    more ? (<Button className='loadButton' onClick={handleLoad}>Load More ...</Button>) : (<></>)
                }
                
            </div>                    
        </div>
    )
}