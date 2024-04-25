import './CardCollection.css';
import PropTypes from 'prop-types';

export default function CardCollection({ data }) {
    return (
        <div className='card-collection' style={{ 
            backgroundImage: `url(${data.img})`, 
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 66%' 
            }}>
            <div className='content-collection'>
                <h1>{data.name}</h1>
                <p>{data.countCompanies} Companies · {data.countJobs} Jobs</p>
            </div>
            <div className='square-with-plus'>+</div>
        </div>
    )
}

export const CardCollectionProptype = PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    countCompanies: PropTypes.number.isRequired,
    countJobs: PropTypes.number.isRequired,
}).isRequired;

CardCollection.propTypes = { data: CardCollectionProptype };