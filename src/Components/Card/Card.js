import axios from 'axios';
import styles from './Card.module.css'

export default function Card() {
    let data;
    
    axios.get('http://www.omdbapi.com/?apikey=8f723a53&s=avatar')
    .then((res) => {
        data = res.data["Search"][5];
        console.log(data);
    })
    .catch((err) => console.log(err + ' has been thrown'));

    return (
        <div>
            <div className="placeholder">
                <h1>Hello</h1>
                <img className={styles.poster} src={data["Poster"]}></img>
            </div>
        </div>
    );
}