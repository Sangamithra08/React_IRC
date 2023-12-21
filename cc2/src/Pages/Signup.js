import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey, faSignature } from '@fortawesome/free-solid-svg-icons';
import '../Assests/Css/signup2.css'
import { Navigate, useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  

  const navigate = useNavigate()
  const handleHome = () => {
    navigate('/')
  }
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRepeatPasswordChange = (e) => {
    setRepeatPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || name.length < 2) {
      window.alert('Name must be at least 2 characters');
      return;
    }

    else if (!emailPattern.test(email)) {
      window.alert('Invalid email format');
      return;
    }



    else if (password.length < 8) {
      window.alert('Password must be at least 8 characters.');
      return;
    }


    else if (password !== repeatPassword) {
      window.alert('Passwords do not match');
      return;
    }
    else{
      alert("Welcome");
      navigate('/');
    }

  };


  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>

        <h1>Sign Up</h1>
        <div className="form-group">
          <label>
            <FontAwesomeIcon icon={faSignature} beatFade /></label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label>
            <FontAwesomeIcon icon={faUser} bounce /></label>
          <input type="email" placeholder="Enter your email" value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label>
            <FontAwesomeIcon icon={faKey} shake /></label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="form-group">
          <label><FontAwesomeIcon icon={faKey} shake /></label>
          <input
            type="password"
            placeholder="Repeat your password"
            value={repeatPassword}
            onChange={handleRepeatPasswordChange}
            required />
        </div>
        <Link to='/' onClick={handleSubmit}>
          <button type='submit' className='button-signup'>Signup</button>
        </Link>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;