import styled from "styled-components";

export const Video = styled.video`
    width: 100%;
    height: calc(100% - 80px);
    object-fit: cover;
`;

export const CaptureButton = styled.button`
    position: fixed;
    bottom: 10px;
    left: calc(50% - 40px); //assuming your button is 80x80
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: red;
    border: none;
    outline: none;
`;