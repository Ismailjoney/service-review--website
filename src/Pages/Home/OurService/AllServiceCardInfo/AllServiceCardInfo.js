import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthorContext } from '../../../../Context/AuthContext';
import Comments from './Comments';


const AllServiceCardInfo = () => {
    const service = useLoaderData()
    const {user} = useContext(AuthorContext)
    const [comments, setComments] = useState([])
    const {email} = user;
    
    const { name, img, price, location, description, view_details, _id } = service;
    const date = new Date()

    const handdleSubmitComment = event => {
        event.preventDefault()

        const cmntmsg = event.target.text.value;
        const id = _id
        const commentmessage = { cmntmsg, id, date,email }
        event.target.reset()

        fetch(`http://localhost:5000/comments`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(commentmessage)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                 
                // if (data.acknowledged) {
                    
                // }
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetch(`http://localhost:5000/comments`)
            .then(res => res.json())
            .then(data => {   
                console.log(data)             
                const productComments  = data.filter(d => d.id ===  _id)//--specific product er comment pacci(d.id hocce producut id)
                const olderComents = comments.filter(cmnt => cmnt.id === _id)//--coments pacci
                const newComment =[ olderComents, ...productComments, ]
                setComments(newComment)
               })
    },[comments])
 
    return (
        <div className='flex justify-evenly '>
            <div className='flex justify-center mt-20 my-20'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img style={{ width: '330px', height: '210px' }} src={img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <p>Ticket Price:{price}</p>
                        <p>Location: {location}</p>
                        <p>Info:{description.length > 100 ? description.slice(0, 100) + '...' : description}</p>
                        <p>View Details: {view_details}</p>

                    </div>
                </div>
            </div>
            <div className='mt-20 my-20'>
                <h2>Add Your Comment: </h2>
                <div>
                    <form onSubmit={handdleSubmitComment} action="">
                        <textarea name="text" className="textarea textarea-info w-96 mt-2" placeholder="add comment" required></textarea><br />
                        <button className="btn  btn-sm btn-primary px-7 ">send</button>
                    </form>
                </div>
                {

                    comments.map(comment => <Comments
                        id={comment._id}
                        comment={comment}
                    ></Comments>)
                }

            </div>
        </div>
    );
};

export default AllServiceCardInfo;