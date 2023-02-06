import axios from 'axios';
import React, { useState } from 'react';
import './AddSongForm.css';


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
        props.getAllSongs();
    }


    return ( 
        <form onSubmit={handleSubmit} className='form-grid'>
            <h2>what's your New favorite Song?</h2>
            <div className='form-group'>
                <label>Title</label>
                <input type='text' className='form-control' value={title} onChange={(event) => setTitle(event.target.value)} />
            </div>
            <div className='form-group'>
            <label>Artist</label>
            <input type='text' className='form-control' value={artist} onChange={(event) => setArtist(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Album</label>
                <input type='text' className='form-control' value={album} onChange={(event) => setAlbum(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Release Date</label>
                <input type='date' className='form-control' value={release_date} onChange={(event) => setRelease_Date(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Genre</label>
                <input type ='text' className='form-control' value={genre} onChange={(event) => setGenre(event.target.value)}/>
            </div>
            <button type ='submit' className='btn btn-primary' style={{'margin-top': '1rem'}}>Add Song</button>
        </form>
    );
}
 
export default AddSongForm;