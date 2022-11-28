import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../Components/Modal";

const Level_1 = () => {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const [work, setWork] = useState<Boolean>(false);

  const [test, setTest] = useState<Boolean>(false);

  const [cd, setCd] = useState<string>("");

  const area = document.getElementById("area1") as HTMLDivElement | null;

  const navigate = useNavigate();

  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

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
    setWork(true);
    if (id === "blue" || id === "red") {
      if (area !== null) {
        area.style.backgroundColor = id;
      }
    } else if (id !== "abcd" || pw !== "1234") {
      setTest(false);
    } else {
      setTest(true);
    }
  };

  const onNext = () => {
    navigate("/level2");
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
    <div id="area1" className="m-auto w-full mt-4">
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

      {work ? (
        <div className="flex mt-8 justify-center">
          {test ? (
            <div>
              <h1 className="text-center font-bold text-4xl text-blue-500">
                Success
              </h1>
              <button
                onClick={onNext}
                className="flex mt-3 m-auto text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-blue-800"
              >
                다음 단계
              </button>
            </div>
          ) : (
            <h1 className="text-center font-bold text-4xl text-red-500">
              Fail
            </h1>
          )}
        </div>
      ) : (
        ""
      )}
      {isOpenModal && (
        <Modal onClickToggleModal={onClickToggleModal}>
          ID : abcd <br />
          PW : 1234
        </Modal>
      )}

      <div className="flex mt-8 justify-center">
        <h1 className="text-center text-slate-900 w-96 h-14 ">U need Help?</h1>
      </div>
      <div className="flex justify-center">
        <button
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={onClickToggleModal}
        >
          ?
        </button>
      </div>
    </div>
  );
};

export default Level_1;
