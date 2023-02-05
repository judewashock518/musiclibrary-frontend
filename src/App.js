import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response.data);
    setSongs(response.data)
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Release Date</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
      <div>
          <button onClick={() => getAllSongs()}> Get All Songs </button>
      </div>
    </div>
  );
}

export default App;
