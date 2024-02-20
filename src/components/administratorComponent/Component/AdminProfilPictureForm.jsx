import React, { useState } from 'react';
import axios from 'axios';

const ProfilePictureForm = ({adminId}) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.patch(`https://swifdropp.onrender.com/api/v1/admin/${adminId}/picture`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <form >
     
     <div className='text-center'>
        <input type="file" accept="image" onChange={handleFileChange}/>
      
        
            <button className='bottomsidedivchangephoto w-50' onClick={handleFormSubmit}>Change Photo</button>
            </div>
      
    </form>
  );
};

export default ProfilePictureForm;