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
  width: 20%;
  font-size: 1.25em;
  text-align: center;
  font-family: ${font.kr};
  font-weight: 500;
  text-align: left;
`;

const Span = styled.span`
  color: red;
`;

const TdContent = styled(Td)`
  width: 65%;
  padding: 0 0.5em;
  input {
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

const PfRegisterCp = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState(null);

  const onTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const onContent = useCallback((e) => {
    setContent(e.target.value);
  }, []);

  const onFile = useCallback((e) => {
    setFiles(e.target.files);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      for (let i = 0; i < files.length; i++) {
        formData.append('imgs', files[i], files[i].name);
      }
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };
      console.log(formData.get('title'));
      console.log(formData.get('content'));
      console.log(formData.getAll('imgs'));
      // config 넣어주어야 한다. (axios 들어가야 함)
    },
    [title, content, files]
  );

  return (
    <Wrapper>
      <Title>포트폴리오 등록</Title>
      <Wrap onSubmit={onSubmit}>
        <Table>
          <tbody>
            <tr>
              <TdTitle>
                제목 <Span>*</Span>
              </TdTitle>
              <TdContent>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  value={title}
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
                  value={content}
                ></Textarea>
              </TdContent>
            </tr>
            <tr>
              <TdTitle>
                첨부파일 <Span>*</Span>
              </TdTitle>
              <td>
                <input
                  multiple
                  type="file"
                  name="imgs"
                  className="form-control-file"
                  onChange={onFile}
                />
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
