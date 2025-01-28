import React from "react";

const MemeberRegistration = () => {
  const [fordata, setForData] = React.useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = React.useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForData({
      ...fordata,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!fordata.name) {
      errors.name = "Name is requiblue";
    }
    if (!fordata.email) {
      errors.email = "Email is requiblue";
    }
    if (!fordata.password) {
      errors.password = "Password is requiblue";
    } else if (fordata.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (fordata.confirmPassword !== fordata.password) {
      errors.confirmPassword = "Passwords do not match";
    }
    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log(fordata);
      e.target.reset();
      setForData({
        name: "",
        email: "",
        phone: "",
        address: "",
        password: "",
        confirmPassword: "",
      });
      setError({});
    } else {
      console.log("invalid submission");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className=" font-bold mb-4">Members Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={fordata.name}
            onChange={handleInputChange}
            className=" font-bold mb-4 bg-blue-100 rounded-3xl m-1" 
          />
          {error.name && <p>{error.name}</p>}
        </div>
        <div>
          <label>Email</label>
          <input 
          className=" font-bold mb-4 bg-blue-100 rounded-3xl m-1 "
            type="email"
            name="email"
            value={fordata.email}
            onChange={handleInputChange}
          />
          {error.email && <p>{error.email}</p>}
        </div>
        <div>
          <label>Phone</label>
          <input
          className=" font-bold mb-4 bg-blue-100 rounded-3xl m-1 "
            type="text"
            name="phone"
            value={fordata.phone}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Address</label>
          <input
          className=" font-bold mb-4 bg-blue-100 rounded-3xl m-1 "
            type="text"
            name="address"
            value={fordata.address}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
          className=" font-bold mb-4 bg-blue-100 rounded-3xl m-1 "
            type="password"
            name="password"
            value={fordata.password}
            onChange={handleInputChange}
          />
          {error.password && <p>{error.password}</p>}
        </div>
        <div>
          <label>Confirm Password</label>
          <input
          className=" font-bold mb-4 bg-blue-100 rounded-3xl m-1 "
            type="password"
            name="confirmPassword"
            value={fordata.confirmPassword}
            onChange={handleInputChange}
          />
          {error.confirmPassword && <p>{error.confirmPassword}</p>}
        </div>
        <button 
        className="bg-blue-400 rounded-3xl p-2 m-1 cursor-pointer"
        type="submit">Register</button>
      </form>
    </div>
  );
};

export default MemeberRegistration;

