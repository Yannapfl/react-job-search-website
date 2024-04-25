/* eslint-disable react/no-unescaped-entities */
import './Options.css';
import useModal from '../../Modals/useModal';
import { Element } from 'react-scroll';
import icon1 from '../../../assests/icons/human_options.svg';
import icon2 from '../../../assests/icons/message_options.svg';
import icon3 from '../../../assests/icons/feedback_options.svg';
import ModalRegistration from '../../Modals/ModalRegistration/ModalRegistration';

export default function Options() {
    const [isRegistrationModalOpen, openRegistrationModal, closeRegistrationModal] = useModal();

    return (
        <Element name='link_for_companies'>
            <div className='block2'>
                <h2>Your new path to hired.</h2>
                <ul className='block-column'>
                    <li>
                        <img src={icon1} alt="#" />
                        <h3>Apply to humans</h3>
                        <p>72% of applications are never seen by a human! With parallel you skip the line and go direct to the hiring team.</p>
                    </li>
                    <li>
                        <img src={icon2} alt="#" />
                        <h3>Instantly stand out</h3>
                        <p>Showcase your projects, passions and work ethos with Parallel Profile to stand out from the crowd.</p>
                    </li>
                    <li>
                        <img src={icon3} alt="#" />
                        <h3>Real time feedback</h3>
                        <p>Don't get ghosted! Get feedback & notifications with every application, so that you’re never left wondering.</p>
                    </li>
                </ul>
                <button type="button" className="btn-primary absolute" value='Submit' onClick={openRegistrationModal}>Get started free</button>
            </div>
                {isRegistrationModalOpen && 
                <div className='modal-overlay'>
                    <div className='modal'>
                        <button className='close-button-cross' onClick={closeRegistrationModal}>✕</button>
                        <ModalRegistration onSubmit={closeRegistrationModal} />
                    </div>
                </div>
                }
        </Element>
    );
}