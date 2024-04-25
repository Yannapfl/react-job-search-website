import './Skills.css';
import PropTypes from 'prop-types';
import '../Cards_block3/Cards.css';


export default function Skills({ data }) {
    return (
        <div className='section'>
            <div className='text__block'>
                <h3>Find your culture</h3>
            </div>
            <div className='btn-group-skills'>
                {data.map((textButton) => <button key={textButton} type='button' className='button-skill'>{textButton}</button>)}
            </div>
        </div>
    )
}

Skills.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string).isRequired,
};