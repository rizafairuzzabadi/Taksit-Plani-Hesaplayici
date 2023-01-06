import React, { useContext } from "react";
import Container from "../UI/Container";
import "./TableOutput.css";
import { MainContext } from "../../context/userdatacontext";
import { TableContext } from "../../context/tableContext";

const InstallmentTable = (props) => {
  const {
    enteredKredi,
    enteredAralik,
    enteredBSMV,
    enteredKKDV,
    enteredKar,
    enteredTaksit,
  } = useContext(MainContext);

  const { anapara, kalan_ananapara, kar_tutari, kkdv_tutari, bsmv_tutari } =
    useContext(TableContext);

  const taksitNo = new Array(enteredTaksit).fill(0).map((_, i) => i + 1);

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
              {taksitNo.map((number) => (
                <tr>
                    <td>{number}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default InstallmentTable;
