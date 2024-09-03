import { useState } from "react"

export default function AddCate({setcategorys,categorys}) {
    const [inputValue, setInput] = useState('');
    const handleChange=(e)=>{
        const val=e.target.value;
        setInput(val)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(inputValue.trim().length<1){
            console.log('Ingrese algo ')
            return
        }
        if (categorys.includes(inputValue)) return;
        setcategorys([
            inputValue,
            ...categorys,
        ])
        setInput('')
    }
  return (
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Buscar Gifts"
        name="category"
        value={inputValue}
        onChange={handleChange}
        ></input>
    </form>
   
  )
}
