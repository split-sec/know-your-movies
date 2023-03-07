import styles from './Card.module.css'

export default function Card(props) {
    console.log(props);
    const {Poster, Title, Type, Year} = props;
    console.log(`
    Poster: ${Poster},
    Title: ${Title},
    Type: ${Type},
    Year: ${Year}`);

    return (
        <div className={styles.placeholder}>
            <img className={styles.poster} src={Poster} alt="Movie Poster"></img>
            <div className={styles.infosection}>
                <div className={styles.title}>{Title}</div>
                <div className={styles.year}>{Year}</div>
            </div>
        </div>
    );
}