import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './SearchResults.module.css';
import Card from '../Card/Card.js';

export default function SearchResults({ movieName }) {
    const [cardsList, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const fetchData = async () => {
        try {
            setLoading(true);

            if(movieName === "") {
                setLoading(false);
                return ;
            }

            axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${ movieName }&page=1`)
                .then((res) => {
                    console.log(res);
                    setCards(res.data?.Search);
                    setLoading(false);
                })
                .catch((err) => console.log(err + ' has been thrown!!!'));
        } catch (error) {
            console.log("error ",error);
            setLoading(false);
        }
    }

    useEffect(() => {
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