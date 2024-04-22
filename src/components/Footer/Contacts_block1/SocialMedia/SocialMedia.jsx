import './SocialMedia.css';
import twitter from '../../../../assests/icons/twitter.svg';
import emailIcon from '../../../../assests/icons/email.svg';

export default function SocialMedia() {
    return(
        <div className='socail-media-section'>
        <div className='logo-tm'>
            <h4>Hire Different <sup>TM</sup></h4>
        </div>
        <form name='email'>
            <input className='input-email'></input>
            <button type='submit' className='btn-email-footer'>Join for free</button>
        </form>
        <ul className='socail-media-links'>
            <li><a href='###'><img src={twitter} alt='Twitter' /></a></li>
            <li><a href='###'><img src={emailIcon} alt='EmailIcon' /></a></li>
        </ul>
        </div>
    )
}