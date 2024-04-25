import './Navigation.css';
import { Link } from "react-scroll";

export default function Navigation() {
    return(
        <ul className='navigation'>
            <li>
                <Link to='section-find-jobs' smooth={true} duration={500}>Find Jobs</Link>
            </li>
            <li>
                <Link to="link_for_companies" smooth={true} duration={500}>For Companies</Link>
            </li>
        </ul> 
    )
}