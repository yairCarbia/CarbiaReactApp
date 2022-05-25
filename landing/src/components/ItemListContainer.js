import React from 'react'

const ItemListContainer = ({ nombre, edad, usuario }) => {
    return (
        <>
            <h2> Usuario logeado: {usuario} </h2>
            <p>Nombre:{nombre}</p>
            <p>Edad:{edad} años</p>
        </>
    )
}

export default ItemListContainer