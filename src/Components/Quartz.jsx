import React from 'react'

export default function Quartz() {


    return (
        <div className="relative bg-white">
          <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
              <img
                className="h-56 w-full object-cover lg:absolute lg:h-full"
                src="https://images.unsplash.com/photo-1592136184798-ca0d8e17643a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
            <div className="lg:col-start-2 lg:pl-8">
              <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
                <h2 className="leading-6 text-red-600 font-semibold tracking-wide uppercase">Realty plus</h2>
                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Fanquicia Quartz
                </h3>
                <p className="mt-8 text-lg text-gray-500">
                Podrás ser tu propio jefe en tu inmobiliaria y con oficina física.
                </p>
                <div className="mt-5 prose prose-indigo text-gray-500">
                  <p>
                  Cuota inicial de $144,000.00 MXN más iva
                  </p>
                  <p>
                  Royalty mensual*

                  </p>
                  <p>
                  Duración de franquicia por 5 años
                  </p>
            
                  <p>
                  Se requiere oficina por franquicia
                  </p>
                  <p>
                  12 meses sin intereses (con tarjetas participantes)aplican restricciones
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
}



  