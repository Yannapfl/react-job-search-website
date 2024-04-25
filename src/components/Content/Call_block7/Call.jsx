import ModalRegistration from '../../Modals/ModalRegistration/ModalRegistration';
import useModal from '../../Modals/useModal';
import './Call.css';

export default function Call() {
    const [isRegistrationModalOpen, openRegistrationModal, closeRegistrationModal] = useModal();

    return (
        <div className='call-section'>
            <h2>Your one stop job shop.</h2>
            <h4>Join to apply to 100’s of the best start up jobs.</h4>
            <div className='btn-group-call'>
                <button className='btn btn-primary' onClick={openRegistrationModal}>Start for free</button>
                <button className='btn btn-join'>Join as a company</button>
            </div>
            {isRegistrationModalOpen && 
                <div className='modal-overlay'>
                    <div className='modal'>
                        <button className='close-button-cross' onClick={closeRegistrationModal}>✕</button>
                        <ModalRegistration onSubmit={closeRegistrationModal} />
                    </div>
                </div>
                }
        </div>
    )
}