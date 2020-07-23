import styled from "styled-components";

export const UserContainer = styled.div`
  cursor: pointer;
  padding: 15px;
  margin: 10px;
  background: #f5f5f5;
  border-radius: 2px;
`;

export const UserName = styled.div`
  font-size: 21px;
  font-weight: 600;
  line-height: 1.25;
  color: #171f46;
  align-self: center;
  flex: 1;
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const UsersContainer = styled.div`
  flex: 1;
  flex-direction: column;
  align-items: center;
`;
