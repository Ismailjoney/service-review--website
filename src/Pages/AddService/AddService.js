import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthorContext } from '../../Context/AuthContext';

const AddService = () => {
    const { user } = useContext(AuthorContext)


    const handdleSubmit = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value
        const email = user.email;
        const imgurl = form.imgurl.value;
        const location = form.location.value;
        const description = form.description.value;
     
        const userservice = {
            name,
            email,
            imgurl,
            location,
            description,    
        }
        console.log(userservice);

         fetch('http://localhost:5000/addservices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userservice)
        })
            .then(res => res.json())
            .then(data => {
                
                if (data.acknowledged) {
                     toast("Add Service Sucessfull",{
                            position: "top-center",
                        })
                }
                form.reset()
                
            })


    }
    return (
        <div>
            <h2 className='text-3xl text-center'>Add Your Service</h2>
           <div className='flex justify-center mt-9 my-40'>
           <form onSubmit={handdleSubmit}>
                <input type="text" name="name" placeholder="Type service name" className="input input-bordered input-primary w-full max-w-xs" required /><br />
                <input type="text" name="imgurl" placeholder="Type here img url" className="input input-bordered input-primary w-full max-w-xs mt-2" required /><br />
                <input type="text" name="location" placeholder=" location ex:(from madaripur to dhaka)" className="input input-bordered input-primary w-full max-w-xs mt-2" required /> <br />
                <input type="email" name="email" placeholder={user?.email} className="input input-bordered input-primary w-full max-w-xs mt-2" readOnly /><br />
                <textarea style={{width: '316px'}} name="description"  className="textarea textarea-primary   mt-2" placeholder="Add Your Desdcription" required></textarea><br />
                <button className="btn btn-primary mt-1">Post Service</button>
            </form>
           </div>
        </div>
    );
};

export default AddService;