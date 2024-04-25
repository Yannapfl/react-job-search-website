import './CardCompany.css';
import PropTypes from 'prop-types';
import '../CardJobs/CardJobs.css';
import arrow from '../../../../assests/icons/arrow_searcher.svg';

export default function CardCompany({ item }) {
    const employeesImages = item.employees;

    return (
        <div className='card' style={{ 
            backgroundImage: `url(${item.img})`, 
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100px' 
            }}>
            <div className='card-cotent'>
                <h1>{item.name}</h1>
                <p>{item.industry} · {item.location}</p>
                <h4>{item.countOfOpenPosition} Open Positions <img src={arrow} className="arrow-company" alt='#' /></h4>
                <div className='employees'>
                    <div className='employees-images'>
                        {employeesImages.map((employeImg, idx) => <img key={`img-employe-${idx}`} src={employeImg} className='employe' alt='Employe'/>)}
                        <div className='square-with-count'>+{item.countActiveEmployees}</div>
                    </div>
                    <h2>Active Employees</h2>
                </div>
            </div>
            <button type='button' className='btn btn-card'>Browse Jobs</button>
        </div>
    )
}

export const CardCompanyProptype = PropTypes.shape({
    name: PropTypes.string.isRequired,
    industry: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    countOfOpenPosition: PropTypes.number.isRequired,
    countActiveEmployees: PropTypes.number.isRequired,
    employees: PropTypes.arrayOf(PropTypes.string).isRequired,
    img: PropTypes.string.isRequired,
}).isRequired;

CardCompany.propTypes = { item: CardCompanyProptype };