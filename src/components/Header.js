import './style/Header.css'
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <header>
            <h1>PetFinder</h1>
            <ul>
                <Link to='/' className='headerLi'>Início</Link>
                <Link to='/galeria' className='headerLi'>Galeria</Link>
            </ul>
        </header>
    )
}