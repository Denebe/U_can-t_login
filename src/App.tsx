import React, { useState } from "react";

const App = () => {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const [cd, setCd] = useState<string>("");

  const IdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);

    if (cd === "a") {
      setId(id + "a");
    } else if (cd === "q") {
      setId(id + "q");
    } else {
      setId(e.target.value);
    }
  };
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
    if (e.key === "a") {
      setCd("q");
    } else if (e.key === "q") {
      setCd("a");
    } else {
      setCd("e");
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
