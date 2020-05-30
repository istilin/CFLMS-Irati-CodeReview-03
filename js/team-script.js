

class memberInfo{
	name = "";
	email = "";
	image = "";

	constructor(name, email, image, age, nation, job, info, button){
		this.name = name;
		this.email = email;
		this.image = image;
		this.age = age;
		this.nation = nation;
		this.job = job;
		this.info = info;
		this.button = button;
	}

	returnDataPerson(){
		return [["name", this.name], ["email", this.email], ["image", this.image]]
		}

	createElements(){
		const boxdiv = document.createElement("div")
		const boxname = document.createElement("h1")
		boxdiv.appendChild(boxname)
		const boxemail = document.createElement("h2")
		boxdiv.appendChild(boxemail)
		const boximg = document.createElement("img")
		boxdiv.appendChild(boximg)
		const boxbutton = document.createElement("button")
		boxdiv.appendChild(boxbutton)

		const boxmain = document.getElementById("wrapper")

		boxname.innerText = `Employee's name: ${this.name}`
		boxemail.innerText = `e-mail address: ${this.email}`
		boximg.setAttribute("src", this.image)
		boxbutton.innerText = `More info`
		boxmain.appendChild(boxdiv)

		boxbutton.addEventListener("click", (event) => {

			const boxage = document.createElement("h2")
			const boxnation = document.createElement("h2")
			const boxjob = document.createElement("h2")
			const boxinfo = document.createElement("p")
			boxdiv.appendChild(boxage)
			boxdiv.appendChild(boxnation)
			boxdiv.appendChild(boxjob)
			boxdiv.appendChild(boxinfo)


			boxage.innerText = `Age: ${this.age}`
			boxnation.innerText = `Nationality: ${this.nation}` 
			boxjob.innerText = `Job position: ${this.job}`
			boxinfo.innerText = `More information: ${this.info}`
		})
		
	}

	

}

person1 = new memberInfo("Fran","fran@index.com","../img/Fran.jpg", "31", "Brazilian", "Web developer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
person2 = new memberInfo("Bill","bill@index.com","../img/Bill.jpg", "24", "British", "Data Scientist", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
person3 = new memberInfo("Fritz","fritz@index.com","../img/Fritz.jpg", "46", "Austrian", "Physicist", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")

teamMembers = [person1, person2, person3]

for (i=0; i < teamMembers.length; i++){
	teamMembers[i].createElements()
}
