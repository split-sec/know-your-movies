import styles from './SampleCard.module.css';

export default function SampleCard() {
    return (
        <div className={styles.card}>
            <img className={styles.image} src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.670xw:1.00xh;0.167xw,0&resize=640:*"></img>
            <div className={styles.infosection}>
                <div className={styles.title}>Avengers</div>
                <div className={styles.year}>2012</div>
            </div>
        </div>
    );
}