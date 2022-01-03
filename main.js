// elements
const toDo = document.getElementById("input");
const submit = document.getElementById("submint");
const clear = document.getElementById("clear");
const ul = document.getElementById("list-output");
const done = document.getElementById("done");


// event listeners
submit.addEventListener("click", () => {
	submitItem()

})
clear.addEventListener("click", () => {
	cleatItems()
})


ul.addEventListener("click",(event) =>{
	if (event.target.tagName === 'BUTTON') {
		const button = event.target
		const li = button.parentNode
		const ul = li.parentNode
		if (button.textContent === 'X') {
			ul.removeChild(li);
		}
		if (button.textContent === 'Done') {
			li.style.textDecorationLine = "line-through"
			button.style.display = "none"
			li.innerHTML += `<button class="un">un</button>`
		}
		if (button.textContent === 'un') {
			li.style.textDecorationLine = "none"
			button.style.display = "none"
			li.innerHTML += `<button class="done">Done</button>`
		}

		
		
	}
	
	})





// functions

function submitItem(){
	let itemContent = toDo.value
	if (itemContent === '') {
		alert("write somthing")
	}else {

	    const cancelBtn = `<button class="cancel">X</button> `
	const item =  `<li>${itemContent} ${cancelBtn} <button id="done" class="done">Done</button></li>`
	ul.innerHTML += item
	}

}

function cleatItems(){
	ul.innerHTML= ""
}
