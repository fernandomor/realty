import { useContext, useState } from 'react'
import Dropdown from './Dropdown'
import DropTipo from './DropTipo'
import { useQuery } from '@apollo/client'
import { GET_CITIES } from '../GraphQL/query'
import SearchContext from '../Context/SearchContext'
import { useHistory } from 'react-router-dom'



const categories = [
    {
        name: 'Monterrey',
        href: '/resultado/Monterrey',
        imageSrc: 'https://images.unsplash.com/photo-1618950399688-4845c1d4ed5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    },
    {
        name: 'Guadalajara',
        href: '/resultado/Guadalajara',
        imageSrc: 'https://images.unsplash.com/photo-1565670105658-ea35d27f7de7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=725&q=80',
    },
    {
        name: 'Querétaro',
        href: '/resultado/Querétaro',
        imageSrc: 'https://images.unsplash.com/photo-1588463524464-7c15c1472342?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    },
    {
        name: 'Zacatecas',
        href: '/resultado/Zacatecas',
        imageSrc: 'https://images.unsplash.com/photo-1586752865443-a00584a1d382?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    },
    {
        name: 'CDMX',
        href: '/resultado/CDMX',
        imageSrc: 'https://images.unsplash.com/photo-1584669727833-88b47506defb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=762&q=80',
    },
]
const collections = [
    {
        name: 'Franquicia IRON',
        href: '/franquicia/iron',
        imageSrc: 'https://images.unsplash.com/photo-1564081727837-1ab9d67c41f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
        imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
        description: 'Sin oficina abierta al público',
    },
    {
        name: 'Franquicia QUARTZ',
        href: '/franquicia/quartz',
        imageSrc: 'https://images.unsplash.com/photo-1592136184798-ca0d8e17643a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
        imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
        description: 'Con oficina física',
    }
]



export default function Home() {

    const history = useHistory()

    //Queries
    const { data } = useQuery(GET_CITIES);
    const [result, setResult] = useState("")
    const [text, setText] = useState("")
    const [searching, setSearching] = useState(false)
    const {addCity , city , type, category} = useContext(SearchContext)
    const [error , setError ] = useState(null)

    //Handle changes

    const handleChanges = (ev) => {
        if (ev.target.value.length > 0) {
            setSearching(true)
            if (data !== undefined) {
                const filtered = data.ciudades.filter(e => {
                    return e.ciudad.toLowerCase().includes(ev.target.value.toLowerCase())
                })
                setResult(filtered)
            }
        } else {
            setSearching(false)
        }
        setText(ev.target.value)
    }
    const clickCity = (city) => {
        setText(city)
        addCity(city)
        setSearching(false)
    }

    const  handleSubmit = (ev) =>{
        ev.preventDefault()

        if(city === null || type === null || category === null){

            if(city === null){
                setError("Selecciona una ciudad válida")
            }
            
            if(type == null){
                setError("Selecciona venta o renta")
            }
        
            if(category === null){
                setError("Selecciona el tipo de propiedad")
            }
        }else{
            
            history.push(`/filter/${city}/${category.toLowerCase()}/${type.toLowerCase()}`)
        }

       

    }


    return (
        <div className="bg-white">
            
            

            {/* Hero section */}
            <div className="relative bg-gray-900">

                {/* Decorative image and overlay */}
                <div aria-hidden="true" className="absolute inset-0 overflow-hidden z-0">
                    <img
                        src="https://images.unsplash.com/photo-1507149833265-60c372daea22?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80"
                        alt=""
                        className="w-full h-full object-center z-0 object-cover"
                    />
                </div>
                <div aria-hidden="true" className="absolute inset-0 z-0 bg-gray-900 opacity-50" />

               
                

                <div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">La Red Inmobiliaria Colaborativa</h1>

                    {error === null ? 
                    null
                    :
                    <span className="inline-flex items-center mt-3 px-4 py-4 rounded-lg text-xs font-medium bg-red-600 text-white">
        {error}
      </span>
                    }

                    

                    <div className="mt-5">
                        <form 
                        onSubmit={(ev)=>handleSubmit(ev)}
                        className="sm:flex">
                            <label htmlFor="city" className="sr-only">
                                Busca por ubicación
                            </label>
                            <div className="lg:mx-4">
                                <input
                                    onChange={(ev) => handleChanges(ev)}
                                    name="city"
                                    type="text"
                                    required
                                    value={text}
                                    className="w-full border-red px-5  py-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-700 focus:ring-red rounded-md"
                                    placeholder=" Busca por ubicación"
                                />
                                {
                                    searching ?

                                        <div className="bg-white shadow overflow-hidden sm:rounded-md w-56 mt-2 absolute z-50">

                                            {
                                                result !== undefined && data !== undefined ?
                                                    result.map((e, id) => {
                                                        return <ul className="divide-y divide-gray-200 " key={id}>

                                                            <li
                                                                onClick={() => clickCity(e.ciudad)}
                                                                className="py-4  flex  hover:bg-red-100
                                        cursor-pointer">

                                                                <div className="ml-3 ">
                                                                    <p className="text-md font-medium text-gray-900">{e.ciudad}</p>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    })
                                                    :
                                                    <li
                                                        className="py-4 flex  hover:bg-red-100
                                        cursor-pointer">

                                                        <div className="ml-3 ">
                                                            <p className="text-md font-medium text-gray-900">Cargando...</p>
                                                        </div>
                                                    </li>
                                            }

                                        </div>

                                        :
                                        null
                                }
                            </div>


                            <div className="mx-2">
                                <Dropdown></Dropdown>
                            </div>
                            <div className="mx-2">

                                <DropTipo></DropTipo>
                            </div>
                            <div>

                                <button
                                
                                    type="submit"
                                    className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                                >
                                    Buscar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <main>
                {/* Category section */}
                <section aria-labelledby="category-heading" className="pt-24 sm:pt-32 xl:max-w-7xl xl:mx-auto xl:px-8">
                    <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
                        <h2 id="category-heading" className="text-2xl font-extrabold tracking-tight text-gray-900">
                            Ciudades
                        </h2>
                        {/* <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                            Ver ciudades<span aria-hidden="true"> &rarr;</span>
                        </a> */}
                    </div>

                    <div className="mt-4 flow-root">
                        <div className="-my-2">
                            <div className="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
                                <div className="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
                                    {categories.map((category) => (
                                        <a
                                            key={category.name}
                                            href={category.href}
                                            className="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
                                        >
                                            <span aria-hidden="true" className="absolute inset-0">
                                                <img src={category.imageSrc} alt="" className="w-full h-full object-center object-cover" />
                                            </span>
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                                            />
                                            <span className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="mt-6 px-4 sm:hidden">
                        <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                           Ver ciudades<span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div> */}
                </section>

                {/* Featured section */}
                <section
                    aria-labelledby="social-impact-heading"
                    className="max-w-7xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:px-8"
                >
                    <div className="relative rounded-lg overflow-hidden">
                        <div className="absolute inset-0">
                            <img
                                src="https://images.unsplash.com/photo-1616587224026-668840f26916?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                                alt=""
                                className="w-full h-full object-center object-cover"
                            />
                        </div>
                        <div className="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
                            <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
                                <h2
                                    id="social-impact-heading"
                                    className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
                                >
                                    <span className="block sm:inline">Vende tu </span>
                                    <span className="block sm:inline">propiedad</span>
                                </h2>
                                <p className="mt-3 text-xl text-white">
                                    Contáctanos y nosotros nos encargamos de venderla en nuestra red a nivel mundial.
                                </p>
                                <a
                                    href="https://api.whatsapp.com/send?phone=5213324949933&text=Me%20gustar%C3%ADa%20vender%20una%20propiedad%20con%20ustedes%2C%20los%20encontr%C3%A9%20por%20su%20p%C3%A1gina%20web"
                                    className="mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                                >
                                    Contactar ventas
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Collection section */}
                <section
                id="franquicias"
                    aria-labelledby="collection-heading"
                    className="max-w-xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8"
                >
                    <h2 id="collection-heading" className="text-2xl font-extrabold tracking-tight text-gray-900">
                        Únete a nuestra red de franquicias
                    </h2>
                    <p className="mt-1 text-base text-gray-500">
                        Te proponemos una franquicia inmobiliaria para conseguir resultados de éxito y además conectar con inmobiliarias de todo el mundo. Si quieres saber más, deja tus datos:
                    </p>

                    <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8">
                        {collections.map((collection) => (
                            <a key={collection.name} href={collection.href} className="group block">
                                <div
                                    aria-hidden="true"
                                    className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
                                >
                                    <img
                                        src={collection.imageSrc}
                                        alt={collection.imageAlt}
                                        className="w-full h-full object-center object-cover"
                                    />
                                </div>
                                <h3 className="mt-4 text-xl font-bold text-gray-900">{collection.name}</h3>
                                <p className="text-md text-gray-500">{collection.description}</p>
                            </a>
                        ))}
                    </div>
                </section>

                {/* Featured section */}
                <section aria-labelledby="comfort-heading" className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <div className="relative rounded-lg overflow-hidden">
                        <div className="absolute inset-0">
                            <img
                                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80"
                                alt=""
                                className="w-full h-full object-center object-cover"
                            />
                        </div>
                        <div className="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
                            <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
                                <h2 id="comfort-heading" className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                                    ¿Por qué una franquicia inmobiliaria?
                                </h2>
                                <p className="mt-3 text-xl text-white">
                                    Pásate al mercado de los emprendimientos rentables como las franquicias de Realtyplus, donde montar una franquicia inmobiliaria te llevará al éxito.
                                    Se trata de uno de los mejores negocios con poca inversión y ¡alta rentabilidad! Está basado en métodos que funcionan con resultados garantizados.
                                </p>
                                <a
                                    href="https://api.whatsapp.com/send?phone=5213324949933&text=Me%20interesa%20las%20franquicias%20inmobiliarias%2C%20vi%20su%20informaci%C3%B3n%20en%20la%20p%C3%A1gina%20y%20quisiera%20saber%20m%C3%A1s"
                                    className="mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                                >
                                    Conocer más
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            
        </div>
    )
}

