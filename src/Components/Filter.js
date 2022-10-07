import { useState } from "react";
import { FunnelIcon, XMarkIcon } from "@heroicons/react/20/solid";
import "./style.scss";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const [area, setArea] = useState([]);

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
  return (
    <>
      <div className="flex items-center justify-center">
        <button
          className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto filter"
          type="button"
          onClick={() => setShowModal(true)}
        >
          <FunnelIcon className="h-5 w-5 mr-2" aria-hidden="true" />
          Filter
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
                  <h1>Filter</h1>
                  <XMarkIcon
                    className="h-5 w-5 mr-2 m-auto"
                    aria-hidden="true"
                    onClick={() => setShowModal(false)}
                  />
                </div>
                <fieldset className="space-y-5">
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="comments"
                        aria-describedby="comments-description"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      {area.map((user) => (
                        <label
                          htmlFor="comments"
                          className="font-medium text-gray-700"
                          key={user.id}
                          value={user.id}
                        >
                          {user.province}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="candidates"
                        aria-describedby="candidates-description"
                        name="candidates"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
