import React from 'react'

export default function Card({dog}) {
    console.log(dog.id)
    return (
        <div className='cardContainer'>
            {
                dog.id
            }
        </div>
    )
}
