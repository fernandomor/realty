import React from 'react'


const footerNavigation = {
    shop: [
        { name: 'Iron', href: '/franquicia/iron' },
        { name: 'Quartz', href: '/franquicia/quartz' }
    ],
    company: [
        { name: 'Casa', href: '/tipoPropiedad/casa' },
        { name: 'Terreno', href: '/tipoPropiedad/terreno' },
        { name: 'Comercial', href: '/tipoPropiedad/comercial' },
        { name: 'Departamentos', href: '/tipoPropiedad/departamento' },
        { name: 'Bodegas', href: '/tipoPropiedad/bodegas' },
        { name: 'Naves industriales', href: '/tipoPropiedad/naves' },
    ],
    account: [
        { name: 'Monterrey', href: '/resultado/Monterrey' },
        { name: 'Guadalajara', href: '/resultado/Guadalajara' },
        { name: 'Querétaro', href: '/resultado/Querétaro' },
        { name: 'León', href: '/resultado/León' },
        { name: 'CDMX', href: '/resultado/CDMX' },    
        { name: 'Guanajuato', href: '/resultado/Guanajuato' },
    ],
  
}
export default function Footer() {


    
    return (
        <footer aria-labelledby="footer-heading" className="bg-gray-900">
                <h2 id="footer-heading" className="sr-only">
                    Footer
                </h2>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
                        <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                            <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-sm font-medium text-white">Franquicias</h3>
                                    <ul className="mt-6 space-y-6">
                                        {footerNavigation.shop.map((item) => (
                                            <li key={item.name} className="text-sm">
                                                <a href={item.href} className="text-gray-300 hover:text-white">
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-white">Propiedades</h3>
                                    <ul   className="mt-6 space-y-6">
                                        {footerNavigation.company.map((item) => (
                                            <li key={item.name} className="text-sm">
                                                <a href={item.href} className="text-gray-300 hover:text-white">
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-sm font-medium text-white">Ciudades</h3>
                                    <ul   className="mt-6 space-y-6">
                                        {footerNavigation.account.map((item) => (
                                            <li key={item.name} className="text-sm">
                                                <a href={item.href} className="text-gray-300 hover:text-white">
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>

                    <div className="border-t border-gray-800 py-10">
                        <p className="text-sm text-gray-400">Realtyplus &copy; 2021 México.</p>
                    </div>
                </div>
            </footer>
    )
}
