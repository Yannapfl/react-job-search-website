import './Contacts.css';
import LinksList from './LinksList/LinksList';
import SocialMedia from './SocialMedia/SocialMedia';

export default function Contacts() {
    return (
        <div className='contacts-footer'>
        <SocialMedia />
        <LinksList />
        </div>
    )
}