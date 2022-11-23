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
        <h1 className="text-center font-bold text-8xl">
          U CAN'T <br /> LOGIN
        </h1>
      </div>
      <div className="flex mt-8 justify-center">
        <input
          className="text-center text-4xl border-solid rounded-2xl bg-gray-100"
          placeholder="ID"
          onChange={IdChange}
          value={id}
        />
      </div>
      <div className="flex mt-8 justify-center">
        <input
          onChange={PwChange}
          className="text-center text-4xl border-solid rounded-2xl bg-gray-100"
          placeholder="PASSWORD"
          value={pw}
        />
      </div>

      <div className="flex mt-8 justify-center">
        <button
          onMouseOver={onOver}
          onMouseOut={onOver}
          onClick={onClick}
          className="text-center text-slate-100 w-96 h-14 border-solid rounded-2xl bg-black"
        >
          Login
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

export default Level_2;
