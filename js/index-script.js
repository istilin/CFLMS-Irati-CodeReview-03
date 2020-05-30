
/* Function that calculates the value of then insurance */
function calculateInsurance(country, horse, age){
	
	if (country == "austria"){
		var insurance = horse * 100 / age + 50;

	} else if (country == "hungary"){
		var insurance = horse * 120 / age + 100;

	} else {
		var insurance = horse * 150 / (age + 3) + 50;
	}
	return insurance.toFixed(2);
}


/* An event occurs when we click the "Calculate" button */
document.getElementById("button").addEventListener("click", (event) => {
	event.preventDefault();

	/* Extracts values from the form */
	const nameE = document.getElementById("name").value;
	const ageE = parseInt(document.getElementById("age").value);
	const countryE = document.getElementById("country").value;
	const horseE = parseInt(document.getElementById("horse").value);

	/* Calls the rendering function */
	generateDOM(nameE, ageE, countryE, horseE)

})

/* Rendering function */
const generateDOM = (name, age, country, horse) => {

	/* Calls the insurance calculating function */
	insurance_value = calculateInsurance(country, horse, age)
	const resultE = document.getElementById("result")
	/* Writes the result on the html */
	resultE.innerHTML = `${name}, your insurance costs ${insurance_value} €`
}

