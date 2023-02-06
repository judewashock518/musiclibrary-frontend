import React, { useState, useEffect } from 'react';
import DisplayMusicLibrary from './Components/DisplayMusicLibrary/DisplayMusicLibrary';
import AddSongForm from './Components/AddSongForm/AddSongForm';
import NavBar from './Components/NavBar/NavBar';
import SearchBar from './Components/SearchBar/SearchBar';
import './App.css';
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
    <body className = 'background-image'>
    <div className='container-fluid'>
      <div className='row'>
        <NavBar />
        <div className='col-md-6'>
          <div className='border-box'>
        <DisplayMusicLibrary parentSongs={songs}/>
          </div>
        </div>
        <div className='col-md-6'>
          <div className ='border-box'>
        <AddSongForm getAllSongs={getAllSongs}/>
          </div>
        </div>
        <div className='col-md-6'>
          <div className ='border-box'>
            <SearchBar setSongs={setSongs} parentSongs={songs}/>
            <button type='secondary' 
            class='btn btn-secondary' style={{'margin-top': '1rem'}} 
            onClick={() => getAllSongs()}> Get All Songs </button>
          </div>
        </div>
      </div>
    </div>
    </body>
  );
}

export default App;