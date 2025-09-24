import styled from 'styled-components';

type Props = {
     color: string;
};

export const Content = styled.div<Props>`
     background-color: ${props => props.color};
     display: flex;
     flex-direction: column;
     gap: 1rem;
     padding: 3rem;
     height: 100%;
     border-radius: 12px;
     width: 20%;
     position: relative;
`;

export const AddTask = styled.button`
     background-color: transparent;
     font-size: 12px;
     color: #404653;
     font-weight: 500;
     border: none;
     cursor: pointer;
     position: absolute;
     bottom: 0.3rem;
     left: 5rem;
     margin: 10px 0;
     transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;

     &:hover {
          transform: scale(1.05);
          color: #000;
     }
`;
