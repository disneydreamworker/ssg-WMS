import styled from "@emotion/styled";
import theme from "../../styles/theme";

// 전체 컨테이너
// export const Container = styled.div`
//   display: flex;
//   flex-derection: colum;
//   margin: auto;
//   width: 900px;
//   height: 500px;
//   background-color: white;
//   border-radius: 20px;
//   aligen-items: center;
//   box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
//   border: ${theme.borders.greyBorder} !important;
// `;

// // 왼쪽 패널
// export const LeftPanel = styled.div`  
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border-top-left-radius: 8px;
//   border-bottom-left-radius: 8px;
//   border: ${theme.borders.greyBorder} !important;
// `;

// export const TitleText = styled.h2`
//   font-size: 24px;
//   color: #3b5ddd;
//   margin-bottom: 10px;
// `;

// export const SubtitleText = styled.p`
//   font-size: 14px;
//   color: #555;
// `;

// // 오른쪽 패널
// export const RightPanel = styled.div`
//   flex: 1;
//   padding: 40px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border-top-right-radius: 8px;
//   border-bottom-right-radius: 8px;
// `;

// export const Logo = styled.img`
//   width: 60px;
//   margin-bottom: 20px;
// `;

// export const InputWrapper = styled.div`
//   width: 80%;
//   margin-bottom: 15px;
// `;

// export const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   border-radius: 15px;
//   border: 1px solid #ddd;
//   font-size: 14px;
// `;

// export const ErrorText = styled.span`
//   color: red;
//   font-size: 12px;
// `;

// export const ButtonWrapper = styled.div`
//   width: 100%;

// `;

// export const LoginButton = styled.button`
//   width: 100%;
//   padding: 10px;
//   background-color: #3b5ddd;
//   color: white;
//   font-size: 16px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color: #2e48a4;
//   }
// `;


export const Wrapper = styled.div`
  width: 600px;
  /* height: 1847px; */
  margin: 20px 400px;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;


  @media screen and (max-width: 767px) {
    /*모바일 */
    width: 600px;
    margin: 20px;
    padding-top: 60px;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 60px;
  }
`;

export const Title = styled.div`
  width: 100%;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  font-weight: bold;

  @media screen and (max-width: 767px) {
    /*모바일 */
    font-size: 20px;
  }
`;

export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;

  @media screen and (max-width: 767px) {
    /*모바일 */
    font-size: 10px;
  }
`;

export const InputWrapper = styled.div`
  padding-top: 40px;
  
  @media screen and (max-width: 767px) {
    /*모바일 */
    padding-top: 20px;
  }
`;

export const Input = styled.input`
    width: 300px;
    height: 32px;
    font-size: 15px;
    border: 0;
    border-radius: 10px;
    outline: none;
    padding-left:15px;
    background-color: rgb(233,233,233);

  @media screen and (max-width: 767px) {
    /*모바일 */
    width: 600px;
    height: 30px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 60px;
  @media screen and (max-width: 767px) {
    /*모바일 */
    padding-top: 20px;
  }
`;

export const CancelButton = styled.button`
  width: 140px;
  height: 40px;
  background-color: #ced4da;
  border: 0;
  border-radius: 15px;
  font-size: 16px;
  font-weight: 500;
  margin-left: 3px;
  margin-right: 12px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 140px;
  height: 40px;
  font-size: 15px;
  font-weight: 500;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 5px;
  background-color: #fab005;
  cursor: pointer;
`;

export const Error = styled.div`
  font-size: 10px;
  color: red;
  @media screen and (max-width: 767px) {
    /*모바일 */
    font-size: 8px;
  }
`;
