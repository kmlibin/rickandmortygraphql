import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        name
        location {
          name
          type
        }
        origin {
          dimension
        }
      }
    }
  }
`;

export default function Search() {
  const [name, setName] = useState("");
  //first is a functino we invoke to execute query, second is an object with loading, error, data. also get "called", which just checks if the func has ever been called. bool.
  const [getLocations, { loading, error, data, called }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: { name },
    }
  );
  return (
    <div>
      <input
        value={name}
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={() => getLocations()}>Search</button>
      {loading && <div>spinner here</div>}
      {error && <div>something went wrong</div>}
      {data && (
        <ul>
          {data.characters.results.map((char) => (
            <li key={char.location.name}>{char.location.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
