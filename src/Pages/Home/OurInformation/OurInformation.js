import React from 'react';
import sectionpic from '../../../assets/sectionpic.webp'
import info from '../../../assets/info.jpg'

const OurInformation = () => {
    return (
        <div>
            <h2 className='text-3xl text-center my-14'>Our Info</h2>
            <div className="flex justify-between w-full">
                <div className='w-1/2 flex justify-center'>
                    <img style={{ width: '70%', height: '100%' }} className='px-10 ' src={info} alt="Movie" />
                </div>
                <div className="w-1/2">
                    <h2 className=" ">New movie is released!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae consequuntur at delectus exercitationem iure, enim nihil iusto labore quisquam natus alias est illum, fugit magnam nobis eos reiciendis. Autem quam, accusamus porro rerum maiores, qui officia architecto, laboriosam doloremque maxime sit necessitatibus eligendi sint illum. Magnam perferendis, tempora dicta iste vero ipsum error consequatur soluta perspiciatis consequuntur iure sit voluptatem asperiores nemo doloribus assumenda libero. At fuga, quam commodi amet similique id! Nemo assumenda consequatur earum illo nostrum veniam tempore fugiat suscipit mollitia sunt voluptatibus ab architecto unde ratione repellat animi magnam sed qui, aut accusantium? Fugiat, corporis nihil. Saepe!</p>

                </div>
            </div>
        </div>
    );
};

export default OurInformation;