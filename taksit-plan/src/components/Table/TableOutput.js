import React, { useContext, forwardRef } from "react";
import "./TableOutput.css";
import { MainContext } from "../../context/userdatacontext";
import { TableContext } from "../../context/tableContext";

//This is the table pop up / modal component. It shows the table when the user clicks the "Tabloyu Göster" button

const InstallmentTable = (props, ref) => {
  const {
    enteredBSMV,
    enteredKKDF,
    enteredKar,
    enteredTaksit,
    enteredKredi,
    enteredAralik,
  } = useContext(MainContext);  //getting the values from the context

  const { vade_tutari } = useContext(TableContext); //getting the values from the context

  var tableObject = []; //creating an array of objects to store the values to then iterate within the table
  var anapara = 0;  //principal
  var kalan_anapara = enteredKredi; //remaining principal
  var kar_tutari = 0; //profit amount
  var KKDF_tutari = 0;  //KKDF amount
  var BSMV_tutari = 0;  //BSMV amount

  for (var i = 0; i < enteredTaksit; i++) {
    if (enteredAralik === "Aylik") {  //if the user selected monthly, then the profit amount is calculated as follows
      kar_tutari = (kalan_anapara / 100) * (enteredKar / 12) * enteredTaksit; 
    } else if (enteredAralik === "Yillik") {  //if the user selected yearly, then the profit amount is calculated as follows
      kar_tutari = (kalan_anapara / 100) * enteredKar * enteredTaksit;
    } else if (enteredAralik === "Haftalik") {  //if the user selected weekly, then the profit amount is calculated as follows
      kar_tutari = (kalan_anapara / 100) * (enteredKar / 52) * enteredTaksit;
    }
    KKDF_tutari = kar_tutari * (enteredKKDF / 100); //KKDF amount is calculated as follows
    BSMV_tutari = kar_tutari * (enteredBSMV / 100); //BSMV amount is calculated as follows

    anapara = vade_tutari - (kar_tutari + KKDF_tutari + BSMV_tutari); //principal is calculated as follows
    kalan_anapara = kalan_anapara - anapara;  //remaining principal is calculated as follows

    tableObject[i] = {  //putting the values to the objects array
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
    return null;  //if the user clicks outside the modal, it will close
  }

  return (
    <React.Fragment>
      <div className="backdrop" onClick={props.onConfirm}></div>
      <div className="flex justify-center modal">
        <div className="max-w-3xl  bg-white shadow-md rounded  px-4 pt-6 pb-8 mb-4">
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
                  <td>{item.tTutar} TL</td>
                  <td>{item.odenen} TL</td>
                  <td>{item.kalan} TL</td>
                  <td>{item.kar}</td>
                  <td>{item.KKDFvrg}</td>
                  <td>{item.BSMVvrg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default forwardRef(InstallmentTable);
