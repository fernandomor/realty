import { gql } from '@apollo/client';


export const GET_ALL_PROPERTIES = gql`
query{
    propiedades{
      precio
      tipoDeInmueble
      categoria
    }
  }
`;



export const GET_CITIES = gql`
query{
    ciudades{
      ciudad
    }
  }
`;


export const GET_SINGLE = gql`
query property($id:ID!){
	propiedades(where :{id:$id}){
    descripcion
    titulo
    precio
    m2Terreno
    ubicacion
    colonia
    vendedor{
      foto{
        url
      }
      telefono
    }
    habitaciones
    banos
    img{
        url
      }
    m2Construccion
    ciudade{
      ciudad
    }
  }
}
`;



export const GET_PROPERTY_BY_CITY_TYPE_CATEGORY = gql`
query result($ciudad:String!,$tipo:String!,$cat:String!){
	propiedades(where: {_and: [{ciudade:{ciudad:$ciudad}},{tipoDeInmueble:$tipo},{categoria:$cat}]}){
    titulo
    precio
    categoria
    id
    ciudade{
      ciudad
    }
    colonia
    descripcion
    m2Terreno
    m2Construccion
    img{
      url
    }
    habitaciones
    banos
  }
}

`;


export const GET_PROPERTY_BY_CITY = gql`
query result($ciudad:String!){
	propiedades(where: {ciudade:{ciudad:$ciudad}}){
    titulo
    id
    categoria
    precio
    ciudade{
      ciudad
    }
    colonia
    descripcion
    m2Terreno
    m2Construccion
    img{
      url
    }
    habitaciones
    banos
  }
}

`;

export const GET_BY_CATEGORY = gql`
query tipoInmueble($tipo:String!){
	propiedades(where: {tipoDeInmueble:$tipo}){
    titulo
    precio
    categoria
    ciudade{
      ciudad
    }
    colonia
    tipoDeInmueble
    id
    descripcion
    m2Terreno
    m2Construccion
    img{
      url
    }
    habitaciones
    banos
  }
}

`;
