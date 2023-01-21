import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/login.webp'
import { AuthorContext } from '../../Context/AuthContext';

const Login = () => {
    const { singin } = useContext(AuthorContext)
    const [error, setError] = useState('')
    const location = useLocation();
    const navigate = useNavigate()




    const from = location.state?.from?.pathname || '/';

    const handleLogIn = event => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        singin(email, password)
            .then(res => {
                // const user = res.user;
                // console.log(user)
                // navigate('/')
                navigate(from, { replace: true });
                form.reset()
            })
            .catch(err => {
                setError(err.message)
            })

    }

    return (
        <div >
            <h2 className='text-3xl text-center mt-10 my-10'>LOgIn</h2>
            <div className='flex flex-col  justify-center align-center   mt-10 my-20   lg:flex-row lg:justify-around '>
                <div className='m-auto mt-4'>
                    <img className='w-90' src={login} alt="login" />
                </div>
                <div className='m-auto mt-4'>
                    <form onSubmit={handleLogIn}>
                        <label htmlFor="email">Email</label><br />
                        <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered input-primary w-full max-w-xs" /> <br />
                        <label htmlFor="password">PassWord :</label><br />
                        <input type="password" name="password" placeholder="Enter Your Password" className="input input-bordered input-primary w-full max-w-xs" />
                        <p className='text-danger'>{error}</p>
                        <button className="btn btn-primary mt-4">Button</button>
                    </form>
                    <p>If you are new user please <Link className='text-primary' to='/reg'>registration</Link> now</p>
                </div>

            </div>
        </div>

    );
};

export default Login;