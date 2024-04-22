import './Options.css';
import icon1 from '../../../assests/icons/human_options.svg';
import icon2 from '../../../assests/icons/message_options.svg';
import icon3 from '../../../assests/icons/feedback_options.svg';
import { Element } from 'react-scroll';

export default function Options() {
    return (
        <Element name='link_for_companies'>
            <div className='block2'>
                <h2>Your new path to hired.</h2>
                <ul className='block-column'>
                    <li>
                        <img src={icon1} alt="#" />
                        <tittle>Apply to humans</tittle>
                        <p>72% of applications are never seen by a human! With parallel you skip the line and go direct to the hiring team.</p>
                    </li>
                    <li>
                        <img src={icon2} alt="#" />
                        <tittle>Instantly stand out</tittle>
                        <p>Showcase your projects, passions and work ethos with Parallel Profile to stand out from the crowd.</p>
                    </li>
                    <li>
                        <img src={icon3} alt="#" />
                        <tittle>Real time feedback</tittle>
                        <p>Don't get ghosted! Get feedback & notifications with every application, so that you’re never left wondering.</p>
                    </li>
                </ul>
                <button type="submit" className="btn-primary absolute" value='Submit'>Get started free</button>
            </div>
        </Element>
    )
}