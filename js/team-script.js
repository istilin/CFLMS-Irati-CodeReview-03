
/* Creates a class that acts on the webpage as soon as it's called */
class memberInfo{
	name = "";
	email = "";
	image = "";
	age = "";
	nation = "";
	job = "";
	info = "";
	button = "";

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

	/* Creates Elements on the webpage */
	createElements(){

		/* Creates a div on the html which will hold information from the employee */
		const boxdiv = document.createElement("div")

		/* Creates other html elements */
		const boxname = document.createElement("h1")
		const boxemail = document.createElement("h2")
		const boximg = document.createElement("img")
		const boxbutton = document.createElement("button")

		/* Appends these elements on the div */
		boxdiv.appendChild(boxname)
		boxdiv.appendChild(boxemail)
		boxdiv.appendChild(boximg)
		boxdiv.appendChild(boxbutton)

		const boxmain = document.getElementById("wrapper")

		/* Sets text and image source on the elements */
		boxname.innerText = `Employee's name: ${this.name}`
		boxemail.innerText = `e-mail address: ${this.email}`
		boximg.setAttribute("src", this.image)
		boxbutton.innerText = `More info`

		/* Appends div to the mainbox */
		boxmain.appendChild(boxdiv)

		/* An event occurs as soon as we click the button */
		boxbutton.addEventListener("click", (event) => {

			/* Creates more html elements */
			const boxage = document.createElement("h2")
			const boxnation = document.createElement("h2")
			const boxjob = document.createElement("h2")
			const boxinfo = document.createElement("p")

			/* Appends these elements to the div */
			boxdiv.appendChild(boxage)
			boxdiv.appendChild(boxnation)
			boxdiv.appendChild(boxjob)
			boxdiv.appendChild(boxinfo)

			/* Sets text and image source on the elements */
			boxage.innerText = `Age: ${this.age}`
			boxnation.innerText = `Nationality: ${this.nation}` 
			boxjob.innerText = `Job position: ${this.job}`
			boxinfo.innerText = `More information: ${this.info}`
		})	
	}
}

/* Create objects from the class */
person1 = new memberInfo("Fran","fran@index.com","../img/Fran.jpg", "31", "Brazilian", "Web developer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
person2 = new memberInfo("Bill","bill@index.com","../img/Bill.jpg", "24", "British", "Data Scientist", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
person3 = new memberInfo("Fritz","fritz@index.com","../img/Fritz.jpg", "46", "Austrian", "Physicist", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")

teamMembers = [person1, person2, person3]

/* For each object we call the method in the class that creates the divbox with all the elements */
for (i=0; i < teamMembers.length; i++){
	teamMembers[i].createElements()
}
