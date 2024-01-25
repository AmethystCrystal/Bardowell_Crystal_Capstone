import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import React, { useState } from 'react';
import { useExperiencesContext } from '../hooks/useExperiencesContext';

const Experiences = ({ experience }) => {
  const { dispatch } = useExperiencesContext()
  const [editedName, setEditedName] = useState(experience.name);
  const [editedTitle, setEditedTitle] = useState(experience.title);
  const [editedBody, setEditedBody] = useState(experience.body);
  const [isEditing, setIsEditing] = useState(false); 

  const handleClick = async () => {
    const response = await fetch('/api/TravelExperiences/' + experience._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_EXPERIENCE', payload: json})
    }
  }

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = async () => {
    try {
      const response = await fetch('/api/TravelExperiences/' + experience._id, {
        method: 'PUT',
        body: JSON.stringify({
          name: editedName,
          title: editedTitle,
          body: editedBody,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const text = await response.text();
      console.log('Server response:', text);
  
      const json = JSON.parse(text);
  
      if (response.ok) {
        console.log('Successfully updated:', json);
        dispatch({ type: 'UPDATE_EXPERIENCE', payload: json });
        setIsEditing(false);
      } else {
        console.error('Failed to update:', json);
      }
    } catch (error) {
      console.error('Error during update:', error);
    }
  };
  

  const handleCancelEdit = () => {
    setEditedName(experience.name);
    setEditedTitle(experience.title);
    setEditedBody(experience.body);
    setIsEditing(false);
  };

  return (
   
    <div className="experience-details">
    {isEditing ? (
      <>
        <label>Edit Name</label>
        <input
          type="text"
          onChange={(e) => setEditedName(e.target.value)}
          value={editedName}
        />
        <label>Edit Title</label>
        <input
          type="text"
          onChange={(e) => setEditedTitle(e.target.value)}
          value={editedTitle}
        />
        <label>Edit Body</label>
        <textarea
          rows="5"
          onChange={(e) => setEditedBody(e.target.value)}
          value={editedBody}
        />
        <button onClick={handleSaveEdit}>Save</button>
        <button onClick={handleCancelEdit}>Cancel</button>
      </>
    ) : (
      <form>
      <p style={{ fontSize: '16px' }}>
        <strong>Name:</strong> {experience.name}
      </p>
      <p style={{ fontSize: '16px' }}>
        <strong>Title:</strong> {experience.title}
      </p>
      <p style={{ fontSize: '20px' }}>{experience.body}</p>
      <p>{formatDistanceToNow(new Date(experience.createdAt), { addSuffix: true })}</p>
      <button onClick={handleClick}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </form>
       )}
       </div>
  );
};

export default Experiences;
