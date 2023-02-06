import React from 'react';
import './SearchBar.css';

const SearchBar = () => (
    <form className='form-grid'>
     <div className="form-group">
     <input type="search" placeholder='Filter your music library by album, artist, genre, release date, or title' className='form-control' />
     </div>
     <button type="button" class="btn btn-primary" style={{'margin-top': '1rem'}}>Search</button>
    </form>
);

export default SearchBar;
