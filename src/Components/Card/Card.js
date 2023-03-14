import styles from './Card.module.css'

export default function Card(props) {
    // console.log(props);
    const {poster_path, title, release_date, media_type} = props;

    return (
        <div className={styles.placeholder}>
            <img className={styles.poster} src={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`} alt="Movie Poster"></img>
            <div className={styles.infosection}>
                <div className={styles.leftPart}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.year}>
                        {release_date}
                    </div>
                </div>

                <div className={styles.rightPart}>
                    <p>{media_type}</p>
                </div>
            </div>
        </div>
    );
}