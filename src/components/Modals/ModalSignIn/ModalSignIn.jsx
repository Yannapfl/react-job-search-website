import PropTypes from 'prop-types';
import './ModalSignIn.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const ModalSignIn = ({ onSubmit }) => {
    const { ids: userIDs, entities: userEntities } = useSelector((state) => state.users);
    const { ids: companyIDs, entities: companyEntities } = useSelector((state) => state.companies);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = userIDs.map(id => userEntities[id]).find(user => user.email === email && user.password === password);
        const company = companyIDs.map(id => companyEntities[id]).find(company => company.email === email && company.password === password);
        if (user || company) {
            onSubmit(true);
        } else {
            onSubmit(false);
        }
    };

    return (
        <div className='registration-form'>
            <h4>Sign In</h4>
            <form onSubmit={handleSubmit}>
                <label>
                    Email
                    <input type='email' className='input-registration' value={email} onChange={handleEmailChange} />
                </label>
                <label>
                    Password
                    <input type='password' className='input-registration' value={password} onChange={handlePasswordChange} />
                </label>
                <button className='btn btn-submit' type='submit'>Entry</button>
            </form>
        </div>
  );
}

ModalSignIn.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

export default ModalSignIn;