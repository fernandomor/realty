import { useEffect, useState , Fragment } from 'react'
import { Disclosure, Tab , Dialog, Transition } from '@headlessui/react'
import { useMutation, useQuery } from '@apollo/client'
import { GET_SINGLE } from '../GraphQL/query'
import { useParams } from 'react-router'
import { NEW_INTERESADO } from '../GraphQL/mutation'



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function SinglePropiedad() {

    const { id } = useParams()
    const { data } = useQuery(GET_SINGLE, { variables: { id: id } })
    const [nuevoiInteresado] = useMutation(NEW_INTERESADO)
    const [open, setOpen] = useState(false)
    const [product, setProduct] = useState({
        name: ' ',
        price: '$ ',
        ciudad : " ",
        m2Construccion: " ",
        m2Terreno: " ",
        images: [
            {
                id: 1,
                name: '  ',
                src: ' ',
                alt: ' ',
            }
        ],
        description: `
        <p> </p>
      `,
        details: [
            {
                name: ' ',
                items: [
                    '  ',
                    ' ',
                    '  ',
                    ' ',
                    ' ',
                    ' ',
                    ' ',
                ],
            },
            // More sections...
        ],
    })





    useEffect(() => {
        if (data !== undefined) {
            setProduct({
                name: data.propiedades[0].titulo,
                price: `$ ${data.propiedades[0].precio.toLocaleString('en-US')}`,
                ciudad : data.propiedades[0].ciudade.ciudad,
                colonia : data.propiedades[0].colonia,
                vendedorImg: data.propiedades[0].vendedor.foto.url,
                vendedorTel: data.propiedades[0].vendedor.telefono,
                m2Construccion: data.propiedades[0].m2Construccion,
                m2Terreno: data.propiedades[0].m2Terreno,
                images: data.propiedades[0].img.map(e => {
                    return { src:e.url }
                }),
                description: `
                <p>${data.propiedades[0].descripcion}</p>
              `,
                details: [
                    {
                        name: 'Features',
                        items: [
                            'Multiple strap configurations',
                            'Spacious interior with top zip',
                            'Leather handle and tabsDS',
                            'Interior dividers',
                            'Stainless strap loops',
                            'Double stitched construction',
                            'Water-resistant',
                        ],
                    },
                    // More sections...
                ],
            })
        }

    }, [data])

    const [displayPhone, setDisplayPhone] = useState("+52 ********")
    const [phone, setPhone] = useState(" ")
    const [show, setShow] = useState(true)
    const [error, setError] = useState(null)

    const handleInput = (ev) =>{
        setPhone(ev.target.value)
    }

    const handleClick = () =>{

        if(phone.length < 10 || phone.length > 11){
            setError("Ingresa número válido")
        }else{
            setDisplayPhone(product.vendedorTel)
            nuevoiInteresado({variables: {id: id ,  tel: phone}})
            setShow(false)
            setError(null)
        }
    
        
    }


    return (
        <div className="bg-white mb-24">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                    {/* Image gallery */}
                    <Tab.Group as="div" className="flex flex-col-reverse">
                        {/* Image selector */}
                        <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                            <Tab.List className="grid grid-cols-4 gap-6">
                                {product.images.map((image, id) => (
                                    <Tab
                                        key={id}
                                        className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                                    >
                                        {({ selected }) => (
                                            <>
                                                <span className="absolute inset-0 rounded-md overflow-hidden">
                                                    <img src={image.src} alt="" className="w-full h-full object-center object-cover" />
                                                </span>
                                                <span
                                                    className={classNames(
                                                        selected ? 'ring-indigo-500' : 'ring-transparent',
                                                        'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </>
                                        )}
                                    </Tab>
                                ))}
                            </Tab.List>
                        </div>

                        <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
                            {product.images.map((image, id) => (
                                <Tab.Panel key={id}>
                                    <img
                                        src={image.src}
                                        alt={"realtyplus"}
                                        className="w-full h-full object-center object-cover sm:rounded-lg"
                                    />
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>

                    {/* Product info */}
                    <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>

                        <div className="mt-3">
                            <h2 className="sr-only">Precio de la propiedad</h2>
                            <p className="text-3xl text-gray-900">{product.price}</p>
                        </div>

                        

                        <div className="mt-6">
                            <h3 className="sr-only">Información de la propiedad</h3>

                            {
                                product.ciudad ? 
                                <p className="inline-flex">  <span> 
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
</span> {product.colonia} , {product.ciudad}

                                
                                </p>
                                : 

                                null
                            }
                            

                            <div>

                            {
                                    product.m2Construccion ? 
                                    <p className="mt-1 text-sm text-gray-500 inline-flex">{product.m2Construccion} m2  de construcción <span className="ml-2 text-black"><svg  xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg></span> </p>
                                    :
                                    null
                                }
                            </div>
                            <div>

                                
                                    {
                                        product.m2Terreno ?
                                        <p className="mt-1 text-sm text-gray-500 inline-flex">{product.m2Terreno} m2 de terreno <span><img className="ml-2" alt="metros cuadrados" src="https://img.icons8.com/material-sharp/24/000000/bed-size.png"/></span> </p>
                                        :
                                        null
                                    }
                            </div>

                            <div
                                className="text-base text-gray-700 space-y-6"
                                dangerouslySetInnerHTML={{ __html: product.description }}
                            />
                        </div>

                        <div className="mt-6">



                            <div className="mt-10 flex sm:flex-col1">
                                <button
                                    onClick={() => setOpen(true)}
                                    className="max-w-xs flex-1 bg-red-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-red-500 sm:w-full"
                                >
                                    <img className="h-8 w-8 mr-2" alt="vendedor" src="https://img.icons8.com/color/50/000000/whatsapp--v1.png"/> Contactar agente
                                </button>
                                
                                <button
                                    type="button"
                                    className="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                                >
                                    <span className="sr-only">Contactar agente</span>
                                </button>
                            </div>
                        </div>

                        <section aria-labelledby="details-heading" className="mt-12">
                            <h2 id="details-heading" className="sr-only">
                                Additional details
                            </h2>

                            {/* <div className="border-t divide-y divide-gray-200">
                                {product.details.map((detail) => (
                                    <Disclosure as="div" key={detail.name}>
                                        {({ open }) => (
                                            <>
                                                <h3>
                                                    <Disclosure.Button className="group relative w-full py-6 flex justify-between items-center text-left">
                                                        <span
                                                            className={classNames(open ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-medium')}
                                                        >
                                                            {detail.name}
                                                        </span>
                                                        <span className="ml-6 flex items-center">
                                                            {open ? (
                                                                <p>abrir</p>
                                                            ) : (
                                                                <p>cerrar</p>
                                                            )}
                                                        </span>
                                                    </Disclosure.Button>
                                                </h3>
                                                <Disclosure.Panel as="div" className="pb-6 prose prose-sm">
                                                    <ul >
                                                        {detail.items.map((item) => (
                                                            <li key={item}>{item}</li>
                                                        ))}
                                                    </ul>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                ))}
                            </div> */}
                        </section>
                    </div>
                </div>
            </div>
            <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div>
                
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                  <span className="inline-flex">

                   <img className="rounded-full h-12" alt="vendedor realty plus mexico " src={product.vendedorImg}/>
                    <span className="mt-3 ml-4">
                    {displayPhone}
                    </span> 
                  </span>
                  </Dialog.Title>
                  <div className="mt-2">
                  {
                      show? 
                      <p className="text-sm">Por favor ingresa tu número teléfonico, para poder desplegar el teléfono del vendedor. Esto ayudará al seguimiento de tu solicitud.</p>
                      :

                      <p className="text-sm">Gracias, en breve te contactaremos para darle seguimiento a tu solicitud</p>
                  }
                  
                  <div>
                {error === null ? 
                    null
                    :
                    <span className="inline-flex items-center mt-4  px-4 py-4 rounded-lg text-xs font-medium bg-red-600 text-white">
        {error}
      </span>
                    }
                  </div>
                </div>
              </div>

              {
                  show?
                  <div>

      
<div className="mt-1 py-6">
  <input
  onChange={handleInput}
    type="number"
    name="phone"
    id="phone"
    className="shadow-sm py-4 ring-black border border-black block w-full sm:text-sm rounded-md"
    placeholder=" Teléfono celular"
    aria-describedby="phone-description"
  />
</div>
 

    
        <div className="">
          <button
            type="button"
            className="inline-flex justify-center w-full py-4 rounded-md border border-transparent shadow-sm px-4  bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
            onClick={() => handleClick()}
          >
            Ver número de agente 
          </button>
        </div>

</div>

                  :

                  null
              }
   
           

            </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
        </div>
    )
}
