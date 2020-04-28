import React, { useState, useEffect } from "react";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "demons", id: 1 },
    { title: "heathens", id: 2 },
    { title: "habits", id: 3 },
  ]);
  const [age, setAge] = useState(20);
  const addSong = (title) => {
    setSongs([...songs, { title, id: songs.length + 1 }]);
  };
  useEffect(() => {
    console.log("useEffect hook ran", songs);
  }, [songs]);
  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />

      <button onClick={() => setAge(age + 1)}>Increment Age : {age}</button>
    </div>
  );
};

export default SongList;
