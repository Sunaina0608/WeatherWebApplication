import React from 'react'

const TopButtons = ({setQuery}) => {
    
    const cities=[
        {
            id:1,
            title:"Canada"
        },
        {
            id:2,
            title:"Australlia"
        },
        {
            id:3,
            title:"Dubai"
        },
        {
            id:4,
            title:"USA"
        },
        {
            id:5,
            title:"Russia"
        },
        {
            id:6,
            title:"Rome"
        },
        {
            id:7,
            title:"Sydney"
        },
        {
            id:8,
            title:"Tokyo"
        }


    ];

  return (
    <div className='flex items-center justify-around my-6'>
        {cities.map((city)=>(
                <button key={city.id} className='text-black text-lg font-medium' 
                onClick={()=>setQuery({q:city.title})}
                >{city.title}</button>
            ))}
    </div>
  )
}

export default TopButtons;