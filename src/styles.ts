import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

type Props = {
     type: 'primary' | 'secondary';
};

type ContainerButtonProps = {
     backgroundColor: string;
     side: 'left' | 'right';
};

export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Nunito', sans-serif;
        background-color: #FFF8ED;
        padding: 1.5rem;
    }
`;

export const Container = styled.div`
     max-width: 1200px;
     margin: 0 auto;
     padding: 1rem;
     background-color: #fff;
     border-radius: 12px;
     display: flex;
     flex-direction: column;
     gap: 1rem;

     @media (max-width: 768px) {
          max-width: 720px;
          padding: 0.5rem;
          width: 100%;
     }
`;

export const ColumnsWrapper = styled.div`
     display: flex;
     justify-content: space-around;
     gap: 2rem;

     @media (max-width: 768px) {
          flex-direction: column;
          align-items: center;
     }
`;

export const Title = styled.h1<Props>`
     text-align: ${({ type }) => (type === 'primary' ? 'center' : 'left')};
     color: #424858;
     font-size: ${({ type }) => (type === 'primary' ? '2rem' : '1.5rem')};
     margin-left: ${({ type }) => (type === 'primary' ? 0 : '2px')};
     margin-bottom: 8px;
`;

export const ContainerIcon = styled.div<ContainerButtonProps>`
     padding: 20px;
     background-color: ${props => props.backgroundColor};
     border-radius: 8px;
     cursor: pointer;
     opacity: 0.6;
     position: absolute;
     bottom: 5px;
     transition: opacity 0.3s ease-in-out;
     ${props => (props.side === 'left' ? 'left: 10px' : 'right: 10px')};

     &:hover {
          opacity: 1;
     }
`;
