import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setHidden, setVisible } from '../../redux/searchBarReducer/searchBarActions'
import axios from 'axios'
import Card from '../Card/Card'
import SearchBar from '../SearchBar/SearchBar'
import './_Catalogue.scss'

export default function Catalogue() {
    const [dogs, setDogs] = useState([])
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()
    const status = useSelector((state) => state.searchBarReducer.status);

    useEffect(()=>{
        const getDoggies = async () => {
            let data = await axios.get(`https://api.thedogapi.com/v1/images/search?limit=12&page=${page}&order=asc`, {
                headers: {'x-api-key': '2d661813-6ac9-4c1a-9438-b7ed68030f94'}
            })
            console.log(data.data)
            setDogs([...data.data])
        }
        getDoggies()
        setPage(1)
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    const handleScroll = (event) => {
        if(window.scrollY > 60){
            dispatch(setHidden())
        }else{
            dispatch(setVisible())
        }
        console.log(window.scrollY)
    }

    return (
        <div className='catalogueContainer'>
            <div className='catalogueScreen'>
                <SearchBar status={status}/>
                <div className='catalogueMatrix'>
                {
                    dogs && dogs?.map(dog => {
                        return <Card dog={dog} key={dog.id}/>
                    })
                }
                </div> 
            </div>                    
        </div>
    )
}