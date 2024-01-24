import { useEffect } from 'react';
import Experiences from '../components/Experiences';
import ExperienceForm from '../components/ExperienceForm';
import { useExperiencesContext } from '../hooks/useExperiencesContext';

const Home = () => {
  const { experiences, dispatch } = useExperiencesContext();

  useEffect(() => {
    const fetchExperiences = async () => {
      const response = await fetch('/api/TravelExperiences');
      const json = await response.json();

      if (response.ok) {
        dispatch({type: 'SET_EXPERIENCES', payload: json})
      }
    };
    
    fetchExperiences();
  }, []);

  return (
    <div className="home">
      <div className="experiences">
        {experiences &&
          experiences.map((experience) => (
            <Experiences key={experience._id} experience={experience} />
          ))}
      </div>
      <ExperienceForm />
    </div>
  );
};

export default Home;
