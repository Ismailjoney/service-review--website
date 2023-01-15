import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/login.webp'
 
const Login = () => {


    const handleLogIn = event => {
        event.preventDefault()
    }


    return (
        <div className='flex justify-around align-center mt-40 my-40'>
            <div>
                <img className='w-full' src={login} alt="login" />
            </div>
            <div>
                <h2>LOgIn</h2>
                <form onSubmit={handleLogIn}>
                    <label htmlFor="email">Email</label><br />
                    <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered input-primary w-full max-w-xs" />
                    <label htmlFor="password">PassWord :</label><br />
                    <input type="password" name="password" placeholder="Enter Your Password" className="input input-bordered input-primary w-full max-w-xs" />
                    <button  className="btn btn-primary mt-4">Button</button>
                </form>
                <p>If you are new user please <Link className='text-primary' to='/reg'>registration</Link> now</p>
            </div>

        </div>
    );
};

export default Login;