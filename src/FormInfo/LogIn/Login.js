import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/login.webp'
import { AuthorContext } from '../../Context/AuthContext';

const Login = () => {
    const { singin, loginProvider, passReset } = useContext(AuthorContext)
    const googleProvider = new GoogleAuthProvider()
    const [error, setError] = useState('')
    const [passreset, setPassreset] = useState([])
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
                const user = res.user;
                const userInfo = {
                    email: user.email
                }
              
                //jwt token emplement:
                fetch(`http://localhost:5000/jwt`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json()
                        .then(data => {
                            localStorage.setItem(`service-review`, data.token);
                            
                        }))
                        navigate(from, { replace: true });
                            form.reset()
            })
            .catch(err => {
                setError(err.message)
            })

    }

    //google log in
    const googleSingIn = () => {
        loginProvider(googleProvider)
            .then(res => {
                const user = res.user;
                navigate('/')
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }

    // pass reset get email and set state step-1
    const handleEmailBlur = (event) => {
        const email = event.target.value;
        setPassreset(email)

    }
    //pass finally reset step-2(final)
    const handlePassReset = () => {
        passReset(passreset)
            .then(() => {
                toast(`check email and set a new password`)
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
                        <input onBlur={handleEmailBlur} type="email" name="email" placeholder="Enter Your Email" className="input input-bordered input-primary w-full max-w-xs" /> <br />
                        <label htmlFor="password">PassWord :</label><br />
                        <input type="password" name="password" placeholder="Enter Your Password" className="input input-bordered input-primary w-full max-w-xs" />
                        <p className='text-danger'>{error}</p>
                        <button className="btn btn-primary mt-4">Log in</button>
                    </form>

                    <p> if yor forget your password <button onClick={handlePassReset} className="btn btn-link"><small>reset now</small></button> </p>
                    <p>If you are new user please <Link className='text-primary' to='/reg'>registration</Link> now</p>
                    <button onClick={googleSingIn} className="btn btn-primary mt-4 ml-2">Log In With Google</button>
                </div>

            </div>
        </div>

    );
};

export default Login;