import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 15px;
  text-align: left;
  padding: 10px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  >li {
    &::before{
        content: " ";
        border-radius: 50%;
        width: 10px;
        height: 10px;
        margin: auto 0;
        background-color: yellowgreen;
        text-align: center;
        float: center;
    }
    display: flex;
    justify-content: space-between;
  }
`;
