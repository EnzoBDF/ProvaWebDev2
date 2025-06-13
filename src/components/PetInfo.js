
import './style/PetInfo.css'



export default function PetInfo(pets, id){

      return(
        <li className='petInfo'>
            <h1 className='petName'>{pets.nome}</h1>
            <p className='petSpecies'><span style={{fontWeight:500}}>Espécie:</span>{pets.especie}</p>
            <p className='petAge'><span style={{fontWeight:500}}>Idade:</span>{pets.idade}</p>
        </li>
      )

}