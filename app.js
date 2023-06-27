const test = console.log
const li = document.querySelectorAll("li")
const form = document.querySelector("form")
const selectStock = document.querySelector("select")

const fighterInput = document.createElement("input")
fighterInput.setAttribute("type", "text")
fighterInput.setAttribute("placeholder", "Fighter Type")


const fighterLabel = document.createElement("label")
fighterLabel.innerText = "Style:"

fighterLabel.append(fighterInput)
selectStock.after(fighterLabel)

const imageInput = document.createElement("input")
imageInput.setAttribute("type", "text")
imageInput.setAttribute("placeholder", "add img link")

const imageLabel = document.createElement("label")
imageLabel.innerText = "Image:"

imageLabel.append(imageInput)
fighterLabel.after(imageLabel)



const button = document.createElement("button")
button.setAttribute("type", "radio")
button.classList.add("li_reset")

for(let i = 0; i < li.length; i++){
    li[i].append(button)
}    

//insert a delete Event Listener on "button" for assets




const toolsList = document.querySelector("ul")
const ninjaTool = document.createElement("li")


form.addEventListener("submit", (event)=>{
   event.preventDefault(); 

   const priceInput = event.target["price"].value
   const nameInput = event.target["name"].value
   const stockInput = event.target["stock"].value
   


})