import React, { useState } from 'react';
import "./MyProfile.scss";

const MyProfile = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["myprofile"],
    queryFn: () =>
      newRequest.get(`/myProfile/${id}`).then((res) => {
        return res.data;
      }),
  });

  const userId = data?.userId;

  const handleEditClick = () => {
    // Add your logic here to handle the edit functionality
    console.log('Edit button clicked');
  };

  return (
    <div>
      <div>
        <img src="/img/noavatar.jpg" alt="Profile Picture" />
        <h1>Name{data.name}</h1>
        <p>{bio}</p>
        <p>Age: {age}</p>
        <p>Resume: {resume}</p>
        <p>Skills: {skills}</p>
      </div>
      <button onClick={handleEditClick}>Edit</button>
    </div>
  );
};

export default MyProfile;
