import './CardJobs.css';
import PropTypes from 'prop-types';
import heart from '../../../../assests/icons/heart.svg';

export default function CardJobs({ item }) {
    const employeesImages = item.employees;

    return (
        <div className='card'>
            <img className='heart' src={heart} alt='#' />
            <div className='card-cotent'>
                <img className='logo' src={item.logo} alt='Logo'/>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <div className='employees'>
                    <div className='employees-images'>
                        {employeesImages.map((employeImg, idx) => <img key={`img-employe-${idx}`} src={employeImg} className='employe' alt='Employe'/>)}
                        <div className='square-with-count'>+{item.countActiveEmployees}</div>
                    </div>
                    <h2>Active Employees</h2>
                </div>
            </div>
            <button type='button' className='btn btn-card'>{item.textButton}</button>
        </div>
    )
}

export const CardJobProptype = PropTypes.shape({
    employees: PropTypes.arrayOf(PropTypes.string).isRequired,
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    countActiveEmployees: PropTypes.number.isRequired,
    textButton: PropTypes.string.isRequired,
}).isRequired;

CardJobs.propTypes = { item: CardJobProptype };