import React from 'react';
import './register.css'
import {Link} from 'react-router-dom'
import Image from '../../assets/Image.png'

const Register = () => {

  return (
    <div className='register section__padding'>
      <div className="register-container">
        <h1>register</h1>
        <p className='upload-file'>Upload Profile pic</p>
        <div className="upload-img-show">
          <img src={Image} alt="banner" />
          <p>browse media on your device</p>
        </div>
        <form className='register-writeForm' autoComplete='off' >
          <div className="register-formGroup">
            <label>Upload</label>
            <input type="file" className='custom-file-input'
          />
          </div>
          <div className="register-formGroup">
            <label>First Name</label>
            <input type="text" placeholder='Name' />
          </div>
          <div className="register-formGroup">
            <label>Last Name</label>
            <input type="text" placeholder='Name' />
          </div>
          <div className="register-formGroup">
            <label>Username</label>
            <input type="text" placeholder='Username'  />
          </div>
          <div className="register-formGroup">
            <label>Email</label>
            <input type="email" placeholder='Email' />
          </div>
          <div className="register-formGroup">
            <label>Password</label>
            <input type="text" placeholder='Password'   />
          </div>
         <div className="register-button">
          <button className='register-writeButton'>register</button>
          <Link to="/login">
            <button className='reg-login-writeButton' >Login</button>
          </Link>
         </div>
        </form>
      </div>
    </div>
   )
};

export default Register;


{/*<div className='register flex justify-center items-center'>
  <div className="register-container bg-gray-800 rounded-2xl p-8 min-w-[30%]">
    <h1 className="font-semibold text-4xl mb-10 text-center uppercase">register</h1>
    <p className='upload-file text-white'>Upload Profile pic</p>
    <div className="upload-img-show">
      <img src={Image} alt="banner" />
      <p className="text-white">browse media on your device</p>
    </div>
    <form className='register-writeForm' autoComplete='off'>
      <div className="register-formGroup">
        <label className="font-semibold text-2xl mb-3">Upload</label>
        <input type="file" className='custom-file-input' />
      </div>
      <div className="register-formGroup">
        <label className="font-semibold text-2xl mb-3">First Name</label>
        <input type="text" placeholder='Name' className="bg-gray-900 rounded-lg py-3 px-6 text-white text-base" />
      </div>
      <div className="register-formGroup">
        <label className="font-semibold text-2xl mb-3">Last Name</label>
        <input type="text" placeholder='Name' className="bg-gray-900 rounded-lg py-3 px-6 text-white text-base" />
      </div>
      <div className="register-formGroup">
        <label className="font-semibold text-2xl mb-3">Username</label>
        <input type="text" placeholder='Username' className="bg-gray-900 rounded-lg py-3 px-6 text-white text-base" />
      </div>
      <div className="register-formGroup">
        <label className="font-semibold text-2xl mb-3">Email</label>
        <input type="email" placeholder='Email' className="bg-gray-900 rounded-lg py-3 px-6 text-white text-base" />
      </div>
      <div className="register-formGroup">
        <label className="font-semibold text-2xl mb-3">Password</label>
        <input type="text" placeholder='Password' className="bg-gray-900 rounded-lg py-3 px-6 text-white text-base" />
      </div>
      <div className="register-button flex justify-between items-center">
        <button className='register-writeButton bg-blue-500 rounded-lg px-6 py-3 text-white font-semibold text-base'>register</button>
        <Link to="/login">
          <button className='reg-login-writeButton border-2 border-blue-500 rounded-lg px-6 py-3 text-blue-500 font-semibold text-base'>Login</button>
        </Link>
      </div>
    </form>
  </div>
</div>*/}