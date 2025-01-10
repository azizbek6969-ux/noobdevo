import React, { useState } from "react";
import { FaEllipsisV, FaEdit, FaTrash } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const GridView = () => {
  const [showModal, setShowModal] = useState(false); // Qo'shish modal
  const [editModal, setEditModal] = useState(false); // Tahrirlash modal
  const [menuOpen, setMenuOpen] = useState(null); // Uchta nuqta menyusi
  const [list, setList] = useState([
    { name: "instagram", count: 3 },
    { name: "do'stimdan", count: 2 },
    { name: "telegram", count: 1 },
    { name: "444", count: 1 },
    { name: "youtube", count: 1 },
  ]); // Ro'yxat va sonlar
  const [editIndex, setEditIndex] = useState(null); // Tahrirlanayotgan element
  const [inputValue, setInputValue] = useState(""); // Modal input qiymati

  // Modalni ko'rsatish va yopish
  const toggleModal = () => {
    setInputValue("");
    setShowModal(!showModal);
  };

  // Tahrirlash modalini ko'rsatish va yopish
  const toggleEditModal = (index) => {
    if (index !== null) {
      setEditIndex(index);
      setInputValue(list[index].name);
    }
    setEditModal(!editModal);
    setMenuOpen(null); // Uchta nuqta menyusini yopish
  };

  // Uchta nuqta menyusini boshqarish
  const toggleMenu = (index) => {
    setMenuOpen(menuOpen === index ? null : index);
  };

  // Qo'shish funksiyasi
  const addItem = () => {
    if (inputValue.trim()) {
      setList([...list, { name: inputValue.trim(), count: 1 }]);
      toggleModal();
    }
  };

  // Tahrirni saqlash
  const saveEdit = () => {
    if (inputValue.trim()) {
      const updatedList = list.map((item, i) =>
        i === editIndex ? { ...item, name: inputValue.trim() } : item
      );
      setList(updatedList);
      toggleEditModal(null);
    }
  };

  // O'chirish funksiyasi
  const deleteItem = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
    setMenuOpen(null); // Uchta nuqta menyusini yopish
  };

  return (
    <>
      <div className="flex justify-center ">
      <div className=" flex p-6 border-2 justify-center w-80  rounded-2xl">
        <div className="flex flex-col w-60 space-y-4">
          {/* Qo'shish tugmasi */}
          <h2 className="text-lg font-bold text-blue-700">From where</h2>
          <button
            className="w-60 border-2  px-4 py-2 rounded-md self-start"
            onClick={toggleModal}
          >
            +
          </button>

          {/* Ro'yxat */}
          <div className="space-y-2">
            {list.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 border-2 rounded-md shadow-sm relative"
              >
                <span>
                  {item.name} <span className="text-gray-500">({item.count})</span>
                </span>
                <button onClick={() => toggleMenu(index)}>
                  <FaEllipsisV />
                </button>

                {/* Uchta nuqta menyusi */}
                {menuOpen === index && (
                  <div className="absolute text-blue-700 bg-white border shadow-md rounded-md right-0 mt-2 z-10">
                    <button
                      className="block px-4 py-2 hover:bg-gray-100 text-blue-600 w-full text-left"
                      onClick={() => toggleEditModal(index)}
                    >
                      <FaEdit className="inline-block mr-2" /> Edit
                    </button>
                    <button
                      className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                      onClick={() => deleteItem(index)}
                    >
                      <FaTrash className="inline-block mr-2" /> Delete
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Qo'shish Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-md shadow-lg w-96">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Yangi qayerdan qo'shish</h3>
                <button
                  onClick={toggleModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <IoClose size={24} />
                </button>
              </div>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Qayerdan nomi"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 mt-4 rounded-md font-semibold"
                onClick={addItem}
              >
                QAYERDANNI YARATISH
              </button>
            </div>
          </div>
        )}

        {/* Tahrirlash Modal */}
        {editModal && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-md shadow-lg w-96">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Tahrirlash</h3>
                <button
                  onClick={() => toggleEditModal(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <IoClose size={24} />
                </button>
              </div>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Qayerdan nomi"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 mt-4 rounded-md font-semibold"
                onClick={saveEdit}
              >
                SAQLASH``
              </button>
            </div>
          </div>
        )}
      </div>
      </div>
    </>
  );
};

export default GridView;


