import React, { useState, useCallback, useEffect } from 'react';
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

const Wrap = styled.form`
  background-color: ${color.white};
  padding: 0.75em 1.25em 0.75em 1.5em;
`;

const Table = styled.table`
  width: 100%;
`;

const Td = styled.td`
  padding: 1em 0;
`;

const TdTitle = styled(Td)`
  width: 15%;
  font-size: 1.25em;
  text-align: center;
  font-family: ${font.kr};
  font-weight: 500;
  text-align: left;
`;

const Span = styled.span`
  color: ${(props) => (props.type ? color.balck : color.red)};
  font-family: ${font.kr};
  font-weight: ${(props) => props.type && 'bold'};
`;

const TdContent = styled(Td)`
  width: 65%;
  padding: 0 0.5em;
  input {
    border: 2px solid ${color.black};
  }
  select {
    border: 2px solid ${color.black};
    font-weight: 500;
    font-size: 1.25em;
  }
  textarea {
    border: 2px solid ${color.black};
  }
`;

const Textarea = styled.textarea`
  min-height: 320px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const PfRegisterCp = ({ onCate, onTitle, onContent, onFile, onSubmit }) => {
  return (
    <Wrapper>
      <Title>포트폴리오 등록</Title>
      <Wrap onSubmit={onSubmit}>
        <Table>
          <tbody>
            <tr>
              <TdTitle>
                분류 <Span>*</Span>
              </TdTitle>
              <TdContent>
                <select
                  name="option"
                  className="form-control"
                  onChange={onCate}
                >
                  <option value="character">character</option>
                  <option value="graphic">graphic</option>
                  <option value="illustration">illustration</option>
                  <option value="package">package</option>
                </select>
              </TdContent>
            </tr>
            <tr>
              <TdTitle>
                제목 <Span>*</Span>
              </TdTitle>
              <TdContent>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  onChange={onTitle}
                />
              </TdContent>
            </tr>
            <tr>
              <TdTitle>
                내용 <Span>*</Span>
              </TdTitle>
              <TdContent>
                <Textarea
                  name="content"
                  className="form-control"
                  onChange={onContent}
                ></Textarea>
              </TdContent>
            </tr>
            <tr>
              <TdTitle>
                첨부파일 <Span>*</Span>
              </TdTitle>
              <td>
                <div className="form-inline ml-2 justify-content-start">
                  <input
                    type="file"
                    name="imgs"
                    className="form-control-file w-50"
                    onChange={onFile}
                  />
                  <label>
                    <Span type="rep">대표 이미지</Span>
                    <input
                      className="ml-2 form-control flex-grow-1"
                      type="checkbox"
                      name="rep"
                    />
                  </label>
                </div>
              </td>
            </tr>
            <tr>
              <TdTitle>
                첨부파일 <Span>*</Span>
              </TdTitle>
              <td>
                <div className="form-inline ml-2 justify-content-start">
                  <input
                    type="file"
                    name="imgs"
                    className="form-control-file w-50"
                    onChange={onFile}
                  />
                  <label>
                    <Span type="rep">대표 이미지</Span>
                    <input
                      className="ml-2 form-control flex-grow-1"
                      type="checkbox"
                      name="rep"
                    />
                  </label>
                </div>
              </td>
            </tr>
            <tr>
              <TdTitle>
                첨부파일 <Span>*</Span>
              </TdTitle>
              <td>
                <div className="form-inline ml-2 justify-content-start">
                  <input
                    type="file"
                    name="imgs"
                    className="form-control-file w-50"
                    onChange={onFile}
                  />
                  <label>
                    <Span type="rep">대표 이미지</Span>
                    <input
                      className="ml-2 form-control flex-grow-1"
                      type="checkbox"
                      name="rep"
                    />
                  </label>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
        <ButtonWrap>
          <button className="btn btn-dark mr-2">포트폴리오 등록</button>
          <button type="reset" className="btn btn-danger">
            다시 작성
          </button>
        </ButtonWrap>
      </Wrap>
    </Wrapper>
  );
};

export default React.memo(PfRegisterCp);
