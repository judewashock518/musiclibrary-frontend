// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


const DisplayMusicLibrary = (props) => {
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
                <button type="button" class="btn btn-primary" style={{'margin-left': '1rem'}}>Delete</button>
            </tr>
            );
        })}
        </tbody>
      </table>
    );
}
 
export default DisplayMusicLibrary;