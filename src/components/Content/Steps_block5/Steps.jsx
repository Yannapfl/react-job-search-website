import './Steps.css';
import PropTypes from 'prop-types';
import backImg from '../../../assests/images/back_steps.png';
import frontImg from '../../../assests/images/front_steps.png';

export default function Steps({ data }) {
    return (
        <div className='steps-section'>
        <h3>It’s simple to get started</h3>
        <div className='steps-content-flex'>
            <div className='steps'>
                {data.map((step, idx) => (
                <div className='step' key={`step${idx}`}>
                    <button type='button' className='btn'>{idx + 1}</button>
                    <h4>{step}</h4>
                </div>
            ))}
            </div>
            <div className='steps-images-block'>
                <img className='img-back-steps' src={backImg} alt='#' />
                <img className='img-front-steps' src={frontImg} alt='#' />
            </div>
        </div>
        </div>
    )
}

Steps.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string).isRequired,
};