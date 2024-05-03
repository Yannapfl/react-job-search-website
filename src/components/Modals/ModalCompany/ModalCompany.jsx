import { useState } from "react";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { actions as companiesActions } from "../../../slices/companiesSlice";

const ModalCompany = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        companyName: '',
        location: '',
        industry: '',
        email: '',
        password: '',
    })

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(companiesActions.addCompany(formData));
        onSubmit(formData);
    }

    return (
        <div className='registration-form'>
            <h4>Sign Up for Company</h4>
            <form onSubmit={handleSubmit}>
                <label>
                    Company Name
                    <input type='text' name='companyName' className='input-registration' value={formData.companyName} onChange={handleInputChange} />
                </label>
                <label>
                    Location
                    <input type='text' name='location' className='input-registration' value={formData.location} onChange={handleInputChange} />
                </label>
                <label>
                    Industry
                    <input type='text' name='industry' className='input-registration' value={formData.industry} onChange={handleInputChange} />
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
    )
}

ModalCompany.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default ModalCompany;
