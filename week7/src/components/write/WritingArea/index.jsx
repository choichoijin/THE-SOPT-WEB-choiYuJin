import axios from "axios";
import React, { useState, useRef } from "react";
import { StyledRoot, WritingForm, SubmitButton, UploadButton } from "./style";

function Write() {
  const formData = new FormData();
  const handleFile = async (e) => {
    const fileList = e.target.files;
    Array.from(fileList).forEach((file) => {
      formData.append("images", file);
    });
  };

  const [newLetter, setNewLetter] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setNewLetter({
      ...newLetter,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //formData.append("data", JSON.stringify(newLetter));
    // formData.append(, info.value);

    Object.entries(newLetter).map((info) => {
      return formData.append(info[0], JSON.stringify(info[1]));
    });

    // const newLetterArr = Object.entries(newLetter).map((info) => {
    //   return newLetterArr;
    // });
    // console.log(newLetterArr);

    for (let key of formData.keys()) {
      console.log(key);
    }

    for (let value of formData.values()) {
      console.log(value);
    }

    //navigate("/", { replace: true });

    await axios
      .post("https://sopt-letter.herokuapp.com/letter", formData, {
        headers: {
          "Content-Type": `multipart/form-data`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  //이미지 업로드 인풋 버튼 접근.
  const imageInput = useRef();

  return (
    <StyledRoot>
      <h1>비밀 편지를 써보세요 📮</h1>
      <WritingForm onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">이름</label>
          <input
            name="title"
            type="text"
            placeholder="이름이 뭐에요?"
            onChange={onChange}
          ></input>
        </div>
        <div>
          <label htmlFor="content">내용</label>
          <input
            name="content"
            type="text"
            placeholder="무슨 내용의 편지를 써볼까요?"
            onChange={onChange}
          ></input>
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            name="password"
            type="text"
            placeholder="비밀번호를 통해 편지를 잠궈보아요."
            onChange={onChange}
          ></input>
        </div>
        <div>
          <label htmlFor="hint">힌트</label>
          <input
            name="hint"
            type="text"
            placeholder="비밀번호 힌트를 써주세요."
            onChange={onChange}
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
            name="image"
            type="file"
            accept="image/png, image/jpg, image/jpeg"
            multiple
            onChange={handleFile}
            ref={imageInput}
            style={{ display: "none" }}
          ></input>
        </div>
        <SubmitButton type="submit">📤 비밀편지 보내기 </SubmitButton>
      </WritingForm>
    </StyledRoot>
  );
}

export default Write;
