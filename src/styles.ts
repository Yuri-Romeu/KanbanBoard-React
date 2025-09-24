import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

type Props = {
     type: 'primary' | 'secondary';
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
`;

export const ColumnsWrapper = styled.div`
     display: flex;
     justify-content: space-around;
     gap: 2rem;
`;

export const Title = styled.h1<Props>`
     text-align: ${({ type }) => (type === 'primary' ? 'center' : 'left')};
     color: #424858;
     font-size: ${({ type }) => (type === 'primary' ? '2rem' : '1.5rem')};
     margin-left: ${({ type }) => (type === 'primary' ? 0 : '2px')};
     margin-bottom: 8px;
`;
