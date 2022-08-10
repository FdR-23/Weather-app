import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteCard, detailsCard } from '../store/slices/cardsSlices'
import Link from 'next/link'

import styles from '../styles/Card.module.css'

function Card({ name, country, img, temp, id }) {
    const dispatch = useDispatch();


    function handlClick(id) {
        dispatch(deleteCard(id));
    }

    function handlClickDetails(id) {
        dispatch(detailsCard(id));
    }
    return (


        <div className={styles.card}>

            <h2 className={styles.name}>{name}</h2>

            <h3 className={styles.country}>Country: {country}</h3>

            <img className={styles.img_weather}src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="imagen weather" />

            <h3 className={styles.temp}>Temp: {temp}°</h3>

            <div className={styles.containter_bnb}>
                <Link href="Details"><button className={styles.details_bnb} onClick={() => handlClickDetails(id)}>More Details</button></Link>
                <button className={styles.delete_bnb} onClick={() => handlClick(id)}>X</button>
            </div>
        </div>

    )
}



export default Card