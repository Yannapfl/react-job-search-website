import logoBreef from '../../../../assests/icons/logo_breef.svg';
import employe1 from '../../../../assests/icons/employ_1.svg';
import employe2 from '../../../../assests/icons/employ_2.svg';
import employe3 from '../../../../assests/icons/employ_3.svg';
import employe4 from '../../../../assests/icons/employ_4.svg';
import employe5 from '../../../../assests/icons/employ_5.svg';
import employe6 from '../../../../assests/icons/employ_6.svg';
import logoFair from '../../../../assests/icons/logo_fair.svg';
import logoGhia from '../../../../assests/icons/logo_ghia.svg';
import logoMrBeast from '../../../../assests/icons/logo_mr_beast.svg';


export const dataCardsJobs = [
    {
        logo: logoBreef,
        title: 'Product Manager (Operations)',
        description: 'Breef · New York or Remote',
        employees: [employe1, employe2],
        textButton: 'Apply Direct',
        countActiveEmployees: 2,
    },
    {
        logo: logoFair,
        title: 'Senior Site Reliability Engineer',
        description: 'Faire · Brazil',
        employees: [employe1, employe2],
        textButton: 'External Apply',
        countActiveEmployees: 5,
    },
    {
        logo: logoGhia,
        title: 'Event Worker',
        description: 'Ghia · Los Angeles / New York City',
        employees: [employe3, employe4],
        textButton: 'External Apply',
        countActiveEmployees: 1,
    },
    {
        logo: logoMrBeast,
        title: 'Talent Acquisition/Recruiting',
        description: 'Mr. Beast · Greenville NC',
        employees: [employe5, employe6],
        textButton: 'External Apply',
        countActiveEmployees: 1,
    }
]