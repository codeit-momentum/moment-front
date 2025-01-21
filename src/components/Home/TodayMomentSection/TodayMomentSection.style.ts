import styled from 'styled-components';

export const Container = styled.div`
  width: 325px;
  height: 293px;
  border: 1.5px solid #000;
  background-color: #fff;
  padding: 36px 32px;
  margin: 94px auto 0;
`;

export const Line = styled.div`
  width: 273px;
  height: 1px;
  background-color: #bababa;
  margin: 10px auto;
`;

export const TodayMessage = styled.div`
  width: 260px;
  height: 35px;
  text-align: center;
  color: #000;
  font-size: 20px;
  line-height: 37px;
  margin: 15px auto;

  span {
    color: #c60707;
    font-weight: bold;
  }
`;
