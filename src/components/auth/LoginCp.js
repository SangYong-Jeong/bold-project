import React, { useEffect } from 'react';
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

const Wrap = styled.div`
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

const LoginCp = () => {
  // dispatch 할 부분
  const onClick = useEffect(async () => {}, []);

  return (
    <Wrapper>
      <Title>관리자 로그인</Title>
      <Wrap>
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
          <button className="btn btn-dark" onClick={onClick}>
            로그인
          </button>
        </ButtonWrap>
      </Wrap>
    </Wrapper>
  );
};

export default LoginCp;
