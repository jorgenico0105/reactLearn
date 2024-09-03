import React, { useState } from 'react'
import AddCate from './components/AddCate';
import GiftGrid from './components/GiftGrid';

export default function GiftExpertApp() {

    const [categorys, setcategorys] = useState([
        '',
    ]);

  return (
    <>
    {/* {Titutol} */}
        <h1>Gift App</h1>
        <AddCate
        setcategorys={setcategorys}
        categorys={categorys}
        ></AddCate>
  
        <ol>
            {categorys.map(cate=>(
                 <GiftGrid
                 category={cate}
                 key={cate}
                 ></GiftGrid>
            ))}
           
        </ol>
    </>
  )
}
