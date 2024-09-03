import React, { useEffect, useState } from 'react'
import { getGifts } from '../services/getGifts';
import GiftCard from './GiftCard';


export default function GiftGrid({category}) {
    const [images, setimages] = useState([])
    const getImges=async()=>{
        const imagesNew=await getGifts(category)
        setimages(imagesNew)
    }
    console.log(images)
    useEffect(()=>{
        getImges();
    },[category])

  return (
    <>  
        <h3>{category}</h3>
        <div className='card-grid'>
            {images.map((img)=>(
                <GiftCard
                img={img}
                />
            ))}
        </div>
        
    </>
  )
}
