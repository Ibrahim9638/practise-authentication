import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '../../firebase/firebase.init';

const Login = () => {
    const {signInUser} = useContext(AuthContext);
    const [signUser, setSignUser] = useState('');
    const navigate = useNavigate();
    const emailRef = useRef(null);

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
        .then(result=>{
            console.log(result.user);
            setSignUser('');
            toast("User Logged In Successfully", signUser);
            navigate('/');

        })
        .catch(error=>{
            console.log(error.message)
        }); 
    }
    const handleForgetPassword =()=>{
        const email = emailRef.current.value;
        sendPasswordResetEmail(auth, email)
        .then(()=>{
            console.log('Check your email')
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    
   

    return (
        <div className="hero bg-slate-800 min-h-screen">
            <div className="hero-content w-[560px]">
                <div className="card bg-base-100 w-full shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                placeholder="email"
                                name='email'
                                ref={emailRef}
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                placeholder="password"
                                name='password'
                                className="input input-bordered"
                                required />
                            <label className="label">
                                <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;