import styles from './SearchSection.module.css';
import SearchResults from '../SearchResults/SearchResults';
import { useState } from 'react';

export default function SearchSection() {
    const [movie, setMovie] = useState("");

    return (
        <div className={ styles.section }>
            <p className={ styles.searchPrompt }>Search for any movie, TV show...</p>
            <input className= { styles.searchForm } placeholder="Type it here" onChange={ (name) => {
                setMovie(name.target.value)
            } }></input>

            <SearchResults movieName={movie} />
        </div>
    );
}