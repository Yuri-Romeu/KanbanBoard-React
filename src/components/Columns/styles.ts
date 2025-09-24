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
`;
