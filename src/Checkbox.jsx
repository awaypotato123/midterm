import { useState } from "react";
import "./Checkbox.css";

function Checkbox() {
  const [checkboxStates, setCheckboxStates] = useState({
    highschool: false,
    higherschool: false,
    graduation: false,
    postgrad: false,
    other: false,
  });
  
  

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxStates({
      ...checkboxStates,
      [name]: checked,
    });
  };

 

  

  return (
    <form>
      <label htmlFor="highschool">
        <input type="checkbox" name="highschool" checked={checkboxStates.highschool} onChange={handleChange} />
        High School(10th)
      </label>

      <label htmlFor="higherschool">
        <input type="checkbox" name="higherschool" checked={checkboxStates.higherschool} onChange={handleChange} />
        Higher School(12th)
      </label>

      <label htmlFor="graduation">
        <input type="checkbox" name="graduation" checked={checkboxStates.graduation} onChange={handleChange} />
        Graduation(Bachelors)
      </label>

      <label htmlFor="postgrad">
        <input type="checkbox" name="postgrad" checked={checkboxStates.postgrad} onChange={handleChange} />
        Post Graduation(Masters)
      </label>

      <label htmlFor="other">
        <input type="checkbox" name="other" checked={checkboxStates.other} onChange={handleChange} />
        Other
      </label>
     
    </form>
  );
}

export default Checkbox;
