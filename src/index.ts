import * as _ from "lodash"
import "./styles/main.scss"

import screenshot from "./assets/img/Screenshot 2022-07-25 at 7.07.18 PM.png"

function component() {
	const element = document.createElement("img")

	element.setAttribute("src", screenshot)

	return element
}

const header = document.createElement("h1")
header.innerHTML = "Hello, World!"

const root = document.getElementById("root")
root.appendChild(header)

document.body.appendChild(component())
