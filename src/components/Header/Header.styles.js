import styled from 'styled-components';

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  //background-color: #f4f1ea;
  background-color: #f9f7f4;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0px;
  font-size: 16px;
  line-height: 50px;
  padding: 0 30px;
  color: #2c2726;

  & a {
    text-decoration: none;
    //color: #382110;
    color: #2c2726;

    &:hover {
      font-weight: bold;
    }
  }
`;
