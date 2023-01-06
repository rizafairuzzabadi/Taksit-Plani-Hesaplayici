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
  const [enteredKKDF, setEnteredKKDF] = useState("15");
  const [enteredBSMV, setEnteredBSMV] = useState("5");
  const [enteredAralik, setEnteredAralik] = useState("");

  const [toplam_vade, setToplamVade] = useState(0);
  const [vade_tutari, setVadeTutari] = useState(0);
  const [toplam_KKDF, setToplamKKDF] = useState(0);
  const [toplam_BSMV, setToplamBSMV] = useState(0);

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
            enteredKKDF,
            enteredBSMV,
            enteredAralik,
            setEnteredAralik,
            setEnteredBSMV,
            setEnteredKKDF,
            setEnteredKar,
            setEnteredTaksit,
            setEnteredKredi,
          }}
        >
          <TableContext.Provider
            value={{
              toplam_vade,
              vade_tutari,
              toplam_KKDF,
              toplam_BSMV,
              setToplamVade,
              setVadeTutari,
              setToplamKKDF,
              setToplamBSMV,
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
