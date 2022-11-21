import React, { useState } from "react";

const App = () => {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const [cd, setCd] = useState<string>("");

  const IdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (cd === "a") {
      console.log(e.target.value);
      setId("b");
    } else if (cd === "q") {
      setId("a");
    } else {
      setId(e.target.value);
    }
  };
  console.log(String.fromCharCode(65));
  const PwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (id !== "abcd" || pw !== "1234") {
      console.log(id, pw);
      alert("id 또는 pw가 틀렸습니다");
    } else {
      alert("로그인 성공!");
    }
  };

  const idPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //setCd(e.which);
  };

  return (
    <div className="w-full mt-4">
      <div className="flex justify-center">
        <h1>ID: abcd, PW: 1234 ID와 PW는 항상 고정입니다. </h1>
      </div>
      <div className="flex mt-8 justify-center">
        <input
          className="border-4"
          onChange={IdChange}
          placeholder="id를 입력하세요"
          onKeyDown={idPress}
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
        <button onClick={onClick} className="bg-green-300 w-1/2">
          로그인
        </button>
      </div>
    </div>
  );
};

export default App;
