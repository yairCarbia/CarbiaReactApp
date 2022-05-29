import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({ nombre, edad, usuario }) => {
    return (
        <>
            <h2> Usuario logeado: {usuario} </h2>
            <p>Nombre:{nombre}</p>
            <p>Edad:{edad} años</p>
            <ItemCount
                prenda="Buzo" />
        </>
    )
}

export default ItemListContainer