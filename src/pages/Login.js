import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../components/firebase/firebase';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsSigningIn(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/home');
        } catch (error) {
            setErrorMessage(error.message);
            setIsSigningIn(false);
        }
    };

    const handleGoogleLogin = async (e) => {
        e.preventDefault();
        setIsSigningIn(true);
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            navigate('/home');
        } catch (error) {
            setErrorMessage(error.message);
            setIsSigningIn(false);
        }
    };

    return (
        <main style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100vh',
            background: 'linear-gradient(135deg, #f3f4f6, #e0e8f0)'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '360px',
                background: '#ffffff',
                padding: '24px',
                borderRadius: '12px',
                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
                textAlign: 'center'
            }}>
                <h2 style={{
                    fontSize: '28px',
                    fontWeight: '700',
                    color: '#333',
                    marginBottom: '20px'
                }}>Welcome Back</h2>

                <form onSubmit={handleLogin} style={{ marginBottom: '16px' }}>
                    <div style={{ marginBottom: '16px' }}>
                       
                        <input
                        placeholder='Email'
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '12px',
                                border: '1px solid #dcdcdc',
                                borderRadius: '8px',
                                fontSize: '16px',
                                color: '#333',
                                transition: 'border-color 0.3s, box-shadow 0.3s',
                                marginTop: '8px'
                            }}
                            onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px rgba(165, 92, 255, 0.2)'}
                            onBlur={(e) => e.target.style.boxShadow = 'none'}
                        />
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        
                        <input
                        placeholder='Password'
                            type="password"
                            autoComplete="current-password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '12px',
                                border: '1px solid #dcdcdc',
                                borderRadius: '8px',
                                fontSize: '16px',
                                color: '#333',
                                transition: 'border-color 0.3s, box-shadow 0.3s',
                                marginTop: '8px'
                            }}
                            onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px rgba(165, 92, 255, 0.2)'}
                            onBlur={(e) => e.target.style.boxShadow = 'none'}
                        />
                    </div>

                    {errorMessage && <p style={{
                        color: '#e53e3e',
                        fontSize: '14px',
                        fontWeight: '500',
                        marginTop: '8px'
                    }}>{errorMessage}</p>}

                    <button
                        type="submit"
                        disabled={isSigningIn}
                        style={{
                            width: '100%',
                            padding: '12px',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#ffffff',
                            backgroundColor: isSigningIn ? '#d6baff' : '#a55cff',
                            cursor: isSigningIn ? 'not-allowed' : 'pointer',
                            transition: 'background-color 0.3s, transform 0.3s',
                            marginTop: '16px'
                        }}
                        onMouseOver={(e) => !isSigningIn && (e.target.style.backgroundColor = '#8a43d0')}
                        onMouseOut={(e) => !isSigningIn && (e.target.style.backgroundColor = '#a55cff')}
                    >
                        {isSigningIn ? 'Signing In...' : 'Sign In'}
                    </button>
                </form>

                <p style={{
                    fontSize: '14px',
                    marginTop: '16px'
                }}>Don't have an account? <Link to="/signup" style={{
                    color: '#a55cff',
                    textDecoration: 'underline',
                    fontWeight: '600'
                }}>Sign up</Link></p>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: '24px 0'
                }}>
                    <div style={{
                        flexGrow: 1,
                        borderTop: '1px solid #dcdcdc'
                    }}></div>
                    <span style={{
                        margin: '0 16px',
                        fontSize: '14px',
                        fontWeight: '500',
                        color: '#777'
                    }}>OR</span>
                    <div style={{
                        flexGrow: 1,
                        borderTop: '1px solid #dcdcdc'
                    }}></div>
                </div>

                <button
                    onClick={handleGoogleLogin}
                    disabled={isSigningIn}
                    style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid #dcdcdc',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#333',
                        backgroundColor: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: isSigningIn ? 'not-allowed' : 'pointer',
                        transition: 'background-color 0.3s, transform 0.3s',
                        marginTop: '16px'
                    }}
                    onMouseOver={(e) => !isSigningIn && (e.target.style.backgroundColor = '#f7f7f7')}
                    onMouseOut={(e) => !isSigningIn && (e.target.style.backgroundColor = '#ffffff')}
                >
                    <svg style={{
                        width: '20px',
                        height: '20px',
                        marginRight: '12px'
                    }} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_17_40)">
                            <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                            <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                            <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                            <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
                        </g>
                        <defs>
                            <clipPath id="clip0_17_40">
                                <rect width="48" height="48" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    {isSigningIn ? 'Signing In...' : 'Continue with Google'}
                </button>
            </div>
        </main>
    );
};

export default Login;
