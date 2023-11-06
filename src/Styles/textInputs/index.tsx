import styled from "styled-components";

interface InputInterface {
    $styleString?: any;
    backColor?: string;
    width?: string;
    margin?: string;
    heigth?: string;
    checked?: boolean;
    cursor?: string
    id?: string
}

export const Input = styled("input") <InputInterface>`
    
    background-color: ${props => props.backColor};
    border: none;
    margin: ${props => props.margin};
    outline: none;
    width: ${props => props.width};
    height: ${props => props.height};
	cursor: ${props => props.cursor};
    ${props => props.$styleString};
    ${props => props.id};

`;

export const TextArea = styled("textarea") <InputInterface>`    
    background-color: ${props => props.backColor};
    border: none;
    margin: ${props => props.margin};
    outline: none;
    width: ${props => props.width};
	cursor: ${props => props.cursor};
    ${props => props.$styleString};
    ${props => props.id};

`;
