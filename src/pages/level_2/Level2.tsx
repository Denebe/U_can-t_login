import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../Components/Modal";

const Level_2 = () => {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [work, setWork] = useState<Boolean>(false);

  const [test, setTest] = useState<Boolean>(false);

  const navigate = useNavigate();

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
    setWork(true);

    if (id !== "abcd" || pw !== "1234") {
      setTest(false);
    } else {
      setTest(true);
    }
  };

  const onNext = () => {
    navigate("/level3");
  };

  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

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

export default Level_2;
