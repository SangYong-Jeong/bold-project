import React from 'react';
import styled, { color, font } from '../../style';

const Wrapper = styled.div`
  width: 50%;
  margin: auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1.5em;
  font-family: ${font.kr};
  background-color: ${color.grey};
  color: ${color.white};
  padding: 0.625em 0;
`;

const Form = styled.form`
  background-color: ${color.white};
  padding: 2em;
`;

const Table = styled.table`
  width: 100%;
`;

const Td = styled.td`
  padding: 2em 0;
`;

const TdTitle = styled(Td)`
  width: 35%;
  font-size: 1.25em;
  text-align: center;
  font-family: ${font.kr};
  font-weight: 500;
`;

const TdContent = styled(Td)`
  width: 65%;
  padding: 0 1.5em;
  input {
    border: 2px solid ${color.black};
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const RegisterCp = () => {
  return (
    <Wrapper>
      <Title>회원 가입</Title>
      <Form action="">
        <Table>
          <tbody>
            <tr>
              <TdTitle>아이디</TdTitle>
              <TdContent>
                <input type="text" name="userid" className="form-control" />
              </TdContent>
            </tr>
            <tr>
              <TdTitle>비밀번호</TdTitle>
              <TdContent>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                />
              </TdContent>
            </tr>
          </tbody>
        </Table>
        <ButtonWrap>
          <button className="btn btn-primary">회원가입</button>
        </ButtonWrap>
      </Form>
    </Wrapper>
  );
};

export default RegisterCp;
