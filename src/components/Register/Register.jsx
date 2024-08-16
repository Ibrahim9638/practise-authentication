import { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const {CreateUser} = useContext(AuthContext);

    const [userSuccess, setUserSuccess] = useState('');
    const [userError, setUserError] = useState('');

    const handleRegistration = e =>{
        
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        if(password.length > 6){
         setUserError('Password at least 6 Character')
        }

        setUserSuccess('');
        setUserError('');


        CreateUser(email, password)
        .then(result=>{
            console.log(result.user);
            setUserSuccess(' ');
            toast('User Created Successfully', userSuccess);
            e.target.reset();
        })
        .catch(error=>{
            console.log(error.message)
            setUserError(error.message, userError)
            toast(error.message, userError)
        })
        
    
    }
    return (
        <div className="hero bg-slate-800 min-h-screen">
            <div className="hero-content w-[560px]">            
                <div className="card bg-base-100 w-full shadow-2xl">
                <h2 className='text-center m-3 text-2xl font-bold text-green-950'>Please Registration</h2>
                    <form onSubmit={handleRegistration} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"
                                placeholder="Enter Your Name"
                                name='name'
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                placeholder="Enter Your Email"
                                name='email'
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                placeholder="Enter your password"
                                name='password'
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Registration</button>
                        </div>
                       
                    </form>     
                          
                </div>               
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;