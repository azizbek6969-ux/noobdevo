import { useState } from "react";

export default function EditProfileModal({ isOpen, onClose, onSave, currentData }) {
  const [formData, setFormData] = useState(currentData);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleBackgroundClick = (e) => {
    if (e.target.id === "modal-background") {
      onClose();
    }
  };

  return (
    <div
      id="modal-background"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white rounded-lg w-[400px] sm:w-[500px] p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h2 className="text-lg font-bold mb-6 text-center text-blue-600">Edit Profile</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 border-gray-400 bg-white  outline-none"
              placeholder="Enter name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">
              Job Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 border-gray-400 bg-white  outline-none"
              placeholder="Enter job title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Telegram username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="telegram"
              value={formData.telegram}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 border-gray-400 bg-white  outline-none"
              placeholder="Enter username"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Phone number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 border-gray-400 bg-white  outline-none"
              placeholder="+998"
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
