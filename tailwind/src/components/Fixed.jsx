import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faGoogle, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpAZ } from '@fortawesome/free-solid-svg-icons';


const Fixed = () => {
  return (
    <div className="fixed bottom-10 flex flex-col items-end space-y-3 px-4 py-7">
      <a href="https://www.instagram.com" className="slide text-green-300 hover:text-green-500">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.facebook.com" className='slide text-green-300 hover:text-green-500'>
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://mail.google.com" className="slide text-green-300 hover:text-green-500">
        <FontAwesomeIcon icon={faGoogle} size="2x" />
      </a>
      <a href="https://www.whatsapp.com" className="slide text-green-300 hover:text-green-500">
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
      <a href="https://www.twitter.com" className='slide text-green-300 hover:text-green-500'>
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href='#' className='text-orange-300 hover:text-orange-500 text-2xl p-2 border border-red-700 border-4 '>
      <FontAwesomeIcon icon={faArrowUpAZ} />
      </a>
      
    </div>
  );
}

export default Fixed;
