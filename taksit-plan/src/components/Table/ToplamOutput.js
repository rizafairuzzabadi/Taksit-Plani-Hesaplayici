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

const TotalOutput = (props, ref) => {
  const [totalState, setTotalState] = useState(false);
  const [modal, setModal] = useState(false);
  const { enteredKredi, enteredBSMV, enteredKKDF, enteredKar, enteredTaksit } =
    useContext(MainContext);
  var {
    toplam_KKDF,
    toplam_BSMV,
    setToplamVade,
    setVadeTutari,
    setToplamKKDF,
    setToplamBSMV,
  } = useContext(TableContext);

  const faiz = enteredKar / 100;
  const onetopower = Math.pow(1 + faiz, enteredTaksit);

  console.log("faiz: ", faiz);

  var VadeTutar = enteredKredi * ((faiz * onetopower) / (onetopower - 1));
  var ToplamVadeTutar = VadeTutar * enteredTaksit;

  var tahmini_kar = ToplamVadeTutar - enteredKredi;
  setToplamKKDF(tahmini_kar * (enteredKKDF / 100));
  setToplamBSMV(tahmini_kar * (enteredBSMV / 100));
  var toplam_vergi = toplam_KKDF + toplam_BSMV;
  ToplamVadeTutar = ToplamVadeTutar + toplam_vergi;
  VadeTutar = ToplamVadeTutar / enteredTaksit;
  ToplamVadeTutar = parseFloat(ToplamVadeTutar).toFixed(2);
  VadeTutar = parseFloat(VadeTutar).toFixed(2);
  toplam_vergi = parseFloat(toplam_vergi).toFixed(2);

  setToplamVade(ToplamVadeTutar);
  setVadeTutari(VadeTutar);

  useImperativeHandle(ref, () => ({
    openTotal: () => {
      setTotalState(true);
    },
  }));

  if (!totalState) {
    return null;
  }

  const modalHandler = () => {
    setModal(null);
  };

  return (
    <React.Fragment>
      <Container>
        <div className="flex justify-center">
          <div className="max-w-md  bg-white shadow-md rounded  px-8 pt-6 pb-8 mb-4">
            <div className="flex flex-wrap -mx-3 mb-6 mt-2">
              <div className="w-full px-3 text-center">
                <p className="block uppercase text-gray-700 text-xs font-bold">
                  Toplam Geri Ödeme Tutarı
                </p>
                <p className="text-lg mb-4"> {ToplamVadeTutar}</p>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0 text-end">
                <p className="block uppercase text-gray-700 text-xs font-bold">
                  Aylık Taksit
                </p>
                <p className="text-lg"> {VadeTutar}</p>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                <p className="block uppercase text-gray-700 text-xs font-bold ">
                  Toplam Vergi
                </p>
                <p className="text-lg"> {toplam_vergi}</p>
              </div>
            </div>
            <div className="text-center">
              <button
                className="bg-slate-800 hover:bg-blue-700 text-white font-bold rounded py-3 px-5 mb-3"
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
