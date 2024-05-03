import './SocialMedia.css';
import twitter from '../../../../assests/icons/twitter.svg';
import emailIcon from '../../../../assests/icons/email.svg';
import { useState } from 'react';
import axios from 'axios';

export default function SocialMedia() {
    const [email, setEmail ] = useState('');

    const handleInputChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://script.google.com/macros/s/AKfycbwEGo85w5YY7P5RXtSYHWSexID7x7OzKZd6xSuO8lP_gmC2P9BBblsgG9-fsNlLfUCC/exec');
            alert('Data submitted successfully');
            setEmail('');
        } catch (error) {
            console.error('Error submitting data:', error);
            alert('Error submitting data. Please try again later.');
        }
    }

    return(
        <div className='socail-media-section'>
            <div className='logo-tm'>
                <h4>Hire Different <sup>TM</sup></h4>
            </div>
            <form onSubmit={handleSubmit}>
                <input type='email' name='email' className='input-email' value={email} onChange={handleInputChange}/>
                <button type='submit' className='btn-email-footer'>Join for free</button>
            </form>
            <ul className='socail-media-links'>
                <li><a href='###'><img src={twitter} alt='Twitter' /></a></li>
                <li><a href='###'><img src={emailIcon} alt='EmailIcon' /></a></li>
            </ul>
        </div>
    )
}