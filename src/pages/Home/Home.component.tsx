import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: pink; /* Set your desired background color here */
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;
const Message = styled.p`
  font-size: 24px;
  text-align: center;
  max-width: 600px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title> Happy Birthday MY Friend!</Title>
      <Message>
      "Happy Birthday to the one who's been by my side through every smile and tear, every joy and fear, for the past four amazing years. You're not just a friend; you're family. Here's to many more years of laughter, adventures, and unforgettable memories together. Cheers to us, and may your day be as special as you've made my life.
      </Message>
    </HomeContainer>
  );
};

export default Home;