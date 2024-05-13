export const SongsHeard = (Songs) => {
    const { SongsHeard } = Songs;
    console.log("🚀 ~ Parrafo ~ props:", Songs);
  
    return (
        <div className="containerSongs">
            <h2> Songs listened</h2>
            <ul>
                {SongsHeard.map((song, index) => (
                    <p key={index}>{song}</p>
                )) }
            </ul>
        </div>
    )
  };