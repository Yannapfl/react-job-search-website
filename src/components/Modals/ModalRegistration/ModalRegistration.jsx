import PropTypes from 'prop-types';
import './ModalRegistration.css';
import { useDispatch } from 'react-redux';
import { actions as usersActions } from '../../../slices/usersSlice.js';
import { useState } from 'react';

const ModalRegistration = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(usersActions.addUser(formData));
        onSubmit(formData);
    };

    return (
        <div className='registration-form'>
            <h4>Sign up</h4>
            <form onSubmit={handleSubmit}>
                <label>
                    Username
                    <input type='text' name='username' className='input-registration' value={formData.username} onChange={handleInputChange} />
                </label>
                <label>
                    Email
                    <input type='email' name='email' className='input-registration' value={formData.email} onChange={handleInputChange} />
                </label>
                <label>
                    Password
                    <input type='password' name='password' className='input-registration' value={formData.password} onChange={handleInputChange} />
                </label>
                <button className='btn btn-submit' type='submit'>Submit</button>
            </form>
        </div>
    );
}

ModalRegistration.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

export default ModalRegistration;