import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

interface FormData {
  fullName: string;
  timeOfType: string;
  startDate: string;
  endDate: string;
  longLeave: string;
  description: string;
  proofs: string;
}

interface AddTimeOffProps {
  fetchData: () => void;
}

const AddTimeOff: React.FC<AddTimeOffProps> = ({ fetchData }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    timeOfType: "",
    startDate: "",
    endDate: "",
    longLeave: "",
    description: "",
    proofs: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const token = "YOUR_AUTH_TOKEN_HERE";
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // Send a POST request to your API to add the time off
      await axios.post(
        "https://hris.belanjalagiyuk.shop/add-cuti",
        formData,
        config
      );

      // After successfully adding the time off, fetch the updated data
      fetchData();

      // Clear the form data
      setFormData({
        fullName: "",
        timeOfType: "",
        startDate: "",
        endDate: "",
        longLeave: "",
        description: "",
        proofs: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 border bg-white border-gray-300 rounded-lg shadow-md mt-5"
    >
      <div className="grid grid-flow-col gap-4 w-full">
        <div className="mb-2 w-auto">
          <label
            htmlFor="startDate"
            className="block text-sky-900 font-semibold py-2"
          >
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-2 w-auto">
          <label
            htmlFor="endDate"
            className="block text-sky-900 font-semibold py-2"
          >
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="grid grid-flow-col gap-4 w-full">
        <div>
          <label
            htmlFor="longLeave"
            className="block text-sky-900 font-semibold py-2"
          >
            Long Leave (days)
          </label>
          <input
            type="number"
            id="longLeave"
            name="longLeave"
            value={formData.longLeave}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="">
        <div className="mb-2 w-auto">
          <label
            htmlFor="description"
            className="block text-sky-900 font-semibold py-2"
          >
            Description
          </label>
          <textarea
            className="w-full"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
      </div>
      <div className="mb-2 w-auto">
        <label
          htmlFor="proofs"
          className="block text-sky-900 font-semibold py-2"
        >
          Proofs
        </label>
        <input
          type="file"
          id="proofs"
          name="proofs"
          value={formData.proofs}
          onChange={handleChange}
          required
        />
      </div>
      <button
        type="submit"
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default AddTimeOff;
