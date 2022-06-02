import React from 'react'
import styles from "../index.css"
import gif from "../gif/icons8-spinner.gif"

import { useState, useEffect } from 'react';
import { stockProductos } from './stock';
import Adidas from "../img/padidas.jpg"
import Penalty from "../img/ppenalty.jpg"
import Puma from "../img/ppuma.jpg"
import Nike from "../img/pnike.jpg"
import Botines from "../img/badiadas.jpg"
const ItemList = () => {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const items = [
        { id: 1, nombre: "Pelota Adidas", tipo: "pelota", precio: 5000, talle: "3", img: Adidas },
        { id: 2, nombre: "Pelota Penalty", tipo: "pelota", precio: 6000, talle: "4", img: Penalty },
        { id: 3, nombre: "Pelota Puma", tipo: "pelota", precio: 4000, talle: "5", img: Puma },
        { id: 4, nombre: "Pelota Nike", tipo: "pelota", precio: 8300, talle: "5", img: Nike },
        { id: 5, nombre: "Botines Adidas", tipo: "pelota", precio: 10202, talle: "5", img: Botines },


    ]
    const datos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(items)

            }, 2000);

        })
    }
    useEffect(() => {
        setCargando(true)
        datos()
            .then((rta) => {
                setProductos(rta)
                setCargando(false)
            })


    }, [])

    return (
        <>
            <h2>Tienda Carbia</h2>

            <hr />
            {cargando
                ?
                <> {<div>
                    <img src={gif} /><h2>Obteniendo resultados...</h2>
                </div>

                }</>




                :
                <>

                    {
                        productos.map(prod => (
                            <div key={prod.id} className='container d-flex '>
                                <div className=''>
                                    <h2 className='text-center'>{prod.nombre}</h2>
                                    <img className='producto_img' src={prod.img} />
                                    <p>Tipo: {prod.tipo}</p>
                                    <h3>Precio:${prod.precio}</h3>
                                    <h4>Talle:{prod.talle}</h4>
                                    <button type="button" className="btn btn-success btn-lg">Comprar</button>
                                    <hr />
                                </div>

                            </div>

                        ))
                    }

                </>

            }





        </>
    )
}

export default ItemList