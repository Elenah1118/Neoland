export const Read = ({ List }) => {
    const { read } = List;
  
    return (
      <div className="read-container">
        <h2>Read</h2>
        <div className="books-list">
          {read.map((book, index) => (
            <div key={index} className="book">
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Pages: {book.pages}</p>
              <p>Year: {book.year}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };