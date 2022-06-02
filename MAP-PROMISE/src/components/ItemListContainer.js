import React from 'react'

import ItemList from './ItemList'

const ItemListContainer = ({ nombre, edad, usuario }) => {
    return (
        <>
            <h2> Usuario logeado: {usuario} </h2>
            <p>Nombre:{nombre}</p>
            <p>Edad:{edad} años</p>

            <ItemList />
        </>

    )
}

export default ItemListContainer
