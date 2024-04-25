import './Collections.css';
import PropTypes from 'prop-types';
import CardCollection, { CardCollectionProptype } from './CardCollection/CardCollection';
import arrow from '../../../assests/icons/arrow_searcher.svg';

export default function Collections({ data }) {
    return (
        <div className='collection'>
            <div className='text__block'>
                <h3>Browse Collections</h3>
                <h4>View all <img src={arrow} alt='#' /></h4>
            </div>
            <div className='cards-flex'>
                {data.map((item, idx) => <CardCollection data={item} key={`card-collection-${idx}`} />)}
            </div>
        </div>
    )
}

Collections.propTypes = { data: PropTypes.arrayOf(CardCollectionProptype) };