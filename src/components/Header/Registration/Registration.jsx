import './Registration.css';
import ModalSignIn from '../../Modals/ModalSignIn/ModalSignIn.jsx';
import useModal from '../../Modals/useModal.jsx';
import ModalRegistration from '../../Modals/ModalRegistration/ModalRegistration.jsx';

export default function Registration() {
    const [isOpenSignInModal, openSignInModal, closeSignInModal] = useModal();
    const [isOpenRegistrationModal, openRegistrationModal, closeRegistrationModal] = useModal();

    const handleSubmitRegistration = (formData) => {
        console.log('Submitted registration:', formData);
        closeRegistrationModal();
    };
    
    const handleSubmitSignIn = (answerBoolean) => {
        if (answerBoolean === true) {
            console.log('Successful login');
            closeSignInModal();
            alert('Successful login');
        } else {
            console.log('Incorrect credentials');
            alert('Incorrect credentials');
        }
    }

    return (
        <div className='btn-group'>
            <button type='button' className='btn-entry' onClick={openSignInModal}>Sign in</button>
            <button type='button' className='btn btn-registration' onClick={openRegistrationModal}>Sign up Free</button>
            {(isOpenSignInModal || isOpenRegistrationModal) && <div className='modal-overlay' onClick={closeSignInModal}></div>}
            {isOpenSignInModal && (
                <div className='modal'>
                    <button className='close-button-cross' onClick={closeSignInModal}>✕</button>
                    <ModalSignIn onSubmit={handleSubmitSignIn} />
                </div>
            )}
            {isOpenRegistrationModal && (
                <div className='modal'>
                    <button className='close-button-cross' onClick={closeRegistrationModal}>✕</button>
                    <ModalRegistration onSubmit={handleSubmitRegistration} />
                </div>
            )}
        </div>
    );
}