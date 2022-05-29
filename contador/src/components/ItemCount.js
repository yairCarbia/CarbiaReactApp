import React, { useState } from 'react'

const ItemCount = ({ prenda }) => {
    const [contador, setContador] = useState(1);
    const suma = () => {
        setContador(contador + 1);
    }
    const reset = () => {
        setContador(1);
    }
    const resta = () => {
        setContador(contador - 1);
    }

    return (
        <div>
            <h1 >Contador</h1>
            <h2>Prenda:{prenda}</h2>
            <h3>Cantidad:{contador}</h3>
            <button className='btn btn-success' onClick={suma}>+1</button>
            <button className='btn btn-primary' onClick={reset}>Reset</button>
            <button className='btn btn-danger' onClick={resta}>-1</button>
        </div>
    )
}

export default ItemCount