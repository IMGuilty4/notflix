import React from 'react';
import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div className="page404__container">
            <h1>404</h1>
            <h2>Page or movie no found</h2>
            <Link to="/" className="button">Go Back to Home</Link>
        </div>
    )
}

export default Page404;
 