import styled from 'styled-components';

type Props = {
     isActive: boolean;
};

export const Container = styled.div<Props>`
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     display: ${props => (props.isActive ? 'flex' : 'none')};
     justify-content: center;
     align-items: center;
     z-index: 1;
`;

export const Overlay = styled.div`
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalContent = styled.div`
     position: relative;
     padding: 20px;
     background-color: #fff;
     border-radius: 8px;
`;

export const Label = styled.label`
     display: block;
     margin-bottom: 8px;
`;

export const Input = styled.input`
     width: 100%;
     padding: 8px;
     border: 1px solid #ccc;
     border-radius: 4px;
     margin-bottom: 8px;
`;

export const Select = styled.select`
     width: 100%;
     padding: 8px;
     border: 1px solid #ccc;
     border-radius: 4px;
     margin-bottom: 8px;
`;

export const Button = styled.button`
     padding: 8px 16px;
     background-color: #007bff;
     color: #fff;
     border: none;
     border-radius: 4px;
     margin-top: 8px;
     cursor: pointer;
`;

export const Close = styled.button`
     position: absolute;
     top: 10px;
     right: 10px;
     background-color: transparent;
     border: none;
     font-size: 14px;
     color: #1d1d1d;
     cursor: pointer;
`;
