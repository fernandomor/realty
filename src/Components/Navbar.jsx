import React from 'react'
import { Fragment , useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom';

export default function Navbar() {

    const navigation = {
        categories: [
            {
                name: 'Propiedades',
                featured: [
                    {
                        name: 'Casa',
                        href: '/tipoPropiedad/casa',
                        imageSrc: 'https://images.pexels.com/photos/7599735/pexels-photo-7599735.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                        imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                    },
                    {
                        name: 'Terreno',
                        href: '/tipoPropiedad/terreno',
                        imageSrc: 'https://images.unsplash.com/photo-1602794944783-227f826f9d12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80',
                        imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                    },
                    {
                        name: 'Comercial',
                        href: '/tipoPropiedad/comercial',
                        imageSrc: 'https://images.unsplash.com/photo-1579487785973-74d2ca7abdd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=388&q=80',
                        imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
                    },
                    {
                        name: 'Departamentos',
                        href: '/tipoPropiedad/departamento',
                        imageSrc: 'https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                        imageAlt: 'Model opening tan leather long wallet with credit card pockets and cash pouch.',
                    },
                ],
            }
        ],
        pages: [
            { name: 'Equipo', href: '/equipo' },
            { name: 'Franquicias', href: '/#franquicias' },
        ],
    }
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="relative z-10 bg-black">
        <nav aria-label="Top">
            {/* Top navigation */}

            <Transition.Root show={mobileMenuOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setMobileMenuOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                            <div className="px-4 pt-5 pb-2 flex">
                                <button
                                    type="button"
                                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <span className="text-black color-black ">

                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
</svg>
                                    </span>
                                </button>
                            </div>

                            {/* Links */}
                            <Tab.Group as="div" className="mt-2">
                                <div className="border-b border-gray-200">
                                    <Tab.List className="-mb-px flex px-4 space-x-8">
                                        {navigation.categories.map((category) => (
                                            <Tab
                                                key={category.name}
                                                className={({ selected }) =>
                                                    classNames(
                                                        selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent',
                                                        'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
                                                    )
                                                }
                                            >
                                                {category.name}
                                            </Tab>
                                        ))}
                                    </Tab.List>
                                </div>
                                <Tab.Panels as={Fragment}>
                                    {navigation.categories.map((category) => (
                                        <Tab.Panel key={category.name} className="px-4 py-6 space-y-12">
                                            <div className="grid grid-cols-2 gap-x-4 gap-y-10 ">
                                                {category.featured.map((item) => (
                                                    <div key={item.name} className="group relative">
                                                        <div className="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto">
                                                            <img src={item.imageSrc} alt={item.imageAlt} className="object-center object-cover" />
                                                        </div>
                                                        <a href={item.href} className="mt-6 block text-sm font-medium text-gray-900">
                                                            <span className="absolute z-10 inset-0" aria-hidden="true" />
                                                            {item.name}
                                                        </a>
                                                        <p aria-hidden="true" className="mt-1 text-sm text-gray-500">
                                                            ver más
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </Tab.Panel>
                                    ))}
                                </Tab.Panels>
                            </Tab.Group>

                            <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                                {navigation.pages.map((page) => (
                                    <div key={page.name} className="flow-root">
                                        <a href={page.href} className="-m-2 p-2 block font-medium text-gray-900">
                                            {page.name}
                                        </a>
                                    </div>
                                ))}
                            </div>

                         


                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition.Root>
            {/* Secondary navigation */}
            <div className="backdrop-blur-md backdrop-filter bg-opacity-10 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div>
                        <div className="h-16 flex items-center justify-between">
                            {/* Logo (lg+) */}
                            <div className="hidden lg:flex-1 lg:flex lg:items-center">
                                <Link to={"/"}>
                                    
                                    <span className="sr-only">realty plus</span>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://realty-plus.org/wp/wp-content/uploads/2017/06/RealtyPlus_Logotipo_pequenoblanco_b.png"
                                        alt=""
                                    />
                                
                                </Link>
                            </div>

                            <div className="hidden h-full lg:flex">
                                {/* Flyout menus */}
                                <Popover.Group className="px-4 bottom-0 inset-x-0">
                                    <div className="h-full flex justify-center space-x-8">
                                        {navigation.categories.map((category) => (
                                            <Popover key={category.name} className="flex">
                                                {({ open }) => (
                                                    <>
                                                        <div className="relative flex">
                                                            <Popover.Button className="relative z-10 flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium text-white">
                                                                {category.name}
                                                                <span
                                                                    className={classNames(
                                                                        open ? 'bg-white' : '',
                                                                        'absolute -bottom-px inset-x-0 h-0.5 transition ease-out duration-200'
                                                                    )}
                                                                    aria-hidden="true"
                                                                />
                                                            </Popover.Button>
                                                        </div>

                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-200"
                                                            enterFrom="opacity-0"
                                                            enterTo="opacity-100"
                                                            leave="transition ease-in duration-150"
                                                            leaveFrom="opacity-100"
                                                            leaveTo="opacity-0"
                                                        >
                                                            <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
                                                                {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                                                <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                                                <div className="relative bg-white">
                                                                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                                                        <div className="grid grid-cols-4 gap-y-10 gap-x-8 py-16">
                                                                            {category.featured.map((item) => (
                                                                                <div key={item.name} className="group relative">
                                                                                    <div className="h-72 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                                        <img
                                                                                            src={item.imageSrc}
                                                                                            alt={item.imageAlt}
                                                                                            className="object-center object-cover"
                                                                                        />
                                                                                    </div>
                                                                                    <a href={item.href} className="mt-4 block font-medium text-gray-900">
                                                                                        <span className="absolute z-10 inset-0" aria-hidden="true" />
                                                                                        {item.name}
                                                                                    </a>
                                                                                    <p aria-hidden="true" className="mt-1">
                                                                                        Ver todo
                                                                                    </p>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Popover.Panel>
                                                        </Transition>
                                                    </>
                                                )}
                                            </Popover>
                                        ))}

                                        {navigation.pages.map((page) => (
                                            <a
                                                key={page.name}
                                                href={page.href}
                                                className="flex items-center text-sm font-medium text-white"
                                            >
                                                {page.name}
                                            </a>
                                        ))}
                                    </div>
                                </Popover.Group>
                            </div>

                            {/* Mobile menu and search (lg-) */}
                            <div className="flex-1 flex items-center lg:hidden">
                                <button type="button" className="-ml-2 p-2 text-white" onClick={() => setMobileMenuOpen(true)}>
                                    <span className="sr-only">Open menu</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
</svg>
                                </button>

                                
                            </div>

                            {/* Logo (lg-) */}
                            <Link to={"/"}>

                            <div className="lg:hidden">
                                <span className="sr-only">Realty Plus</span>
                                <img
                                    src="https://realty-plus.org/wp/wp-content/uploads/2017/06/RealtyPlus_Logotipo_pequenoblanco_b.png"
                                    alt=""
                                    className="h-8 w-auto"
                                />
                            </div>
                            </Link>

                            <div className="flex-1 flex items-center justify-end">
                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    )
}


