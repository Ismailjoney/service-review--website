import React from 'react';

const Blog = () => {
    return (
        <div>
            1.Difference between SQL and NoSQL?
            <h3 className='font-bold'>SQL</h3>
            --SQL(structure Query Language) is the standard language for dealing with Relational Database.
            -- SQl database relational database is a collection of highly structure tables.
            --each now reflects a data entity and every column definies a specific information field.
            -- Relation database is build useing the stractured query language to create,store, update and relative data.
            <h3 className='font-bold'>NO SQL</h3>
            --Document database store data documents similar to JSON(javascript Object Nation)objects.each Document contains pairs of fields and values.The values can typically be a variety of types including things like string, numbers, blooen, arrays or objects.
            --Key value database are a simple type of database where each item contains keys and values.
            --Wide column stirs store data in tables rows and dynamic columns.


            2.What is JWT, and how does it work?
            3.What is the difference between javascript and NodeJS?
            4.How does NodeJS handle multiple requests at the same time?
            --Node js runs on single thread which makes it easier to handle up to 10,000 concurrent request.All blocking io taks  are allwayes being processed asyhonously by initial threades without interrupting the main thred.
        </div>
    );
};

export default Blog;