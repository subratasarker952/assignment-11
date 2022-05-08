import React from 'react';


const Blogs = () => {
    
 
    return (
        <div className='blogs container'>
            <h3> Question: Difference between javascript and nodejs?</h3>
            <p> Answer: javascript is a programming language but nodejs is not a programming language.
                javascript run only browser nodejs make server to help javascript run smoothly with out error.
            </p>

            <h3> Question: when should use nodejs and mongodb?</h3>
            <p> Answer: To make a server need nodejs or nodejs like language and when need a database then need mongodb or mongodb like database</p>

            <h3> Question: Difference between sql and nosql database</h3>
            <p> Answer:sql database is stuctured predefined data formate, nosql database is nonstuctued data formate.
                sql database vertically scalable nosql database horaizontaly scalable 
        sql database understandable and readeable nosql database is dificult from sql database.
            </p>        
        </div>
    );
};

export default Blogs;