import React, { useState, useEffect } from 'react';
import DisplayMusicLibrary from './Components/DisplayMusicLibrary/DisplayMusicLibrary';
import axios from 'axios';


function App() {

  const [songs, setSongs] = useState([]);

  const fetchData = async () => {
      const {data} = await axios.get('http://127.0.0.1:8000/api/music/')

      setSongs(data)
  }

  useEffect(() => {
    fetchData();
    getAllSongs();
  }, []);

  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/')
    console.log(response.data);
    setSongs(response.data)

  }

  return (
    <div>
      <DisplayMusicLibrary parentSongs={songs}/>
    </div>
  );
}

export default App;

{/* <button onClick={() => getAllSongs()}> Get All Songs </button> */}