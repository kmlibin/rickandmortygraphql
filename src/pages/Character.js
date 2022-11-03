import React from "react";
import { useParams } from "react-router-dom";

//hooks
import { useCharacter } from "../hooks/useCharacter";

//styles
import "./Character.css";

export default function Character() {
  //use params to feed id into useCharacter hook. set up route in app.js to accept id, then used link tag with the char.id
  const { id } = useParams();
  const { data, error, loading } = useCharacter(id);

  if (loading) return <div>spinner...</div>;
  if (error) return <div>something went wrong</div>;

  return (
    <div className="character">
      <img src={data.character.image} width={750} height={750} />
      <div className="character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="character-episode">
          {data.character.episode.map((episode) => (
            <div key={episode.name}>
              {episode.name} - <b>{episode.episode}</b>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
