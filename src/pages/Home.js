import './style/Home.css'
import { Link } from "react-router-dom"


export default function Home(){
    return(
        <div className='home'>
            <h1>Bem-vindo ao <span style={{color:'#3b8540'}}>PetFinder</span></h1>
            <p>Conectamos você a pets incríveis que estão procurando um novo lar</p>
            <Link to='/galeria' className='homeButton'>Explorar Galeria</Link>
        </div>
    )
}