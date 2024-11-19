import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className='page-not-found'>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for does not exist.</p>
      <Link to="/" style={{color:"blue"}}>Go to Login</Link>
    </div>
  );
};

export default NotFoundPage;
