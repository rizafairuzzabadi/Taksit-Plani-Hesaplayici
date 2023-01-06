import React, { useState } from "react";
import "./App.css";
import InstallmentForm from "./components/Form/InstallmentInput";
import { MainContext } from "./context/userdatacontext";
import InstallmentTable from "./components/Table/TableOutput";
import { TableContext } from "./context/tableContext";

function App() {
  const [enteredKredi, setEnteredKredi] = useState("");
  const [enteredTaksit, setEnteredTaksit] = useState("");
  const [enteredKar, setEnteredKar] = useState("");
  const [enteredKKDV, setEnteredKKDV] = useState("");
  const [enteredBSMV, setEnteredBSMV] = useState("");
  const [enteredAralik, setEnteredAralik] = useState("");

  const anapara = [];
  const kalan_ananapara = [];
  const kar_tutari = [];
  const kkdv_tutari = [];
  const bsmv_tutari = [];



  return (
    <React.Fragment>
      <div className="container mx-auto justify-center">
        <h1 className="text-4xl text-slate-800 drop-shadow-lg text-center font-bold py-5">
          Taksit Planı Hesaplayıcısı
        </h1>
        <MainContext.Provider
          value={{
            enteredKredi,
            enteredTaksit,
            enteredKar,
            enteredKKDV,
            enteredBSMV,
            enteredAralik,
            setEnteredAralik,
            setEnteredBSMV,
            setEnteredKKDV,
            setEnteredKar,
            setEnteredTaksit,
            setEnteredKredi,
          }}
        >
          <TableContext.Provider
            value={{
              anapara,
              kalan_ananapara,
              kar_tutari,
              kkdv_tutari,
              bsmv_tutari,
            }}
          >
            <InstallmentForm />
          </TableContext.Provider>
        </MainContext.Provider>
      </div>
      <InstallmentTable />
    </React.Fragment>
  );
}

export default App;
