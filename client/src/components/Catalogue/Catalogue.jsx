import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setHidden, setVisible, setQuery, setFilter, setSearch } from '../../redux/searchBarReducer/searchBarActions'
import { addDoggies, setPage } from '../../redux/catalogueReducer/catalogueActions'
import Card from '../Card/Card'
import SearchBar from '../SearchBar/SearchBar'
import Button from '@material-ui/core/Button';
import './_Catalogue.scss'

export default function Catalogue() {
    const status = useSelector((state) => state.searchBarReducer.status);
    const search = useSelector((state) => state.searchBarReducer.search)
    const filter = useSelector((state) => state.searchBarReducer.filter);
    // const query = useSelector((state) => state.searchBarReducer.query)
    const dogs = useSelector((state) => state.catalogueReducer.dogs)
    const searchDogs = useSelector((state) => state.catalogueReducer.searchDogs)
    const page = useSelector((state) => state.catalogueReducer.page)
    const [catalogue, setCatalogue] = useState([])
    const [more, setMore] = useState(true)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const totalCards = 12;    

    useEffect(()=>{    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    })

    useEffect(() => {
        let filtering = []
        if(!search){
            filtering = dogs.filter(dog => {
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
            filtering = searchDogs.filter(dog => {
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
        if(filtering.length < page*totalCards){
            setMore(false)
        }else{
            setMore(true)
        }
    }, [dogs, searchDogs, search, filter, page])

    useEffect(() => {
        if(catalogue.length <= (page-1)*totalCards){
            setLoading(true)
            setTimeout(() => setLoading(false), 5000)
        }else{
            setLoading(false)
        }
    }, [catalogue, page])

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
            dispatch(setPage(page + 1))
            if(page + 1 === 12){//limitamos a 12 paginas, algunas respuestas de la API estan vacias
                setMore(false)
            }
        }        
    }

    const handleBack = () => {
        dispatch(setPage(1))
        dispatch(setQuery(''))
        dispatch(setFilter('All'))
        dispatch(setSearch(false))
        setCatalogue(dogs)
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
                    loading ?   (<div className="defaultResponse">
                                    <div>
                                        <img
                                        alt="loading..."
                                        src="https://i.pinimg.com/originals/83/23/61/83236186c07e9ee1d3ac6094209f5cb0.gif"
                                        width="150"
                                        height="150"
                                        />                                        
                                    </div>
                                    <h4>Loading...</h4>                                    
                                </div>) : <></>
                }
                {
                    (!loading && !more && catalogue.length === 0) ?   (<div><div className="defaultResponse">
                                    <div>
                                        <img
                                        alt="loading..."
                                        src="https://appstickers-cdn.appadvice.com/1234079338/822051998/a59f147de51a578d941ab64f84a5888d-9.png"
                                        width="150"
                                        height="150"
                                        />                                        
                                    <h4 style={{margin: '0'}}>There is no match.</h4>                                    
                                    </div>                                    
                                </div><Button className='loadButton' onClick={handleBack}>Go Back...</Button></div>) : <></>
                }
                {                    
                    (!loading && more) ? (<Button className='loadButton' onClick={handleLoad}>Load More ...</Button>) : (<></>)
                }                
            </div>                    
        </div>
    )
}