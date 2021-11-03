import { gql } from '@apollo/client';


export const NEW_INTERESADO = gql`
mutation nuevoiInteresado($id:ID! , $tel:Long!){
    createInteresado(
      input: { data:{
        telefono: $tel
        propiedade: $id 
      }}
    ){
      interesado{
        telefono
        propiedade{
          titulo
        }
      }
    }
  }
`;
