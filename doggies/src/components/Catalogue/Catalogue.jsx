import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../Card/Card'


export default function Catalogue() {
    const [dogs, setDogs] = useState([])
    const [page, setPage] = useState(1)

    useEffect(()=>{
        const getDoggies = async () => {
            let data = await axios.get(`https://api.thedogapi.com/v1/images/search?limit=12&page=${page}&order=asc`, {
                headers: {'x-api-key': '2d661813-6ac9-4c1a-9438-b7ed68030f94'}
            })
            console.log(data.data)
            setDogs([...dogs, ...data.data])
        }
        getDoggies()
    }, [page])

    return (
        <div className='catalogueContainer'>
            {
                dogs && dogs?.map(dog => {
                    return <Card dog={dog} key={dog.id}/>
                })
            }
        </div>
    )
}
