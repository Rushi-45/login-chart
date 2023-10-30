import React, { useState } from 'react';
import login from '../assets/images/wc.jpeg';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Login = ({ setIsLoggedInUser, setUsers, users }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        if ((username === 'rushi' || username === 'vijay') && password === '123') {
            toast.success('Logged in Successfully!');
            const userArray = username;
            setUsers([...users, userArray]);
            setIsLoggedInUser(true);
            navigate('/dashboard');
        } else {
            setIsLoggedInUser(false);
            console.log('error logging in');
            toast.error('Error logging in!');
        }
    };

    const handleNavigateAdmin = () => {
        navigate('/admin-login');
    };

    return (
        <div className='flex'>
            <div className='w-2/3 flex'>
                <img src={login} alt='hi' />
            </div>
            <div className='w-1/3 h-screen flex items-center justify-center'>
                <div>
                    <h2 className='font-bold text-3xl mb-10'>User Login Form</h2>
                    <div className='flex flex-col'>
                        <label htmlFor='email'>Username</label>
                        <input
                            className='w-80 h-8 focus:bg-slate-50 pl-3'
                            type='text'
                            value={username}
                            onChange={handleUsernameChange}
                        />
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label htmlFor='password'>Password</label>
                        <input
                            className='w-80 h-8 focus:bg-slate-50 pl-3'
                            type='password'
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div className='flex justify-center'>
                        <button
                            type='button'
                            className='w-80 mt-4 inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                    </div>
                    <div className='flex justify-center mt-5'>
                        not a user?
                        <div className='text-blue-700 cursor-pointer' onClick={handleNavigateAdmin}>
                            adminpanel
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
