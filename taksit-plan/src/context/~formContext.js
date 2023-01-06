import React, { useState } from "react";

export const FormContext = React.createContext({
  form: {},
    handleChange: () => {},
    handleSubmit: () => {},
});

function Form(props) {
  const { children, submit = () => {} } = props;
  const [form, setForm] = useState();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submit(form);
  };

  return (
    <form className="max-w-md  bg-white shadow-md rounded  px-8 pt-6 pb-8 mb-4">
      <FormContext.Provider value={{ form, handleChange, handleSubmit }}>
        {children}
      </FormContext.Provider>

      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 grid place-items-center">
        <button
          className="bg-slate-800 hover:bg-blue-700 text-white font-bold rounded py-3 px-14 mb-3 mt-5"
          type="submit"
        >
          Hesapla
        </button>
      </div>
    </form>
  );
}

export default Form;
