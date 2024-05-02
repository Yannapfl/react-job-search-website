import './Skills.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import '../Cards_block3/Cards.css';

export default function Skills({ data }) {
    const [activeButtons, setActiveButtons] = useState([]);

    const handleButtonClick = (index) => {
        if (activeButtons.includes(index)) {
            setActiveButtons(activeButtons.filter((item) => item !== index));
        } else {
            setActiveButtons([...activeButtons, index]);
        }
    }

    return (
        <div className='section'>
            <div className='text__block'>
                <h3>Find your culture</h3>
            </div>
            <div className='btn-group-skills'>
                {data.map((textButton, idx) => <button 
                key={idx} 
                type='button' 
                className={`button-skill ${ activeButtons.includes(idx) ? 'active-skill' : ''}`}
                onClick={() => handleButtonClick(idx)}
                >{textButton}</button>)}
            </div>
        </div>
    )
}

Skills.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string).isRequired,
};