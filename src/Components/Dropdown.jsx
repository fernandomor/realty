import React, { useContext, useState } from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import SearchContext from '../Context/SearchContext'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Dropdown() {

    const [selected, setSelected] = useState("Selecciona")
    const {addType, type} = useContext(SearchContext)

    const handleChange = (type) =>{
        addType(type)
    }


    return (
        <Menu as="div" className="relative inline-block text-left  w-full">
            <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-4 lg:mt-0 mt-4 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                    {type === null ? selected : type}
                    <svg xmlns="http://www.w3.org/2000/svg" className="-mr-1 ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 z-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item onClick={() => handleChange("Venta")}>
                            {({ active }) => (
                                <p
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Venta
                                </p>
                            )}
                        </Menu.Item>
                        <Menu.Item onClick={() => handleChange("Renta")}>
                            {({ active }) => (
                                <p
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Renta
                                </p>
                            )}
                        </Menu.Item>

                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
