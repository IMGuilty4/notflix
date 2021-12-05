import React from 'react';
import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div className="page404__container">
            <h1>404</h1>
            <h2>Page or movie not found</h2>
            <Link to="/" className="button">Go Back to Home Page</Link>
        </div>
    )
}

export default Page404;
 