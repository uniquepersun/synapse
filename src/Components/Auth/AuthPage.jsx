import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AuthPage = () => {
  const [showEmailLogin, setShowEmailLogin] = useState(true);

  const handleSlide = () => {
    setShowEmailLogin(!showEmailLogin);
  };

  useEffect(() => {
    handleSlide();
  }, [])

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="main-login-card relative flex flex-col lg:flex-row bg-white rounded-lg shadow-lg w-full max-w-6xl text-center">

        <div className="image absolute z-20 lg:w-1/2 h-full rounded-t-lg lg:rounded-l-lg lg:rounded-t-none overflow-hidden">
          <img src="./auth.jpg" alt="Auth" className="w-full h-full object-cover" />
        </div>

        {/* Email Login Section */}
        <div className={`email-login ${showEmailLogin ? 'active' : 'notActive'} lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center`}>
          <div className="back-button flex justify-start w-full">
            <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600" onClick={handleSlide}>&#8592; Back</button>
          </div>
          <div className="flex justify-center mb-8 gap-2">
            <img src="./logo.png" alt="Synapse" className="h-12" />
          </div>
          <h2 className="text-3xl font-semibold mb-4">Welcome to Synapse</h2>
          <p className="text-gray-600 mb-6">Use your email to continue with Synapse</p>
          <div className="inputs flex flex-col gap-4">
          <input
            id="email"
            type="text"
            placeholder="Email"
            className="w-full border rounded-lg py-3 px-4 focus:outline-none focus:border-purple-500"
          />
          <input
            id="password"
            type="text"
            placeholder="Password"
            className="w-full border rounded-lg py-3 px-4 focus:outline-none focus:border-purple-500"
          />

          <button className='bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600'>Continue</button>
          </div>
          <p className="text-gray-500 text-xs mt-6 text-center">
            By continuing, you agree to Synapse's <a href="#" className="underline">Terms of Use</a>. Read our <a href="#" className="underline">Privacy Policy</a>.
          </p>
        </div>

        {/* Login Options Section */}
        <div className={`login-options relative z-10 lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center ${showEmailLogin ? 'slide-right' : ''}`}>
          <div className="flex justify-center mb-8">
            <img src="./logo.png" alt="Synapse" className="h-12" />
          </div>
          <h2 className="text-3xl font-semibold mb-4">Welcome to Synapse</h2>
          <p className="text-gray-600 mb-6">Use your email or another service to continue with Synapse</p>
          <button
            className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-lg py-3 mb-4 hover:bg-gray-100 hover:shadow-lg transition-all"
            onClick={handleSlide}
          >
            <img src="./email.png" alt="E-mail" className="h-6 mr-2" />
            Continue with E-Mail
          </button>
          <button
            className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-lg py-3 mb-4 hover:bg-gray-100"
          >
            <img src="./google.png" alt="Google" className="h-6 mr-2" />
            Continue with Google
          </button>
          <button
            className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-lg py-3 mb-4 hover:bg-gray-100"
          >
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

export default AuthPage