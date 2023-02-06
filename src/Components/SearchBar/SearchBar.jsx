import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    const [query, setQuery] = useState();
    console.log(query);

function filterMusic(event) {
    event.preventDefault();
    let response = props.parentSongs.filter((song) => {
        if(song.title.toLowerCase().includes(query)||song.artist.toLowerCase().includes(query)){
            return true;
        }
        else {
            return false;
        }
    });
    console.log(response)
    console.log(query)
    props.getSongs(response)

}

return (
    <div>
        <form onSubmit={filterMusic} className='form-grid'>
            <div className='form-group'>
             <input type='text' 
             placeholder='Filter your music library by album, artist, genre, release date, or title' 
             className='form-control' value={query} onChange={(event) => setQuery(event.target.value)} />
            </div>
            <button type='button' class='btn btn-primary' style={{'margin-top': '1rem'}}>Search</button>
        </form>
    </div>
);}

export default SearchBar;
