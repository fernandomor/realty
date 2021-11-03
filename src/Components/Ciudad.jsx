import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { GET_PROPERTY_BY_CITY } from '../GraphQL/query'
import SERVER_ROUTE_IMG from '../ulrimg'

export default function Ciudad() {

    const { ciudad } = useParams()
    const [nodata , setNodata] = useState(false)
    const { data } = useQuery(GET_PROPERTY_BY_CITY, { variables: { ciudad: ciudad } })
    const [products, setProduct] = useState([{
        name: ' ',
        price: ' ',
        sqMeter: " ",
        imageSrc: ' ',
        imageAlt: ' ',
        habitaciones: " ",
        banos: " ",
        m2Construction: "",
ventaRenta: "",
   colonia : "",
        ciudad: " "

    }])

    useEffect(() => {
        if (data !== undefined) {
            setProduct(data.propiedades.map(e => {
                return {
                    id: e.id,
                    name: e.titulo,
                    price: "$" + e.precio.toLocaleString('en-US'),
                    sqMeter: e.m2Terreno,
                    imageSrc: SERVER_ROUTE_IMG + e.img[0].url,
                    imageAlt: 'TODO',
                    habitaciones: e.habitaciones,
                    banos: e.banos,
                    m2Construction: e.m2Construccion,
                    ventaRenta: e.categoria,
colonia : e.colonia,
                    ciudad: e.ciudade.ciudad,

                }
            }))

            
        if(data.propiedades.length === 0){
            setNodata(true)
        }else{
            setNodata(false)
        }
        }


    }, [data])


    

    return (
        <div className="bg-white my-24 ">
         {
            nodata? 
            <section className="  overflow-hidden md:py-20 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          role="img"
          aria-labelledby="svg-workcation"
        >
          <title id="svg-workcation">Ups!</title>
          <defs>
            <pattern
              id="ad119f34-7694-4c31-947f-5c9d249b21f3"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)" />
        </svg>

        <div className="relative">
          <img
            className="mx-auto h-48"
            src="https://www.emprendedores.es/wp-content/uploads/2017/12/realty-plus-1.png"
            alt="Workcation"
          />
          <blockquote>
            <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
              <p>
                &ldquo;Estamos trabajando para tener nuevas propiedades, vuelve pronto&rdquo;
              </p>
            </div>
            
          </blockquote>
        </div>
      </div>
    </section>
            :

            null
        }
            <div className="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="-mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
                    {products.map((product, id) => (
                        <div key={id} className="group relative p-4 border-r border-b border-gray-200 sm:p-6">
                            <div className="rounded-lg h-44 overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                            <span className="inline-flex mt-2 ml-4 absolute items-center px-3 py-0.5 shadow rounded-full text-sm font-medium bg-green-100 text-green-800">
        {product.ventaRenta}
      </span>
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="w-full h-full object-center object-cover"
                                />
                            </div>
                            <div className="pt-10 pb-4 text-center">
                                <h3 className="text-sm font-medium text-gray-900">
                                    <Link to={`/resumen/propiedad/${product.id}`}>
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {product.name}
                                    </Link>

                                </h3>
                                <div className=" flex flex-col items-center">

{
                                    product.colonia ? 
                                    <p className="mb-3 text-sm text-gray-500 mt-1 inline-flex "> <span> 
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
</span> {product.colonia} , {product.ciudad} </p>
                                    :
                                    null
                                }

                                {
                                    product.habitaciones ? 
                                    <p className="mt-1 text-sm text-gray-500 inline-flex">{product.habitaciones}  habitaciones </p>
                                    :
                                    null
                                }
                                {
                                    product.habitaciones ? 
                                    <p className="mt-1 text-sm text-gray-500 inline-flex">{product.banos}  baños </p>
                                    :
                                    null
                                }
                                {
                                    product.m2Construction ? 
                                    <p className="mt-1 text-sm text-gray-500 inline-flex">{product.m2Construction} m2  <span className="ml-2 text-black"><svg  xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg></span> </p>
                                    :
                                    null
                                }
                                
                                    
                                    {
                                        product.sqMeter ?
                                        <p className="mt-1 text-sm text-gray-500 inline-flex">{product.sqMeter} m2  <span><img className="ml-2" alt="metros cuadrados" src="https://img.icons8.com/material-sharp/24/000000/bed-size.png"/></span> </p>
                                        :
                                        null
                                    }
                                    
                                </div>
                                <p className="mt-4 text-base font-medium text-gray-900">{product.price} mxn</p>
                                <Link to={`/resumen/propiedad/${product.id}`}  >
                                    <button
                                        type="button"
                                        className="inline-flex mt-2 items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-black hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                                    >
                                        ver más
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

