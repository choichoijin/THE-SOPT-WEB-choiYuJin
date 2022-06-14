//import axios from "axios";
import React, { useRef } from "react";
import { StyledRoot, WritingForm, SubmitButton, UploadButton } from "./style";

function Write() {
  const handleFile = async (e) => {
    const fileList = e.target.files;

    const formData = new FormData();
    Array.from(fileList).forEach((file) => {
      formData.append("image", file);
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const data = {
  //     headers: {
  //       "content-type": "multipart/form-data",
  //     },
  //   };
  //   axios.post("", formData, data);
  // };

  //이미지 업로드 인풋 버튼 접근.
  const imageInput = useRef();

  return (
    <StyledRoot>
      <h1>비밀 편지를 써보세요 📮</h1>
      <WritingForm>
        <div>
          <label htmlFor="name">이름</label>
          <input id="name" type="text" placeholder="이름이 뭐에요?"></input>
        </div>
        <div>
          <label htmlFor="content">내용</label>
          <input
            id="content"
            type="text"
            placeholder="무슨 내용의 편지를 써볼까요?"
          ></input>
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="text"
            placeholder="비밀번호를 통해 편지를 잠궈보아요."
          ></input>
        </div>
        <div>
          <label htmlFor="hint">힌트</label>
          <input
            id="hint"
            type="text"
            placeholder="비밀번호 힌트를 써주세요."
          ></input>
        </div>
        <div>
          <label htmlFor="image">이미지</label>
          <UploadButton
            htmlFor="image"
            onClick={(e) => {
              //preventDefault를 해주는 이유는 뭘까?
              e.preventDefault();
              imageInput.current.click();
            }}
          >
            이미지 업로드 (jpg, jpeg, png)
          </UploadButton>
          <input
            id="image"
            type="file"
            accept="image/png, image/jpg, image/jpeg"
            multiple
            onChange={handleFile}
            ref={imageInput}
            style={{ display: "none" }}
          ></input>
        </div>
        <SubmitButton type="submit">비밀편지 보내기</SubmitButton>
      </WritingForm>
    </StyledRoot>
  );
}

export default Write;
