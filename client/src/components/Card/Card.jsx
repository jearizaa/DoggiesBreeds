import React from 'react'
import './_Card.scss'

export default function Card({dog}) {
    return (
        <div className='cardContainer'>
            {
                dog.id
            }
        </div>
    )
}