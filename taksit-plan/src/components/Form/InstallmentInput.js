import React, { useState, useRef, useContext } from "react";
import Container from "../UI/Container";
import Input from "../UI/Input";
import Select from "../UI/Select";
import TotalOutput from "../Table/ToplamOutput";
import { MainContext } from "../../context/userdatacontext";
import InstallmentTable from "../Table/TableOutput";

const InstallmentForm = (props) => {
  const krediInputRef = useRef();
  const taksitInputref = useRef();
  const karInputref = useRef();
  const kkdvInputref = useRef();
  const bsmvInputref = useRef();
  const aralikInputref = useRef();
  const totalRef = useRef();

  const {
    setEnteredAralik,
    setEnteredBSMV,
    setEnteredKKDV,
    setEnteredKar,
    setEnteredTaksit,
    setEnteredKredi,
    enteredAralik,
    enteredBSMV,
    enteredKKDV,
    enteredKar,
    enteredTaksit,
    enteredKredi,
  } = useContext(MainContext);

  const handleOpenTotal = () => {
    totalRef.current.openTotal();
  };

  const krediChangeHandler = (event) => {
    setEnteredKredi(event.target.value);
  };

  const taksitChangeHandler = (event) => {
    setEnteredTaksit(event.target.value);
  };

  const karChangeHandler = (event) => {
    setEnteredKar(event.target.value);
  };

  const kkdvChangeHandler = (event) => {
    setEnteredKKDV(event.target.value);
  };

  const bsmvChangeHandler = (event) => {
    setEnteredBSMV(event.target.value);
  };

  const aralikChangeHandler = (event) => {
    setEnteredAralik(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredKredi);
    console.log(enteredTaksit);
    console.log(enteredKar);
    console.log(enteredKKDV);
    console.log(enteredBSMV);
    console.log(enteredAralik);

    // krediInputRef.current = enteredKredi;
    // taksitInputref.current = enteredTaksit;
    // karInputref.current = enteredKar;
    // kkdvInputref.current = enteredKKDV;
    // bsmvInputref.current = enteredBSMV;
  };

  return (
    <React.Fragment>
      <Container>
        <div className="flex justify-center">
          <form
            className="max-w-md  bg-white shadow-md rounded  px-8 pt-6 pb-8 mb-4"
            onSubmit={submitHandler}
          >
            <div className="flex flex-wrap -mx-3 mb-6 mt-2">
              <div className="w-full px-3">
                <Input
                  ref={krediInputRef}
                  label="Kredi Tutari / Ana Para"
                  onChange={krediChangeHandler}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <Input
                  ref={taksitInputref}
                  label="Taksit Sayısı"
                  onChange={taksitChangeHandler}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <Input
                  ref={karInputref}
                  label="Kar Oranı"
                  onChange={karChangeHandler}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <Input
                  ref={kkdvInputref}
                  label="Vergi Oranı - KKDV"
                  onChange={kkdvChangeHandler}
                />
              </div>
              <Select
                ref={aralikInputref}
                required
                onChange={aralikChangeHandler}
              />
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <Input
                  ref={bsmvInputref}
                  label="Vergi Oranı - BSMV"
                  onChange={bsmvChangeHandler}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 grid place-items-center">
                <button
                  className="bg-slate-800 hover:bg-blue-700 text-white font-bold rounded py-3 px-14 mb-3 mt-5"
                  type="submit"
                  onClick={handleOpenTotal}
                >
                  Hesapla
                </button>
              </div>
            </div>
          </form>
        </div>
        <TotalOutput ref={totalRef} />
      </Container>

    </React.Fragment>
  );
};

export default InstallmentForm;
