import './Registration.css';

export default function Registration() {
    return(
        <div className='btn-group'>
            <button type='button' className='btn btn-entry' onClick={() => alert('Вход')}>Sign in</button>
            <button type='button' className='btn btn-registration' onClick={() => (alert('Регистрация'))}>Sign up Free</button>
        </div>
    )
};