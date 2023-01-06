import React, { useContext } from "react";
import "./TableOutput.css";
import { MainContext } from "../../context/userdatacontext";
import { TableContext } from "../../context/tableContext";

const InstallmentTable = (props) => {
  const { enteredBSMV, enteredKKDF, enteredKar, enteredTaksit, enteredKredi } =
    useContext(MainContext);

  var {
    toplam_vade,
    vade_tutari,
  } = useContext(TableContext);

  var tableObject = [];
  var anapara = 0;
  var kalan_anapara = enteredKredi;
  var kar_tutari = 0;
  var KKDF_tutari = 0;
  var BSMV_tutari = 0;

  for (var i = 0; i < enteredTaksit; i++) {
    kar_tutari = kalan_anapara * (enteredKar / 100);
    KKDF_tutari = kar_tutari * (enteredKKDF / 100);
    BSMV_tutari = kar_tutari * (enteredBSMV / 100);
    anapara = vade_tutari - (KKDF_tutari + BSMV_tutari+kar_tutari);
    kalan_anapara = kalan_anapara - anapara;

    tableObject[i] = {
      taksitno: i + 1,
      tTutar: parseFloat(vade_tutari).toFixed(2),
      odenen: parseFloat(anapara).toFixed(2),
      kalan: parseFloat(kalan_anapara).toFixed(2),
      kar: parseFloat(kar_tutari).toFixed(2),
      KKDFvrg: parseFloat(KKDF_tutari).toFixed(2),
      BSMVvrg: parseFloat(BSMV_tutari).toFixed(2),
    };
  }

  if (!props.show) {
    return null;
  }

  return (
    <React.Fragment>
      <div className="backdrop" onClick={props.onConfirm}></div>
      <div className="flex justify-center modal">
        <div className="max-w-3xl  bg-white shadow-md rounded  px-8 pt-6 pb-8 mb-4">
          <table className="table-fixed">
            <thead>
              <tr>
                <th className="w-32 uppercase text-gray-700 text-xs font-bold">
                  Taksit No
                </th>
                <th className="w-32 uppercase text-gray-700 text-xs font-bold">
                  Taksit Tutari
                </th>
                <th className="w-32 uppercase text-gray-700 text-xs font-bold">
                  Ana Para
                </th>
                <th className="w-32 uppercase text-gray-700 text-xs font-bold">
                  Kalan Ana Para
                </th>
                <th className="w-32 uppercase text-gray-700 text-xs font-bold">
                  Kar Tutari
                </th>
                <th className="w-32 uppercase text-gray-700 text-xs font-bold">
                  KKDF
                </th>
                <th className="w-32 uppercase text-gray-700 text-xs font-bold">
                  BSMV
                </th>
              </tr>
            </thead>
            <tbody>
              {tableObject.map((item) => (
                <tr className="text-center">
                  <td>{item.taksitno}</td>
                  <td>{item.tTutar}</td>
                  <td>{item.odenen}</td>
                  <td>{item.kalan}</td>
                  <td>{item.kar}</td>
                  <td>{item.KKDFvrg}</td>
                  <td>{item.BSMVvrg}</td>
                </tr>
              ))}
              {/* {taksitNo.map((number) => (
                <tr>
                  <td>{number}</td>
                  <td>{anapara}</td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default InstallmentTable;
