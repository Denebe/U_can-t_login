import React, { useState } from "react";

const Level_2 = () => {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const IdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const PwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const onOver = (e: React.MouseEvent<HTMLButtonElement>) => {
    setId(id.split("").reverse().join(""));
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (id !== "abcd" || pw !== "1234") {
      console.log(id, pw);
      alert("id 또는 pw가 틀렸습니다");
    } else {
      alert("로그인 성공!");
    }
  };

  return (
    <div className="w-full mt-4">
      <div className="flex justify-center">
        <h1>ID: abcd, PW: 1234 ID와 PW는 항상 고정입니다. </h1>
      </div>
      <div className="flex mt-8 justify-center">
        <input
          className="border-4"
          placeholder="id를 입력하세요"
          onChange={IdChange}
          value={id}
        />
      </div>
      <div className="flex mt-8 justify-center">
        <input
          onChange={PwChange}
          className="border-4"
          placeholder="pw를 입력하세요"
          value={pw}
        />
      </div>

      <div className="flex mt-8 justify-center">
        <button
          onMouseOver={onOver}
          onClick={onClick}
          className="bg-green-300 w-1/2 h-10"
        >
          로그인
        </button>
      </div>
    </div>
  );
};

export default Level_2;
