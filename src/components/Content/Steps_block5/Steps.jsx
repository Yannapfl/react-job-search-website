import './Steps.css';
import PropTypes from 'prop-types';
import backImg from '../../../assests/images/back_steps.png';
import frontImg from '../../../assests/images/front_steps.png';
import { useEffect, useState } from 'react';

export default function Steps({ data }) {
    const [checkedItems, setCheckedItems] = useState(Array(data.length).fill(false));
    const [ isHidden, setActiveInscription ] = useState(false);

    const handleChangeChecked = (index) => {
        const newCheckedItems = [...checkedItems];
        newCheckedItems[index] = !newCheckedItems[index];
        setCheckedItems(newCheckedItems);
    }

    useEffect(() => {
        const allChecked = checkedItems.every(item => item === true);
        setActiveInscription(allChecked);
    }, [checkedItems])

    return (
        <div className='steps-section'>
            <h3>It’s simple to get started</h3>
            <div className='steps-content-flex'>
                <div className='steps'>
                    {data.map((step, idx) => (
                        <label className='step' key={`step${idx}`}>
                            <input
                                type='checkbox'
                                checked={checkedItems[idx]}
                                className='btn-step styled-checkbox'
                                onChange={() => handleChangeChecked(idx)}
                                style={{ backgroundColor: checkedItems[idx] ? '#EAFA35' : '' }}
                            />
                            <h4>{step}</h4>
                        </label>
                    ))}
                </div>
                <div className='steps-images-block'>
                    <img className='img-back-steps' src={backImg} alt='#' />
                    <img className='img-front-steps' src={frontImg} alt='#' />
                </div>
            </div>
            {isHidden && <div className='hidden-insection'><h3>You are ready!</h3></div>}
        </div>
    )
}

Steps.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string).isRequired,
};
