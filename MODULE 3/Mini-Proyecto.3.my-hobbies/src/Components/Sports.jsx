
export const Sports = ({ Sports }) => {
    const {Sports} = Sports;
    return (
    <div className="containterSports">
        <h2>Sports</h2><hr />
        {sports.map((sport, index) => (
        <div key={index}>
          <p>
            <strong>Name:</strong> {sport.name} <br />
            <strong>Indoor:</strong> {sport.indoor ? "Yes" : "No"} <br />
            <strong>Favorite Team:</strong> {sport.favoriteTeam}
          </p>
          {index !== sports.length - 1 && (
            <>
              <br />
            </>
          )}
        </div>
      ))}
    </div>
  );
};