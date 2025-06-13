import { useState, useEffect } from "react";
import PetInfo from "../components/PetInfo";
import { pets as listaPets } from "../data/pets";
import './style/Gallery.css';


export default function Gallery() {
    const [pets, setPets] = useState([]);
    const [petsLength, setPetsLength] = useState(0);

    useEffect(() => {
        setPets(listaPets); 
        setPetsLength(listaPets.length); 


        console.log('Página da galeria carregada');

        return () => {
            console.log("Saindo da galeria de pets");
        };
        
    }, []);


    

    return (
        <div className="galeria">
            <h1>Galeria de Pets</h1>
            <p style={{ fontWeight: 500 }}>Total de pets disponíveis: {petsLength}</p>
            <ul className="pet-grid">
                {pets.map((pet) => (
                    <PetInfo
                        key={pet.id}
                        id={pet.id}
                        nome={pet.nome}
                        especie={pet.especie}
                        idade={pet.idade}
                    />
                ))}
            </ul>
        </div>
    );
}
