import Contacts from './Contacts_block1/Contacts';
import './Footer.css';
import parallelLogo from '../../assests/icons/parallel.svg';
import License from './License_block3/License';

export default function Footer() {
    return(
        <footer>
            <Contacts />
            <img src={parallelLogo} alt="Parallel" className='img-footer' />
            <License />
        </footer>
    )
};