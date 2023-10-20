import { useState } from "react";
import "./Dropdown.css";

export default function Dropdown()  {
	const [selectedOption, setSelectedOption] = useState("Health Informatics");

	const  handleDropdownChange = (event) => {
		setSelectedOption(event.target.value);
	};

    

return  (
	<div>
		<label>
			Program
				<select  value={selectedOption} onChange={handleDropdownChange}>
				<option  value="option1">Health Informatics</option>
				<option  value="option2">Artifical Intelligence</option>
				<option  value="option3">Game Programming</option>
                <option  value="option3">Software Technician</option>
                <option  value="option4">Software Engineer</option>
			</select>
		</label>
		
	</div>
	);
}