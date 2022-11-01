import React from 'react'
import { Link } from 'react-router-dom';
import { useCharacters } from '../hooks/useCharacters';
import './CharacterList.css'


export default function CharactersList() {
const {error, loading, data} = useCharacters();

    if(loading) return <div>spinner...</div>
    if(error) return <div>something went wrong</div>
  return (
    <div className= "character-list">
        {data.characters.results.map(char => (
            <Link to={`/${char.id}`}>
            <div key={char.id}>
                <img src={char.image}/>
                <h2>{char.name}</h2>
            </div>
            </Link>
        ))}
    </div>
  )
}
