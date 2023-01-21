import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthorContext } from '../../Context/AuthContext';


const Registration = () => {

    const [error, setError] = useState('')
    const {createUser} = useContext(AuthorContext)
    const navigate = useNavigate()

    const handleRegSubmit = event => {
        event.preventDefault()
        const form = event.target;

        const name = `${form.fname.value} ${form.lname.value}`;
        //   const phone = form.phone.value
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password)
            .then(resualt => {
                const user = resualt.user;
                navigate('/')
            })
            .catch(error => {
                console.error(error.message)
                setError(error.message);
            })
    }


    return (
        <div className='mt-10'>
            <h2 className='text-3xl text-center my-10'>Registration</h2>
            <div className='mt-4 w-full'>
                <div className='lg:w-1/2 mx-auto sm:w-full'>
                    <form className='lg:w-1/2 mx-auto' onSubmit={handleRegSubmit} >
                        <label htmlFor="Text">Frist Name :</label><br />
                        <input type="text" name="fname" placeholder="Enter Your frist name" className="input input-bordered input-primary w-full max-w-xs" required /><br />
                        <label htmlFor="Text">Last Name :</label><br />
                        <input type="text" name="lname" placeholder="Enter Your frist name" className="input input-bordered input-primary w-full max-w-xs" required /><br />
                        <label htmlFor="email">Email</label><br />
                        <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered input-primary w-full max-w-xs" required /><br />
                        <label htmlFor="password">PassWord :</label><br />
                        <input type="password" name="password" placeholder="Enter Your Password" className="input input-bordered input-primary w-full max-w-xs" required /><br />
                        <p className='text-danger'>{error}</p>
                        <button className="btn btn-primary mt-4">Button</button>
                    </form>
                </div>
               
            </div>
            <p className='text-center'>If you allready user please <Link className='text-primary' to='/login'>login</Link></p>
        </div>
    );
};

export default Registration;