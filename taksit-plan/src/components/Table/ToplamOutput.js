import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useContext,
} from "react";
import Container from "../UI/Container";
import { MainContext } from "../../context/userdatacontext";
import InstallmentTable from "./TableOutput";
import { TableContext } from "../../context/tableContext";

//This component is the one that calculates the total amount of the loan and the installment amount monthly, 
//and shows itself when the user clicks the "Hesapla" button

const TotalOutput = (props, ref) => {
  const [totalState, setTotalState] = useState(false);
  const [modal, setModal] = useState(false);
  const { enteredKredi, enteredKar, enteredBSMV, enteredKKDF, enteredTaksit } =
    useContext(MainContext);
  const { setToplamVade, setVadeTutari, setToplamKKDF, setToplamBSMV } =
    useContext(TableContext);

  const faiz = enteredKar / 100;  //percentage, divided by 100
  const onetopower = Math.pow(1 + faiz, enteredTaksit); //particulary to calculate the power of 1+faiz

  var VadeTutar = enteredKredi * ((faiz * onetopower) / (onetopower - 1));  //formula to calculate the installment amount monthly. Not perfect
  var ToplamVadeTutar = VadeTutar * enteredTaksit; //total amount of the loan

  var tahmini_kar = ToplamVadeTutar - enteredKredi;   // tahmini, as it is calculated simply by subtracting the total amount of the loan from the amount of the loan
  var tahmini_kkdf = tahmini_kar * (enteredKKDF / 100); //and it could've been more precise
  var tahmini_bsmv = tahmini_kar * (enteredBSMV / 100);
  setToplamKKDF(tahmini_kkdf);  //setting the values to the context
  setToplamBSMV(tahmini_bsmv);  

  var toplam_vergi = tahmini_kkdf + tahmini_bsmv; //total tax
  console.log("toplam_vergi: ", toplam_vergi);

  setToplamVade(ToplamVadeTutar);
  setVadeTutari(VadeTutar);
  ToplamVadeTutar = parseFloat(ToplamVadeTutar).toFixed(2); //parsefloat to convert the string so it can be showned with toFixed(2) to show 2 decimal places
  VadeTutar = parseFloat(VadeTutar).toFixed(2);
  toplam_vergi = parseFloat(toplam_vergi).toFixed(2);

  useImperativeHandle(ref, () => ({ //useImperativeHandle is used to pass the function to the parent component
    openTotal: () => {  
      setTotalState(true);  //setting the state to true to show the total output
    },
  }));

  if (!totalState) {
    return null;  //if the state is false, it will return null
  }

  const modalHandler = () => {
    setModal(null); //setting the state to null to close the modal
  };

  return (
    <React.Fragment>
      <Container>
        <div className="flex justify-center">
          <div className="max-w-sm  bg-white shadow-md rounded  px-8 pt-6 pb-8 mb-4">
            <div className="flex flex-wrap -mx-3 mb-6 mt-1">
              <div className="w-full px-3 text-center">
                <p className="block uppercase text-gray-700 text-xs font-bold">
                  Toplam Geri Ödeme Tutarı
                </p>
                <p className="text-lg mb-4"> {ToplamVadeTutar} TL</p>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0 text-end">
                <p className="block uppercase text-gray-700 text-xs font-bold">
                  Aylık Taksit
                </p>
                <p className="text-lg"> {VadeTutar} TL</p>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                <p className="block uppercase text-gray-700 text-xs font-bold ">
                  Toplam Vergi
                </p>
                <p className="text-lg"> {toplam_vergi} TL</p>
              </div>
            </div>
            <div className="text-center">
              <button
                className="bg-slate-800 hover:bg-blue-700 text-white font-bold rounded py-3 px-5 "
                // onClick={() => setTotalState(false)}
                onClick={() => setModal(true)}
              >
                Tabloyu Göster
              </button>
            </div>
          </div>
        </div>
      </Container>
      <InstallmentTable onConfirm={modalHandler} show={modal} />
    </React.Fragment>
  );
};
export default forwardRef(TotalOutput);
