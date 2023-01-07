import React, { useRef, useContext } from "react";
import Container from "../UI/Container";
import Input from "../UI/Input";
import Select from "../UI/Select";
import TotalOutput from "../Table/ToplamOutput";
import { MainContext } from "../../context/userdatacontext";

//This is the main form component, which contains the input fields and the TotalOutput component

const InstallmentForm = (props) => {
  const krediInputRef = useRef(); //using useRef to get the value of the input fields
  const taksitInputref = useRef();
  const karInputref = useRef();
  const KKDFInputref = useRef();
  const BSMVInputref = useRef();
  const aralikInputref = useRef();
  const totalRef = useRef();

  const {
    setEnteredAralik, //using useContext to get the values of the input fields
    setEnteredBSMV,
    setEnteredKKDF,
    setEnteredKar,
    setEnteredTaksit,
    setEnteredKredi,
    enteredAralik,
    enteredBSMV,
    enteredKKDF,
    enteredKar,
    enteredTaksit,
    enteredKredi,
  } = useContext(MainContext);

  const handleOpenTotal = () => {
    totalRef.current.openTotal(); //using the ref to open the TotalOutput component
  };

  const krediChangeHandler = (event) => {
    setEnteredKredi(event.target.value);  //using the setEnteredKredi function to set the value of the input field
  };

  const taksitChangeHandler = (event) => {
    setEnteredTaksit(event.target.value); //using the setEnteredTaksit function to set the value of the input field
  };

  const karChangeHandler = (event) => {
    setEnteredKar(event.target.value);  //using the setEnteredKar function to set the value of the input field
  };

  const KKDFChangeHandler = (event) => {
    setEnteredKKDF(event.target.value); //using the setEnteredKKDF function to set the value of the input field
  };

  const BSMVChangeHandler = (event) => {
    setEnteredBSMV(event.target.value); //using the setEnteredBSMV function to set the value of the input field
  };

  const aralikChangeHandler = (event) => {
    setEnteredAralik(event.target.value); //using the setEnteredAralik function to set the value of the input field
  };

  const submitHandler = (event) => {
    event.preventDefault();
    //To check whether the inputs are empty or not, or if they are taken correctly or not
    console.log(enteredKredi);
    console.log(enteredTaksit);
    console.log(enteredKar);
    console.log(enteredKKDF);
    console.log(enteredBSMV);
    console.log(enteredAralik);
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
            <div className="flex flex-wrap -mx-3">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <Input
                  ref={KKDFInputref}
                  label="Vergi Oranı - KKDF"
                  onChange={KKDFChangeHandler}
                />
              </div>
              <Select
                ref={aralikInputref}
                required
                onChange={aralikChangeHandler}
              />
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <Input
                  ref={BSMVInputref}
                  label="Vergi Oranı - BSMV"
                  onChange={BSMVChangeHandler}
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
