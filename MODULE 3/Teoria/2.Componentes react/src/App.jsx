import React from "react";
import { Title, SubTitle, Image, Paragraph, Header } from "./components";

const App = () => {
  return (
    <>
      <Header />
      <div className="App">
        <Title className={"Title"} texto={"Welcome to Components ReactJS"} />
        <SubTitle
          className={"SubTitle"}
          texto={"This is a example components with ReactJS"}
        />
        <Image
          description={"Gon"}
          src={
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.wildix.com%2Fes%2Funa-introduccion-react-y-react-native%2F&psig=AOvVaw0wPmSjwWku3Vn6IGczigyk&ust=1714839058066000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCqyL3v8YUDFQAAAAAdAAAAABAE"
          }
          alt={"Imagen Gon"}
        />

        <Paragraph
          className={"Paragraph"}
          texto={"Este es mi primer ejercicio"}
        />
      </div>
    </>
  );
};

export default App;