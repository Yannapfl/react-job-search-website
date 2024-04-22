import webflowImg from '../../../../assests/images/Webflow.png';
import patreonImg from '../../../../assests/images/Patreon.png';
import faireImg from '../../../../assests/images/Faire.png';
import breefImg from '../../../../assests/images/Breef.png';
import employe1 from '../../../../assests/icons/employe_company_1.svg';
import employe2 from '../../../../assests/icons/employe_company_2.svg';
import employe3 from '../../../../assests/icons/employe_company_3.svg';
import employe4 from '../../../../assests/icons/employe_company_4.svg';
import employe5 from '../../../../assests/icons/employe_company_5.svg';
import employe6 from '../../../../assests/icons/employe_company_6.svg';

export const dataCardsCompany = [
    {
        name: 'Webflow',
        industry: 'Manufacturing',
        location: 'San Francisco, CA',
        countOfOpenPosition: 2,
        countActiveEmployees: 4,
        employees: [ employe1, employe2],
        img: webflowImg
    },
    {
        name: 'Patreon',
        industry: 'Manufacturing',
        location: 'San Francisco, CA',
        countOfOpenPosition: 13,
        countActiveEmployees: 4,
        employees: [ employe3, employe4],
        img: patreonImg
    },
    {
        name: 'Faire',
        industry: 'Manufacturing',
        location: 'San Francisco, CA',
        countOfOpenPosition: 15,
        countActiveEmployees: 2,
        employees: [ employe5, employe6],
        img: faireImg
    },
    {
        name: 'Breef',
        industry: 'Manufacturing',
        location: 'New York, USA',
        countOfOpenPosition: 10,
        countActiveEmployees: 1,
        employees: [ employe1, employe4],
        img: breefImg
    }
]