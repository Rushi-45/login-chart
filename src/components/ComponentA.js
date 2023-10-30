import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ComponentA = ({ isLoggedInUser, setIsLoggedInUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success('Logged out Successfully!');
    setIsLoggedInUser(false);
    navigate('/login');
  };

  return (
    <div>
      {isLoggedInUser ? (
        <button
          type="button"
          className="ml-5 mt-4 inline-block rounded bg-red-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          onClick={handleLogout}
        >
          Log out
        </button>
      ) : (
        <h2>Please Login</h2>
      )}
    </div>
  );
};

export default ComponentA;
