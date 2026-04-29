import React, { useState } from 'react';

const VolunteeringForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    email: '',
    collegename: '',
    abcid: '',
    description: '',
    workinghour: '',
    password: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Handle form inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file input
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  // Handle form submission
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (!file) {
  //     setErrorMessage('Please upload a college ID photo.');
  //     return;
  //   }

  //   const data = new FormData();
  //   for (const key in formData) {
  //     data.append(key, formData[key as keyof typeof formData]);
  //   }
  //   data.append('collegeidphoto', file);

  //   try {
  //     const response = await fetch('http://localhost:8080/api/volunteering/add', {
  //       method: 'POST',
  //       body: data,
  //     });

  //     if (!response.ok) {
  //       throw new Error('Failed to submit the form');
  //     }

  //     setSuccessMessage('Form submitted successfully!');
  //     setErrorMessage(null);
  //     setFormData({
  //       name: '',
  //       phone: '',
  //       address: '',
  //       email: '',
  //       collegename: '',
  //       abcid: '',
  //       description: '',
  //       workinghour: '',
  //       password: " ",
  //     });
  //     setFile(null);
  //   } catch (error: any) {
  //     setErrorMessage(error.message);
  //     setSuccessMessage(null);
  //   }
  // };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const {
      name,
      phone,
      address,
      email,
      collegename,
      abcid,
      description,
      workinghour,
      password,
    } = formData;

    if (
      !name ||
      !phone ||
      !address ||
      !email ||
      !collegename ||
      !abcid ||
      !description ||
      !workinghour ||
      !password
    ) {
      return setErrorMessage("All fields are required.");
    }

    if (!/^\d{10}$/.test(phone)) {
      return setErrorMessage("Phone number must be 10 digits.");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return setErrorMessage("Enter valid email.");
    }

    if (password.length < 8) {
      return setErrorMessage("Password must be at least 8 characters.");
    }

    if (!file) {
      return setErrorMessage("Please upload college ID photo.");
    }

    const data = new FormData();

    for (const key in formData) {
      data.append(key, formData[key as keyof typeof formData]);
    }

    data.append("collegeidphoto", file);

    try {
      const response = await fetch(
        "http://localhost:8080/api/volunteering/add",
        {
          method: "POST",
          body: data,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSuccessMessage("Form submitted successfully!");
      setErrorMessage(null);

      setFormData({
        name: "",
        phone: "",
        address: "",
        email: "",
        collegename: "",
        abcid: "",
        description: "",
        workinghour: "",
        password: "",
      });

      setFile(null);

    } catch (error: any) {
      setErrorMessage(error.message);
      setSuccessMessage(null);
    }
  };
  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Volunteering Form</h2>

      {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            maxLength={10}
            pattern="[0-9]{10}"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">College Name</label>
          <input
            type="text"
            name="collegename"
            value={formData.collegename}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">ABC ID</label>
          <input
            type="text"
            name="abcid"
            value={formData.abcid}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Working Hour</label>
          <input
            type="text"
            name="workinghour"
            value={formData.workinghour}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">College ID Photo</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            minLength={8}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default VolunteeringForm;
