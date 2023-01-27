import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthorContext } from '../../../../Context/AuthContext';
import Comments from './Comments';


const AllServiceCardInfo = () => {
    const service = useLoaderData()
    const { user } = useContext(AuthorContext)
    const [comments, setComments] = useState([])
    const { name, img, price, location, description, view_details, _id } = service;
//     const date = moment().format("Do MMM YYYY h:mm:ss a");
// const date = new Date();
    const date = new Date( )

    const handdleSubmitComment = event => {
        event.preventDefault()

        const cmntmsg = event.target.text.value;

        const commentmessage = {
            cmntmsg,
            id: _id,
            date,
            email : user?.email,
        }
        // console.log(commentmessage)
        // console.log(date,email);
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
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetch(`http://localhost:5000/comments`)
            .then(res => res.json())
            .then(data => {
                const productComments = data.filter(d => d.id === _id)
                const olderComents = comments.filter(cmnt => cmnt.id === _id)
                const newComment = [olderComents, ...productComments,]
                setComments(newComment)
            })
    }, [comments])

    return (
        <div className='flex lg:flex-row justify-evenly sm:flex-col'>
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
                        key={comment._id}
                        comment={comment}
                    ></Comments>)
                }

            </div>
        </div>
    );
};

export default AllServiceCardInfo;