import React, { useState } from 'react'
import styles from '../styles/Navbar.module.css'
import SearchCity from '../Services/SearchCity';
import { useDispatch } from 'react-redux'


function Navbar() {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    function handleInput(e) {
        e.preventDefault();
        setCity(e.target.value);}

    function handleSubmit1(e) {
        e.preventDefault();
        dispatch(SearchCity(city))
        setCity('')}


    return (
        <div className={styles.container}>
            <h3>Weather-App</h3>
            <form onSubmit={handleSubmit1}>
                <input
                    type="text"
                    placeholder='Search City...'
                    onChange={handleInput}
                    value={city}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Navbar;
