import React from 'react'

export default function GiftCard({img}) {
  return (
    <>
        <div className='card'>
            <img src={img.url} alt="ImagenGift" />
             {img.title}
        </div>
    </>
  )
}
