import { useEffect, useState } from 'react';
import Experiences from '../components/Experiences';

const Home = () => {
  const [experiences, setExperiences] = useState(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      const response = await fetch('/api/TravelExperiences');
      const json = await response.json();
      if (response.ok) {
        setExperiences(json);
      }
    };
    fetchExperiences();
  }, []);

  return (
    <div className="home">
      <div className="experiences">
        {experiences &&
          experiences.map((experience) => (
           <Experiences key={experience._id} experience={experience}/>
          ))}
      </div>
    </div>
  );
};

export default Home;
