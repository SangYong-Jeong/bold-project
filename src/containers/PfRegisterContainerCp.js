import React, { useCallback, useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PfRegisterCp from '../components/portfolio-item/PfRegisterCp';
import createRegisterThunk from '../lib/createRegisterThunk';
import * as api from '../lib/api';

const PfRegisterContainerCp = () => {
  const [cate, setCate] = useState('character');
  const [rep, setRep] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState([]);

  const dispatch = useDispatch();

  const RegisterThunk = createRegisterThunk(cate, api[cate]);

  const onCate = useCallback((e) => {
    setCate(e.target.value);
  }, []);

  const onTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const onContent = useCallback((e) => {
    setContent(e.target.value);
  }, []);

  const onFile = useCallback(
    (e) => {
      if (e.target.files[0]) {
        e.target.files[0].input = e.target.name;
        console.log(files);
        console.log([...files, e.target.files[0]]);
        setFiles([...files, e.target.files[0]]);
      } else {
        const newFiles = files.filter((file) => file.input !== e.target.name);
        setFiles(newFiles);
      }
    },
    [files]
  );

  const onRep = useCallback((e) => {
    setRep(e.target.checked);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      formData.append('rep', rep);
      if (files.length) {
        for (let i = 0; i < files.length; i++) {
          formData.append('imgs', files[i]);
        }
      }
      const config = {
        header: { 'content-type': 'multipart/form-data' },
        withCredentials: true,
      };
      dispatch(RegisterThunk(formData, config));
      // config 넣어주어야 한다. (axios 들어가야 함) -> 카테는 앞에 path로 뺄 예정임 -> 따로 api 짜고 필요- > 리덕스 모듈 짜고 이 쪽 다시 손보기
    },
    [title, content, files, rep, dispatch, RegisterThunk]
  );

  return (
    <PfRegisterCp
      onCate={onCate}
      onTitle={onTitle}
      onContent={onContent}
      onFile={onFile}
      onSubmit={onSubmit}
      onRep={onRep}
    />
  );
};

export default React.memo(PfRegisterContainerCp);
