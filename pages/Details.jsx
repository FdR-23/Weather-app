import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'


import Image from 'next/image'

import styles from '../styles/Details.module.css'
function Details() {

    const details = useSelector((state) => state.cards.details[0]);

    return (
        <div>
            <main className={styles.main}>
                <p className={styles.title}>Details of City</p>
                <h1 className={styles.name}>{details.name}</h1>
                <h2 className={styles.country}>Country: {details.country}</h2>
            </main>
            <div className={styles.container}>

                <div className={styles.container_left}>
                    <h3>Temp: {details.temp}°</h3>
                    <h3>Weather: {details.weather}</h3>
                    <h3>Number of clouds: {details.clouds}</h3>
                    <h3>Wind speed: {details.wind} km/h</h3>
                </div>
                <div className={styles.container_right}>
                    <h3>Temp min: {details.min}° </h3>
                    <h3>Temp min: {details.max}°</h3>
                    <h3>Latitude: {details.latitud}°</h3>
                    <h3>Longitude: {details.longitud}°</h3>
                </div>
            </div>
            <div className={styles.backHome}>

                <Link href="/">
                    <button> 🡸 Back home</button>
                </Link>
            </div>
            <footer className={styles.footer}>
                <div>
                    <p>Powered by {'Fede'} </p>
                    <div className={styles.logo}>
                        <a
                            href="https://github.com/FdR-23/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <Image src="/FdR-logo.png" alt="Logo" width={52} height={52} />
                        </a>
                    </div>
                </div>
            </footer>

        </div >

    )
}

export default Details