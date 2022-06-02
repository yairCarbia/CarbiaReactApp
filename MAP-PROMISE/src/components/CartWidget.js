import React from 'react'
import images from "../img/carrito-de-compras.png"
import estilos from "../index.css"

const CartWidget = () => {
    return (
        <>
            <img className='carrito' src={images} />
        </>
    )
}

export default CartWidget
