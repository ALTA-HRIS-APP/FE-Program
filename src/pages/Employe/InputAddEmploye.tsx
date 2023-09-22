import { useState } from "react";

const InputAddEmploye = ({ addDataToAPI, refreshTable }) => {
  const [formData, setFormData] = useState({
    name: "",
    nik: "",
    noBPJS: "",
    noNPWP: "",
    statusBPJS: "",
    statusNPWP: "",
    kkFile: null,
    npwpFile: null,
    bpjsFile: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDataToAPI(formData);

    setFormData({
      name: "",
      nik: "",
      noBPJS: "",
      noNPWP: "",
      statusBPJS: "",
      statusNPWP: "",
      kkFile: null,
      npwpFile: null,
      bpjsFile: null,
    });

    refreshTable();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 border bg-white border-gray-300 rounded-lg shadow-md mt-5"
    >
      <div className=" grid grid-flow-col gap-4 w-full">
        <div className="mb-2 w-auto ">
          <label
            htmlFor="name"
            className="block text-sky-900 font-semibold py-2"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-2 w-auto">
          <label
            htmlFor="nik"
            className="block text-sky-900 font-semibold py-2"
          >
            NIK
          </label>
          <input
            type="text"
            name="nik"
            value={formData.nik}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
      </div>
      <div className=" grid grid-flow-col  gap-4 w-full">
        <div className="mb-2 w-auto">
          <label
            htmlFor="statusBPJS"
            className="block text-sky-900 font-semibold py-2"
          >
            Status BPJS
          </label>
          <input
            type="text"
            name="statusBPJS"
            value={formData.statusBPJS}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-2 w-auto">
          <label
            htmlFor="noBPJS"
            className="block text-sky-900 font-semibold py-2"
          >
            BPJS
          </label>
          <input
            type="text"
            name="noBPJS"
            value={formData.noBPJS}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
      </div>
      <div className=" grid grid-flow-col  gap-4 w-full">
        <div className="mb-2 w-auto">
          <label
            htmlFor="statusNPWP"
            className="block text-sky-900 font-semibold py-2"
          >
            Status NPWP
          </label>
          <input
            type="text"
            name="statusNPWP"
            value={formData.statusNPWP}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-2 w-auto">
          <label
            htmlFor="noNPWP"
            className="block text-sky-900 font-semibold py-2"
          >
            NPWP
          </label>
          <input
            type="text"
            name="noNPWP"
            value={formData.noNPWP}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
      </div>
      <div className=" grid grid-flow-col  gap-4 w-full">
        <div className="mb-2 w-auto">
          <label
            htmlFor="kkFile"
            className="block text-sky-900 font-semibold py-2"
          >
            File KK
          </label>
          <input
            type="file"
            name="kkFile"
            value={formData.kkFile}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-2 w-auto">
          <label
            htmlFor="bpjsFile"
            className="block text-sky-900 font-semibold py-2"
          >
            File BPJS
          </label>
          <input
            type="file"
            name="bpjsFile"
            value={formData.bpjsFile}
            onChange={handleChange}
            className="w-full  border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-2 w-auto">
          <label
            htmlFor="npwpFile"
            className="block text-sky-900 font-semibold py-2"
          >
            File NPWP
          </label>
          <input
            type="file"
            name="npwpFile"
            value={formData.npwpFile}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
      </div>

      <div className="mb-2 mt-3">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default InputAddEmploye;
