import ModalRegistration from '../../../Modals/ModalRegistration/ModalRegistration';
import useModal from '../../../Modals/useModal';
import { Link } from "react-scroll";
import './LinksList.css';

export default function LinksList() {
    const [isRegistrationModalOpen, openRegistrationModal, closeRegistrationModal] = useModal();

    return(
        <>
        <div className='wrapper-list'>
            <ul><p>Find Work</p>
                <li>
                    <Link to='section-block1' smooth={true} duration={1000}>Explore Jobs</Link>
                </li>
                <li>
                    <Link to='section-find-jobs' smooth={true} duration={1000}>Discover Companies</Link>
                </li>
                <li>
                    <Link to='section-collections' smooth={true} duration={1200}>Browse Collections</Link>
                </li>
            </ul>
            <ul><p>Find People</p>
                <li><a href='###'>Learn More</a></li>
                <li><a href='###' onClick={openRegistrationModal}>Sign up</a></li>
            </ul>
            <ul><p>Company</p>
                <li><a href='###'>About us</a></li>
                <li><a href='###'>Careers</a></li>
                <li><a href='###'>Contact</a></li>
            </ul>
        </div>
        <div>
            {isRegistrationModalOpen && 
            <div className='modal-overlay'>
                <div className='modal'>
                    <button className='close-button-cross' onClick={closeRegistrationModal}>✕</button>
                    <ModalRegistration onSubmit={closeRegistrationModal} />
                </div>
            </div>
            }
        </div>
        </>
    )
}