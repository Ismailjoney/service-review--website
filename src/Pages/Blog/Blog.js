import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="collapse px-7">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    Questions and answer
                </div>
                <div className="collapse-content">
                    <h2 className='font-bold text-3xl'>Difference between SQL and NoSQL</h2>
                    <h3 className='font-bold'>SQL</h3>
                    <p className='text-justify px-10'>
                        --SQL(structure Query Language) is the standard language for dealing with Relational Database.
                        -- SQl database relational database is a collection of highly structure tables.
                        --each now reflects a data entity and every column definies a specific information field.
                        -- Relation database is build useing the stractured query language to create,store, update and relative data.
                    </p>
                    <h3 className='font-bold'>NO SQL</h3>
                    <p className='text-justify px-10'>
                        --Document database store data documents similar to JSON(javascript Object Nation)objects.each Document contains pairs of fields and values.The values can typically be a variety of types including things like string, numbers, blooen, arrays or objects.
                        --Key value database are a simple type of database where each item contains keys and values.
                        --Wide column stirs store data in tables rows and dynamic columns.
                    </p>
                    <div>
                        <h3 className='font-bold text-3xl'>2.What is JWT, and how does it work?</h3>
                        <p className='text-justify px-10'>
                            --- JWTS differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                            The header and the payload.
                            The signature.
                            The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.

                            The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.

                            There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.

                            The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
                        </p>
                    </div>
                    <div>
                        <h3 className='font-bold text-3xl'>3.What is the difference between javascript and NodeJS?</h3>
                        <p className='text-justify px-10'>
                            JavaScript is a programming language, which runs in web browsers. Whereas Node.js is an interpreter or running environment for JavaScript, which holds a lot of requiring libraries and all. JavaScript is basically one standard defining programming language; it can run any browser with a default browser running environment. It is a very strong language normally used for a web application on any verification or any specific business logic. We need to append in the screen without page refreshing. JavaScript also helps to use Ajax at any time, which helps us call any server-side script for given dynamic data based on the requirement. It also helps with generating dynamic HTML tables based on business requirement. JQuery is one of the popular libraries to make comfortable use of JavaScript by avoiding to write a lot of code.

                            Node.js also holds a lot of relative libraries, which we normally use in javascript for general purpose programming language. It is actually a kind of environment or interpreter that can represent JavaScript or run any javascript program. It mainly helps us execute some non-blocking operation like some operating system special information like certificate details or hardware details; we may use node js on the same, which help us do it, and JavaScript normal programming will not help us on the same. Normally all browsers have a JavaScript engine that helps us to run javascript in a web browser. Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome) are some popular javascript engine using verities browsers. But node js is using the V8 engine directly, with some libraries to do some I/O or networking operations. It actually helps us use JavaScript from outside of the browser, like creating, writing or executing one shell script, some back-end services, or running on hardware. Let us understand  JavaScript vs Node JS in detail.
                        </p>
                    </div>
                    <div>
                        <h3 className='font-bold text-3xl'> 4.How does NodeJS handle multiple requests at the same time?</h3>
                        <p className='text-justify px-10'>
                            --Node js runs on single thread which makes it easier to handle up to 10,000 concurrent request.All blocking io taks  are allwayes being processed asyhonously by initial threades without interrupting the main thred.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Blog;