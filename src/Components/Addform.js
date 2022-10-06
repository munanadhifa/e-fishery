import React, { useState } from "react";

const AddListForm = (props) => {
  const initialFormState = {
    id: null,
    komoditas: "",
    provinsi: "",
    kota: "",
    size: "",
    price: "",
  };
  const [list, setList] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { komoditas, value } = e.target;
    console.log(e.target);
    setList({ ...list, [komoditas]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!list.komoditas || !list.provinsi) return;

        props.addUser(list);
        setList(initialFormState);
      }}
    >
      <label className="block text-sm font-medium text-gray-700">
        Komoditas
      </label>
      <input
        type="text"
        name="name"
        className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        value={list.komoditas}
        onChange={handleInputChange}
      />
      <label className="block text-sm font-medium text-gray-700">
        Provinsi
      </label>
      <input
        type="text"
        name="username"
        value={list.provinsi}
        onChange={handleInputChange}
        className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
      <button>Add new user</button>
    </form>
  );
};

export default AddListForm;
