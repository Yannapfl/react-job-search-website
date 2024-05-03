import ModalCompany from '../../Modals/ModalCompany/ModalCompany';
import ModalRegistration from '../../Modals/ModalRegistration/ModalRegistration';
import useModal from '../../Modals/useModal';
import './Call.css';
import '../../Header/Registration/Registration.css';

export default function Call() {
    const [isRegistrationModalOpen, openRegistrationModal, closeRegistrationModal] = useModal();
    const [isCompanyModalOpen, openCompanyModal, closeCompanyModal] = useModal();

    const handleSubmitCompany = (formData) => {
        console.log('Submitted registration:', formData);
        closeCompanyModal();
    }

    return (
        <div className='call-section'>
            <h2>Your one stop job shop.</h2>
            <h4>Join to apply to 100’s of the best start up jobs.</h4>
            <div className='btn-group-call'>
                <button className='btn btn-primary' onClick={openRegistrationModal}>Start for free</button>
                <button className='btn btn-join' onClick={openCompanyModal}>Join as a company</button>
            </div>
            {isRegistrationModalOpen && 
                <div className='modal-overlay'>
                    <div className='modal'>
                        <button className='close-button-cross' onClick={closeRegistrationModal}>✕</button>
                        <ModalRegistration onSubmit={closeRegistrationModal} />
                    </div>
                </div>
                }
            {isCompanyModalOpen &&
                <div className='modal-overlay'>
                    <div className='modal'>
                        <button className='close-button-cross' onClick={closeCompanyModal}>✕</button>
                        <ModalCompany onSubmit={handleSubmitCompany} />
                    </div>
                </div>
            }
        </div>
    )
}