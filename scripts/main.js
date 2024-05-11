function setUserName() {
	const myName = prompt("Please enter your name.");
	if (!myName) {
		setUserName();
	} else {
		localStorage.setItem("name", myName);
		myHeading.textContent = `Welcome, ${myName}! Glory to Jesus Christ!`;
	}
}

const myImage = document.querySelector("img");
myImage.onclick = () => {
	const mySrc = myImage.getAttribute("src");
	if (mySrc === "images/smm-logo.png") {
		myImage.setAttribute("src", "images/frmatthew.jpg");
	} else {
		myImage.setAttribute("src", "images/smm-logo.png");
	}
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
if (!localStorage.getItem("name")) {
	setUserName();
} else {
	const storedName = localStorage.getItem("name");
	myHeading.textContent = `Welcome, ${storedName}! Glory to Jesus Christ!`;
}
myButton.onclick = () => {setUserName();};

