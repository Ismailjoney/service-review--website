import React from 'react';
import { Link } from 'react-router-dom';
 

const Registration = () => {


    const handleRegSubmit = event => {
        event.preventDefault()
    }


    return (
        <div className='mt-40 my-40'>
            <div className='flex justify-center align-center '>
            <form onSubmit={handleRegSubmit}>
                <label htmlFor="Text">Frist Name :</label><br />
                <input type="text" name="fristName" placeholder="Enter Your frist name" className="input input-bordered input-primary w-full max-w-xs" /><br />

                <label htmlFor="Text">Last Name :</label><br />
                <input type="text" name="lastName" placeholder="Enter Your last name" className="input input-bordered input-primary w-full max-w-xs" /><br />

                <label htmlFor="email">Email</label><br />
                <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered input-primary w-full max-w-xs" /><br />

                <label htmlFor="password">PassWord :</label><br />
                <input type="password" name="password" placeholder="Enter Your Password" className="input input-bordered input-primary w-full max-w-xs" /><br />

                <button className="btn btn-primary mt-4">Button</button>
            </form> <br />
            
        </div>
        <p className='text-center'>If you allready user please <Link className='text-primary' to='/login'>login</Link></p>
        </div>
    );
};

export default Registration;