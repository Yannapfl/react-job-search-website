import './Cards.css';
import CardJobs from './CardJobs/CardJobs.jsx';
import arrow from '../../../assests/icons/arrow_searcher.svg';
import CardCompany from './CardCompany/CardCompany.jsx';
import { Element } from 'react-scroll';


export default function Cards({ dataJobs, dataCompanies }) {
    return (
        <Element name='section-find-jobs'>
            <section className='section'>
                <div className='text__block'>
                    <h3>Trending jobs</h3>
                    <h4>View all <img src={arrow} alt='#' /></h4>
                </div>
                <div className='cards-block'>
                    {dataJobs.map((card) => <CardJobs item={card} />)}
                </div>
            </section>
            <div className='section'>
                <div className='text__block'>
                    <h3>Top Companies</h3>
                    <h4>View all <img src={arrow} alt='#' /></h4>
                </div>
                <div className='cards-block'>
                    {dataCompanies.map((card) => <CardCompany item={card} />)}
                </div>
            </div>

        </Element>
    )
}