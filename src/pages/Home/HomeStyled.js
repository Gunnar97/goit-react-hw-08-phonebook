import { styled } from 'styled-components';

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  height: 92vh;
`;

export const StyledHeading = styled.h1`
  padding-right: 25px;
  padding-top: 12px;
  padding-bottom: 14px;
  text-align: end;
  background: whitesmoke;
  border-radius: 24px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;
export const StyledText = styled.h3`
  padding-right: 25px;
  padding-top: 12px;
  padding-bottom: 14px;
  display: block;
  max-width: 500px;
  text-align: end;
  color: black;
  background: whitesmoke;
  border-radius: 24px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;
export const StyledBlurWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  background: url('https://thumbs.dreamstime.com/z/%D1%81%D1%82%D1%80%D0%BE%D0%BA%D0%B0-%D0%B0%D0%B4%D1%80%D0%B5%D1%81%D0%BD%D0%B0%D1%8F-%D0%BA%D0%BD%D0%B8%D0%B3%D0%B0-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9-%D0%B1%D0%B5%D1%81%D1%88%D0%BE%D0%B2%D0%BD%D1%8B%D0%B9-%D1%83%D0%B7%D0%BE%D1%80-%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9-%D1%84%D0%BE%D0%BD-228516357.jpg?w=2048')
    center/cover no-repeat;
`;
