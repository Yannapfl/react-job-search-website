import './CardJobs.css';
import heart from '../../../../assests/icons/heart.svg';

export default function CardJobs({ item }) {
    const employeesImages = item.employees;

    return (
        <div className='card'>
            <img className='heart' src={heart} alt='#' />
            <div className='card-cotent'>
                <img className='logo' src={item.logo} alt='Logo'/>
                <h1>{item.tittle}</h1>
                <p>{item.description}</p>
                <div className='employees'>
                    <div className='employees-images'>
                        {employeesImages.map((employeImg) => <img src={employeImg} className='employe' alt='Employe'/>)}
                        <view className='square-with-count'>+{item.countActiveEmployees}</view>
                    </div>
                    <h2>Active Employees</h2>
                </div>
            </div>
            <button type='button' className='btn btn-card'>{item.textButton}</button>
        </div>
    )
}

