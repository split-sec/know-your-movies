import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './SearchResults.module.css';
import Card from '../Card/Card.js';

export default function SearchResults({ movieName }) {
    const [cardsList, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageChange, setPageChange] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
    
                if(movieName === "") {
                    setLoading(false);
                    return ;
                }
    
                axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&page=${pageNumber}&include_adult=false&query=${movieName}`)
                    .then((res) => {
                        setTotalPages(res.data.total_pages);
                        console.log("value set... " + res.data.total_pages);  
                        if(pageChange) {
                            console.log("inside if")
                            setCards((prev) => [...prev, ...res.data?.results]);
                            setPageChange(false);
                            setLoading(false);   
                        } else {
                            console.log("inside else")
                            setCards(res.data?.results);
                            setPageChange(false);
                            setLoading(false);   
                        }
                    })
                    .catch((err) => console.log(err + ' has been thrown!!!'));
            } catch (error) {
                console.log("error ",error);
                setLoading(false);
            }
        }

        fetchData();
    }, [pageNumber, movieName]);

    function handleScroll() {
        if(document.documentElement.scrollTop + window.innerHeight + 40 >= document.documentElement.scrollHeight) {
            if(pageNumber <= totalPages) {
                setPageChange((prev) => !prev);
                setPageNumber((prev) => prev + 1);
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

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