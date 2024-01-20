const Experiences = ({ experience }) => {
  return (
    <div className="experience-details">
      <p style={{ fontSize: '16px' }}><strong>Name:</strong> {experience.name}</p>
      <p style={{ fontSize: '16px' }}><strong>Title:</strong> {experience.title}</p>
      <p style={{ fontSize: '20px' }}>{experience.body}</p>
        <p>{experience.createdAt}</p>
    </div>
  );
};

export default Experiences;
