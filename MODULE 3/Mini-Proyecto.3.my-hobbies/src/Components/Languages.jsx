

// Definición del componente Languages
const Languages = ({ List }) => {
  return (
    <div className="Languages">
      <h2>Languages I'm Learning:</h2>
      <ul>
        {/* Mapea la lista de hobbies y renderiza cada uno como un elemento de lista */}
        {List.languages.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
    </div>
  );
};

// Exporta el componente Languages
export default Languages;
