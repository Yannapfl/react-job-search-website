import './Cards.css';
import PropTypes from 'prop-types';
import CardJobs, { CardJobProptype } from './CardJobs/CardJobs.jsx';
import arrow from '../../../assests/icons/arrow_searcher.svg';
import CardCompany, { CardCompanyProptype } from './CardCompany/CardCompany.jsx';
import { Element } from 'react-scroll';


export default function Cards({ dataJobs, dataCompanies }) {
    return (
        <Element name='section-find-jobs'>
            <div className='section'>
                <div className='text__block'>
                    <h3>Trending jobs</h3>
                    <h4>View all <img src={arrow} alt='#' /></h4>
                </div>
                <div className='cards-block'>
                    {dataJobs.map((card, idx) => <CardJobs item={card} key={`card-job-${idx}`} />)}
                </div>
            </div>
            <div className='section'>
                <div className='text__block'>
                    <h3>Top Companies</h3>
                    <h4>View all <img src={arrow} alt='#' /></h4>
                </div>
                <div className='cards-block'>
                    {dataCompanies.map((card, idx) => <CardCompany item={card} key={`card-company-${idx}`} />)}
                </div>
            </div>
        </Element>
    )
}

Cards.propTypes = {
    dataJobs: PropTypes.arrayOf(CardJobProptype).isRequired,
    dataCompanies: PropTypes.arrayOf(CardCompanyProptype).isRequired,
};