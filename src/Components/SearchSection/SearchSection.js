import styles from './SearchSection.module.css';

export default function SearchSection() {
    return (
        <div className={ styles.section }>
            <p className={ styles.searchPrompt }>Search for a movie...</p>
            <input className= { styles.searchForm } placeholder="Type it here"></input>
        </div>
    );
}