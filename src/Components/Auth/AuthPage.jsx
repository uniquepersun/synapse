import React from 'react';
import { Link } from 'react-router-dom';

const AuthPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg w-full max-w-6xl text-center">

        <div className="lg:w-1/2 h-64 lg:h-auto rounded-t-lg lg:rounded-l-lg lg:rounded-t-none overflow-hidden">
          <img src="./auth.jpg" alt="Auth" className="w-full h-full object-cover" />
        </div>
        
        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <div className="flex justify-center mb-8">
            <img src="./logo.png" alt="Synapse" className="h-12" />
          </div>
          <h2 className="text-3xl font-semibold mb-4">Welcome to Synapse</h2>
          <p className="text-gray-600 mb-6">Use your email or another service to continue with Synapse</p>
          <button className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-lg py-3 mb-4 hover:bg-gray-100 hover:shadow-lg transition-all">
            <img src="./email.png" alt="E-mail" className="h-6 mr-2" />
            Continue with E-Mail
          </button>
          <button className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-lg py-3 mb-4 hover:bg-gray-100">
            <img src="./google.png" alt="Google" className="h-6 mr-2" />
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-lg py-3 mb-4 hover:bg-gray-100">
            <img src="./apple.png" alt="Apple" className="h-6 mr-2" />
            Continue with Apple
          </button>
          or
          <Link to={'/'}>
            <button className="w-full flex items-center justify-center bg-white underline py-3">
              Continue without Login
            </button>
          </Link>
          <p className="text-gray-500 text-xs mt-6 text-center">
            By continuing, you agree to Synapse's <a href="#" className="underline">Terms of Use</a>. Read our <a href="#" className="underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
