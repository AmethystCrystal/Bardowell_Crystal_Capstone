import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { useExperiencesContext } from '../hooks/useExperiencesContext';

const Experiences = ({ experience }) => {

  const { dispatch } = useExperiencesContext()

  const handleClick = async () => {
    const response = await fetch('/api/TravelExperiences/' + experience._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_EXPERIENCE', payload: json})
    }
  }

  return (
    <div className="experience-details">
      <p style={{ fontSize: '16px' }}><strong>Name:</strong> {experience.name}</p>
      <p style={{ fontSize: '16px' }}><strong>Title:</strong> {experience.title}</p>
      <p style={{ fontSize: '20px' }}>{experience.body}</p>
      <p>{formatDistanceToNow(new Date(experience.createdAt), { addSuffix: true })}</p>
      <button>
        <span onClick={handleClick}>Delete</span>
      </button>
    </div>
  );
};

export default Experiences;
