import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './SearchResults.module.css';
import Card from '../Card/Card.js';

export default function SearchResults({ movieName }) {
    const [cardsList, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
    
                if(movieName === "") {
                    setLoading(false);
                    return ;
                }
    
                axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${ process.env.REACT_APP_MOVIEDB_API_KEY }&language=en-US&page=1&include_adult=false&query=${movieName}`)
                    .then((res) => {
                        console.log(res);
                        setCards(res.data?.results);
                        setLoading(false);
                    })
                    .catch((err) => console.log(err + ' has been thrown!!!'));
            } catch (error) {
                console.log("error ",error);
                setLoading(false);
            }
        }

        fetchData();
    }, [movieName]);

    return (
        <div className={styles.resultSection}>
            {
                loading ? "Loading" : cardsList?.map((card) => {
                    return (
                        <>
                            <Card {...card}/>
                        </>
                    );
                })
            }
        </div>
    );
}