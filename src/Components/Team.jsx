import React from 'react'

export default function Team() {

    const people = [
        {
            name: 'Alberto Murcia',
            role: 'Red Internacional',
            imageUrl:
              ' https://realty-plus.org/wp/wp-content/uploads/2016/10/Foto-AMJ-001.jpg',
            bio:
              'Estoy aquí para ayudarte en lo que necesites para abrir tu franquicia o vender tu propiedad. Llevo más de 15 años en la industria inmobiliaria',
            
          },
        {
          name: 'Elizabeth Trujillo',
          role: 'Directora México',
          imageUrl:
            'https://realty-plus.org/wp/wp-content/uploads/2021/05/Elizabeth.jpg',
          bio:
            'Estoy aquí para ayudarte en lo que necesites para abrir tu franquicia o vender tu propiedad. Llevo más de 15 años en la industria inmobiliaria',
          
        },
          {
            name: 'Germán Pérez',
            role: 'Coordinador de ventas',
            imageUrl:
              'https://live.staticflickr.com/65535/51649378955_8418658225_n.jpg',
            bio:
              'Estoy aquí para ayudarte en lo que necesites para abrir tu franquicia o vender tu propiedad. Llevo más de 15 años en la industria inmobiliaria',
            
          },

      ]


    return (
        <div className="bg-white">
          <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
              <div className="space-y-5 sm:space-y-4">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Equipo Realty Plus México</h2>
                <p className="text-xl text-gray-500">
                Somos una red inmobiliaria especial. Compartimos negocio entre todos los agentes y oficinas de la marca de una forma real.
Tú no eres uno más, tus opiniones cuentan para la mejora del Grupo.
                </p>
              </div>
              <div className="lg:col-span-2">
                <ul
                  className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
                >
                  {people.map((person) => (
                    <li key={person.name}>
                      <div className="space-y-4">
                        <div className="aspect-w-3 aspect-h-2">
                          <img className="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt="" />
                        </div>
                        <div className="text-lg leading-6 font-medium space-y-1">
                          <h3>{person.name}</h3>
                          <p className="text-red-600">{person.role}</p>
                        </div>
                        <div className="text-lg">
                          <p className="text-gray-500">{person.bio}</p>
                        </div>
    
                       
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
}



  
 