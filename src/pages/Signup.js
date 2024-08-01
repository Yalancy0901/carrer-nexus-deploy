import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../components/firebase/firebase';
import './styles/Signup.css'; // Import the CSS file

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isSigningUp, setIsSigningUp] = useState(false);
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match");
            return;
        }
        setIsSigningUp(true);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/home');
        } catch (error) {
            console.error('Error during signup:', error.message);
            setErrorMessage(error.message);
            setIsSigningUp(false);
        }
    };

    return (
        <main className="signup-container">
            <div className="signup-card">
                <div className="signup-heading-container">
                    <h3 className="signup-heading">Create an Account</h3>
                </div>
                <form onSubmit={handleSignup} className="signup-form">
                    <div className="input-group">
                        
                        <input
                        placeholder='Email'
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-field"
                        />
                    </div>
                    <div className="input-group">
                       
                        <input
                        placeholder='Password'
                            type="password"
                            autoComplete="new-password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input-field"
                        />
                    </div>
                    <div className="input-group">
                       
                        <input
                        placeholder='Confirm Password'
                            type="password"
                            autoComplete="new-password"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="input-field"
                        />
                    </div>
                    {errorMessage && <span className="error-message">{errorMessage}</span>}
                    <button
                        type="submit"
                        disabled={isSigningUp}
                        className={`submit-button ${isSigningUp ? 'disabled' : ''}`}
                    >
                        {isSigningUp ? 'Signing Up...' : 'Sign Up'}
                    </button>
                </form>
                <p className="signin-link">Already have an account? <Link to="/login" className="link-text">Sign in</Link></p>
            </div>
        </main>
    );
};

export default Signup;
