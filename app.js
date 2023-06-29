const test = console.log


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
imageInput.classList.add("image")
imageInput.setAttribute("placeholder", "add img link")
imageInput.setAttribute("id", "image")

const imageLabel = document.createElement("label")
imageLabel.innerText = "Image:"

imageLabel.append(imageInput)
fighterLabel.after(imageLabel)


const li = document.getElementsByClassName("li_tools")

for (let i = 0; i < li.length; i++) {

  const labelReset = document.createElement("label")
  labelReset.innerText = "Delete"

  const button = document.createElement("button")
  button.setAttribute("type", "radio")
  button.classList.add("li_reset")
  labelReset.append(button)
  li[i].append(labelReset)

  button.addEventListener("click", (event) => {
    const li = event.target.parentNode
    li.parentNode.remove(li)
  })
}

const ninjaTool = document.createElement("li")
const toolsList = document.querySelector("ul")




form.addEventListener("submit", (event) => {
  event.preventDefault();

  const priceInput = event.target["price"].value;
  const nameInput = event.target["name"].value;
  const stockInput = event.target["stock"].value;
  const imageSRC = event.target["image"].value;


  const newImage = document.createElement("img")
  newImage.setAttribute("src", imageSRC)
  ninjaTool.appendChild(newImage)

  const newH3 = document.createElement("h3")
  newH3.innerText = `Name:${nameInput}`
  ninjaTool.appendChild(newH3)

  const newP = document.createElement("p")
  newP.innerText = `Price: ${priceInput}`
  ninjaTool.appendChild(newP)

  toolsList.appendChild(ninjaTool)

  setTimeout(clearForm, 3000)

})


function clearForm() {
  form.reset()
}


const transform = document.getElementsByClassName("transform")

for (let i = 0; i < transform.length; i++) {

  function transformX() {
    transform[i].style.transform = "translateX(100px)"
  }


  transform[i].addEventListener("mouseover", transformX)

}


const stockButton = document.getElementsByClassName("current")
const h4Stock = document.getElementsByClassName("stock_status")


for (let i = 0; i < stockButton.length; i++) {

  stockButton[i].addEventListener("click", (event) => {
    h4Stock[i].innerText = "In Stock"
  })

}

for (let i = 0; i < h4Stock.length; i++) {
h4Stock[i].addEventListener("click", (event)=>{
  h4Stock[i].innerText = " Not In Stock"
})

}


const popup = document.getElementById("popup")
const closeButton= document.getElementsByClassName("close")

for(let i =0; i < transform.length; i++){
 
  transform[i].addEventListener("click", (event) =>{
    popup.style.display= "block"
  })
  
}


for (let i = 0; i < closeButton.length; i++){
  closeButton[i].addEventListener("click", (event) => {
    popup.style.display= "none"
  })
}