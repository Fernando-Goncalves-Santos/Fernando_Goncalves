export const Project = ({name, description, tags, link, image}) => {
  return (
    <div
      className="project"
      onClick={() => window.open(link, "_blank")}
    >
      <div className="img-section">
        <img
          src={image}
          alt={`Print da tela do aplicativo ${name}`}
        />
      </div>
      <div className="project-info">
        <h3>{name}</h3>
        {description}
        <ul className="tags">
            {tags && tags.map((tag, index) => (
                <li key={index}>{tag}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};
