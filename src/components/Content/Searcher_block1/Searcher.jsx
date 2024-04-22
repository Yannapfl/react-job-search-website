import './Searcher.css';
import circleW from '../../../assests/images/circle_w.svg';
import circleF from '../../../assests/images/circle_f.svg';
import circleMen from '../../../assests/images/circle_men.svg';
import circleWomen from '../../../assests/images/circle_women.svg';
import arrow from '../../../assests/icons/arrow_searcher.svg';

export default function Searcher() {
    return(
        <div className='blocks'>
            <div className='text-block'>
                <h1 className='first-string'>Land a job</h1>
                <h1 className='second-string'>the easy way</h1>
                <h4>The best place to discover & apply to the coolest start up jobs, without the black box.</h4>
            </div>
            <form name='myForm' className='form'>
                <input type="job" name="job" className="form-control" id="job" placeholder="Search"  value=''/>
                <button type="submit" className="btn-primary" value='Submit'>Explore    <img src={arrow} alt="#"/></button>
            </form>
            <img src={circleW} alt="#" className='circle-w'/>
            <img src={circleF} alt="#" className='circle-f'/>
            <img src={circleMen} alt="#" className='circle-men'/>
            <img src={circleWomen} alt="#" className='circle-women'/>
        </div>
    )
}