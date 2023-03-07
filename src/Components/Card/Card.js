import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './Card.module.css'

export default function Card() {
    let data;
    const [cardsList, setCards] = useState([]);
    const [loading, setLoading]=useState(false)
    
    const fetchData = async () => {
        try {
            setLoading(true)
            axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=avatar`)
                .then((res) => {
                    // data = res.data["Search"];
                    console.log(res)
                    setCards(res.data?.Search)
                    setLoading(false)
                })
                
                .catch((err) => console.log(err + ' has been thrown!!!'));
        } catch (error) {
            console.log("error ",error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className={styles.cardSection}>
            <p>Hi</p>

            {loading ?  "Loading":cardsList.map((card) => <>    <div className={styles.placeholder}>
                <img className={styles.poster} src={card["Poster"]}></img>
                <div className={styles.infosection}>
                    <div className={styles.title}>{card["Title"]}</div>
                    <div className={styles.year}>{card["Year"]}</div>
                </div>
            </div></>)}

        </div>
    );
}

// Image with preloaded link
{/* <img className={styles.poster} src={'https://m.media-amazon.com/images/M/MV5BZjIyMjE5ZDYtMTQxNC00NTEzLTgwYzYtMmM0NDg3OWFlYWM5XkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_SX300.jpg'} alt="movie poster"></img> */ }