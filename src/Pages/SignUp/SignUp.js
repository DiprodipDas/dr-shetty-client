import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/Login/login.jpg'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SignUp = () => {
    const {createUser}=useContext(AuthContext);
    
    const handleSignUp= event =>{
        event.preventDefault();
        const form= event.target;
        const email=form.email.value;
        const password=form.password.value;

        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
        })
        .catch(err=>console.error(err));
    }
  

    return (
        <div className="hero w-full my-12">
        <div className="hero-content grid gap-12 md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left ">
           <img src={loginImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-4xl mt-2 text-center font-bold">Sign Up</h1>
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="your name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="your email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="your password" className="input input-bordered" required/>
              </div>
              <div className="form-control mt-6">
                <input className='btn btn-success' type="submit" value="Sign Out" />
            
              </div>

            </form>
            <p className='text-center my-6'>Already have an account?<Link className='text-green-600 font-bold' to='/login'>Log in</Link></p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;