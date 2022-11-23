import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Level_1 = () => {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const [cd, setCd] = useState<string>("");

  const navigate = useNavigate();

  const IdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      navigate("/level2");
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
        <h1 className="text-center font-bold text-8xl">
          U CAN'T <br /> LOGIN
        </h1>
      </div>
      <div className="flex mt-8 justify-center">
        <input
          type="text"
          className="text-center text-4xl border-solid rounded-2xl bg-gray-100"
          placeholder="id를 입력하세요"
          onChange={IdChange}
          onKeyDown={idPress}
          maxLength={25}
          value={id}
        />
      </div>
      <div className="flex mt-8 justify-center">
        <input
          onChange={PwChange}
          className="text-center text-4xl border-solid rounded-2xl bg-gray-100"
          placeholder="pw를 입력하세요"
          value={pw}
          maxLength={25}
        />
      </div>

      <div className="flex mt-8 justify-center">
        <button
          onClick={onClick}
          className="text-center text-slate-100 w-96 h-14 border-solid rounded-2xl bg-black"
        >
          로그인
        </button>
      </div>

      <div className="flex mt-8 justify-center">
        <h1 className="text-center text-slate-900 w-96 h-14 ">U need Help?</h1>
      </div>
      <div className="flex justify-center">
        <button className="text-center text-slate-900 w-96 h-14">?</button>
      </div>
    </div>
  );
};

export default Level_1;
