import ModalRegistration from '../../../Modals/ModalRegistration/ModalRegistration';
import useModal from '../../../Modals/useModal';
import './LinksList.css';

export default function LinksList() {
    const [isRegistrationModalOpen, openRegistrationModal, closeRegistrationModal] = useModal();

    return(
        <>
        <div className='wrapper-list'>
            <ul><p>Find Work</p>
                <li><a href='###'>Explore Jobs</a></li>
                <li><a href='###'>Discover Companies</a></li>
                <li><a href='###'>Browse Collections</a></li>
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