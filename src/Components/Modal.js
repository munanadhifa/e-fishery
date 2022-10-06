import { useEffect, useState } from "react";
import { PlusIcon, XMarkIcon } from "@heroicons/react/20/solid";
import "./style.scss";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [area, setArea] = useState([]);
  const [cities, setCities] = useState();

  const fetchUserData = () => {
    fetch(
      "https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/option_size"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  const fetchAreaData = () => {
    fetch(
      "https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/option_area"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArea(data);
      });
  };

  const onChangeComboBox = (e) => {
    const selectedId = e.target.value;
    console.log(selectedId);
    const selectedProvince = area.filter((user) => user.id === selectedId)[0];
    setCities(selectedProvince);
  };

  useEffect(() => {
    fetchUserData();
    fetchAreaData();
    setCities(area[1]);
  }, [area]);

  return (
    <>
      <div className="flex items-center justify-center modal">
        <button
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          type="button"
          onClick={() => setShowModal(true)}
        >
          <PlusIcon className="h-5 w-5 mr-2" aria-hidden="true" />
          Add Data
        </button>
      </div>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                <div className="flex header-modal">
                  <h1>Add Template</h1>
                  <XMarkIcon
                    className="h-5 w-5 mr-2 m-auto"
                    aria-hidden="true"
                    onClick={() => setShowModal(false)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label
                      htmlFor="text"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Komoditas
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="text"
                        id="komoditas"
                        className="p-2 text-gray-500 w-full h-10 border rounded-md outline-none focus:bg-white focus:border-indigo-60"
                        placeholder="Komoditas"
                      />
                    </div>
                  </div>
                  <div className="form-provinsi">
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Provinsi
                    </label>
                    <select
                      id="location"
                      name="location"
                      className="mt-1 block w-full rounded-md border py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      value={cities?.id}
                      onChange={(e) => {
                        onChangeComboBox(e);
                      }}
                    >
                      {area.map((user) => (
                        <option key={user.id} value={user.id}>
                          {user.province}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="text"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Kota
                    </label>
                    <div className="mt-1">
                      {cities ? <p>{cities.city}</p> : ""}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Size
                    </label>
                    <select
                      id="location"
                      name="location"
                      className="mt-1 block w-full rounded-md border py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      defaultValue="120"
                    >
                      {users.map((user) => (
                        <option key={user.id}>{user.size}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="text"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Price
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="text"
                        id="Price"
                        className="p-2 text-gray-500 w-full h-10 border rounded-md outline-none focus:bg-white focus:border-indigo-60"
                        placeholder="Price"
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="float-right bg-blue-300 mt-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-white shadow-sm"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
