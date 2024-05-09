
import { Title, SubTitle, Image, Paragraph } from "./components;

const App = () => {

  const name = "Siegmeyer of Catarina";
  
  return (
   

    <div className="App">
     <div className="App">
        <Title className={"Title"} texto={"Welcome to Components ReactJS"} />
        <SubTitle
          className={"SubTitle"}
          texto={"This is a example components with ReactJS"}
        />
        <Image
          description={"simpson"}
          src={
            "https://media.revistagq.com/photos/5d6342d50ef2260008f5d161/16:9/w_2560%2Cc_limit/simpson.jpg"
          }
          alt={"Imagen Simpson"}
        />

        <Paragraph
          className={"Paragraph"}
          texto={"Ejercicios React"}
        />
      </div>
    </div>
  );
};

export default App;