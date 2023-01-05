import React from "react";
import Container from "../UI/Container";
import Input from "../UI/Input";
import Select from "../UI/Select";

const InstallmentForm = (props) => {
  return (
    <Container>
      <div className="flex justify-center">
        <form className="max-w-md  bg-white shadow-md rounded  px-8 pt-6 pb-8 mb-4">
          <div class="flex flex-wrap -mx-3 mb-6 mt-2">
            <div className="w-full px-3">
              <Input label="Kredi Tutari / Ana Para" />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <Input label="Taksit Sayısı" />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <Input label="Kar Oranı" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <Input label="Vergi Oranı - KKDV" />
            </div>
            <Select />
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <Input label="Vergi Oranı - BSMV" />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 grid place-items-center">
              <button className="bg-slate-800 hover:bg-blue-700 text-white font-bold rounded py-3 px-14 mb-3 mt-5" type="submit">
                Hesapla
              </button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default InstallmentForm;
