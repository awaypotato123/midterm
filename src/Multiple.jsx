import { useState } from "react";
import "./Multiple.css";

export default function Multiple() {
  const [formData, setFormData] = useState({firstname: "",lastname: "", mobilenumber: "",email: "",address: ""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };


  

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`First Name ${formData.firstname}, Last Name ${formData.lastname}, Mobile Number ${formData.mobilenumber},Email ${formData.email},Address ${formData.address}`
    );
  };

    

    


const handleCancel = () => {
    setFormData({firstname:"",lastname:"",mobilenumber:"",email:"",address:""});

};

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstname">First Name</label>
      <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange}/>

      <label htmlFor="lastname">Last Name</label>
      <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange}/>

      <label htmlFor="mobilenumber">Mobile Number</label>
      <input type="text" id="mobilenumber" name="mobilenumber" value={formData.mobilenumber} onChange={handleChange}/>

      <label htmlFor="email">Email ID</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>

      <label htmlFor="address">Address</label>
      <textarea id="address" name="address" value={formData.address} onChange={handleChange}/>

      <button type="submit">Submit</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
      
    </form>
  );
}