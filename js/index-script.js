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



document.getElementById("button").addEventListener("click", (event) => {
	event.preventDefault();
	const nameE = document.getElementById("name").value;
	const ageE = parseInt(document.getElementById("age").value);
	const countryE = document.getElementById("country").value;
	const horseE = parseInt(document.getElementById("horse").value);

	generateDOM(nameE, ageE, countryE, horseE)

})
const generateDOM = (name, age, country, horse) => {

	insurance_value = calculateInsurance(country, horse, age)
	console.log(insurance_value)
	const resultE = document.getElementById("result")
	resultE.innerHTML = `${name}, your insurance costs ${insurance_value} €`
	console.log(resultE)

	

}

