
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthorContext } from '../../Context/AuthContext';
import { setAuthJwt } from '../../Utilities/jwtapi/AuthJwtProcess';


const Registration = () => {

    const [error, setError] = useState('')
    const { createUser,emailVerify,updateUserProfile } = useContext(AuthorContext)
    const navigate = useNavigate()
    
 

    const handleRegSubmit = event => {
        event.preventDefault()
        const form = event.target;

        const name = `${form.fname.value} ${form.lname.value}`;
        const email = form.email.value;
        const password = form.password.value;
         

        if(!/\d/.test(password)){
            setError('please use atlest One digit') 
            return;
        }
        
        //setError('') mane error kno kicu set korbe na 
        setError('')

        createUser(email, password)
            .then(resualt => {
                const user = resualt.user;

                 //jwt token emplement utilitis folder work:
                setAuthJwt(user)
                form.reset()

                emailVerify()
                .then(() =>{
                    alert(`please check your email and vefify now`)
                    navigate('/')
                })
            })
            .catch(error => {
                setError(error.message);
            })
    }
     

    

return (
    <div className='mt-10'>
        <h2 className='text-3xl font-bold text-center my-10'>Registration Now</h2>
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
                    <p className='text-red-600'>{error}</p>
                    <button className="btn btn-primary mt-4">Registration Now</button>
                </form>
            </div>
        </div>
        <p className='text-center mt-2'>If you allready user please <Link className='text-primary' to='/login'>login</Link></p>
    </div>
);
};

export default Registration;