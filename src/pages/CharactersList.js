import React from 'react'
import {useQuery, gql} from '@apollo/client'
import './CharacterList.css'
const GET_CHARACTERS = gql `
query {
    characters {
      results {
        name
        id
        image
      }
    }
  }
`

export default function CharactersList() {

    const {error, data, loading} = useQuery(GET_CHARACTERS);
        console.log(data)

    if(loading) return <div>spinner...</div>
    if(error) return <div>something went wrong</div>
  return (
    <div className= "character-list">
        {data.characters.results.map(char => (
            <div key={char.id}>
                <img src={char.image}/>
                <h2>{char.name}</h2>
            </div>
        ))}
    </div>
  )
}
