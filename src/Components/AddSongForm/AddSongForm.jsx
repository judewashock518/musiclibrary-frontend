import axios from 'axios';
import React, { useState } from 'react';


const AddSongForm = (props) => {

    const [title, setTitle] = useState();
    const [artist, setArtist] = useState();
    const [album, setAlbum] = useState();
    const [release_date, setRelease_Date] = useState('');
    const [genre, setGenre] = useState();

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/music/', {
            title,
            artist,
            album,
            release_date,
            genre
        });
        console.log(event);
        props.addNewSongProperty(event);
    }


    return ( 
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type='text' value={title} onChange={(event) => setTitle(event.target.value)} />
            <label>Artist</label>
            <input type='text' value={artist} onChange={(event) => setArtist(event.target.value)}/>
            <label>Album</label>
            <input type='text' value={album} onChange={(event) => setAlbum(event.target.value)}/>
            <label>Release Date</label>
            <input type='date' value={release_date} onChange={(event) => setRelease_Date(event.target.value)}/>
            <label>Genre</label>
            <input type ='text' value={genre} onChange={(event) => setGenre(event.target.value)}/>
            <button type ='submit'>Add</button>
        </form>
    );
}
 
export default AddSongForm;