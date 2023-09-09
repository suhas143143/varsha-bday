
import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 800px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageStyle = styled.img`
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

`;

export const ParagraphStyle = styled.p`
  font-family: ${props => props.theme.fonts.family.subTitle};
  font-weight: ${props => props.theme.fonts.weights.medium};
  font-size: 1rem;
  color: black;
  margin: 0;
`;


