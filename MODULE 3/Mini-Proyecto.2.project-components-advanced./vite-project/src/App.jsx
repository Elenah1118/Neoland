import React from 'react';
import { Header, Main, Footer, Title, SubTitle, CharacterList, ItemList, Image, Paragraph } from './Components';

const App = () => {
  return (
    <>
      <Header>
        <Title text="Title" />
      </Header>
      <Main>
        <SubTitle text="SubTitle" />
        <CharacterList>
          <ItemList items={['Name', 'Status', 'Origin']} />
        </CharacterList>
      </Main>
      <Footer>
        <Paragraph text="Created by name" />
        <Image src="image-src" alt="image-alt" width="100" height="100" />
        <Paragraph text="Copyright" />
      </Footer>
    </>
  );
};

export default App;
