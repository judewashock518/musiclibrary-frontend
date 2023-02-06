import React from 'react';
import axios from 'axios';


const DisplayMusicLibrary = (props) => {

    const DeleteSong = async(id) => {
    
        const response = await axios.delete(`http://127.0.0.1:8000/api/music/${id}/`)
        console.log(response.data);
        props.getAllSongs();
    }

    return ( 
        <table className = 'table'>
            <thead>
            <h2>your Playlist</h2>
            <tr>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Release Date</th>
                <th>Genre</th>
            </tr>
            </thead>
            <tbody>
            {props.parentSongs.map((song) => {
            return (
            <tr>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.release_date}</td>
                <td>{song.genre}</td> 
                <button type="button" class="btn btn-primary" 
                style={{'margin-left': '1rem'}} onClick={() => DeleteSong(song.id)}>Delete</button>
            </tr>
            );
        })}
        </tbody>
      </table>
    );
}
 
export default DisplayMusicLibrary;