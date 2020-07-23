import styled from "styled-components";

export const ModalContainer = styled.div``;

export const OverLayContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.65);
`;

export const ContentContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
  overflow: auto;
  text-align: center;
  padding: 4px;
  cursor: pointer;
  &:after {
    vertical-align: middle;
    display: inline-block;
    height: 100%;
    margin-left: -0.05em;
    content: "";
  }
`;

export const DialogContainer = styled.div`
  position: relative;
  background: linear-gradient(to right, red, purple);
  outline: 0;
  width: auto;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  max-width: auto;
  cursor: default;
  border-radius: 4px;
  background-color: white;
  padding: 5px;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 13px;
  cursor: pointer;
`;

export const ChildrenContainer = styled.div`
  padding: 5px;
  width: 80vh;
  max-height: 80vh;
  height: auto;
  overflow: auto;
  background: white;
`;
