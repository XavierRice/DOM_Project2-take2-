const test = console.log    //got tired of writing out console.log

const form = document.querySelector("form")                  //selecting my form
const selectStock = document.querySelector("select")         // same for the select section

const fighterInput = document.createElement("input")        //I've added a few inputs directly into HTML and 3 i added by js.
fighterInput.setAttribute("type", "text")
fighterInput.setAttribute("placeholder", "Fighter Type")    //ADDing attributes


const fighterLabel = document.createElement("label")       //Creating lables for all my inputs
fighterLabel.innerText = "Style:"

fighterLabel.append(fighterInput)                          //appending the input to the label 
selectStock.after(fighterLabel)                         //then appending the label AFTER the fighter tag
 
const imageInput = document.createElement("input")             //Adding two more inputs for Figther and Image
imageInput.setAttribute("type", "text")
imageInput.classList.add("image")
imageInput.setAttribute("placeholder", "add img link")
imageInput.setAttribute("id", "image")

const imageLabel = document.createElement("label")
imageLabel.innerText = "Image:"

imageLabel.append(imageInput)                            //Adding Labels to it
fighterLabel.after(imageLabel)


const li = document.getElementsByClassName("li_tools")    //Get my list of tools, which is an array

for (let i = 0; i < li.length; i++) {                     //looping through the array

  const labelReset = document.createElement("label")      // adding delete keys
  labelReset.innerText = "Delete"

  const button = document.createElement("button")
  button.setAttribute("type", "radio")
  button.classList.add("li_reset")
  labelReset.append(button)
  li[i].append(labelReset)

  button.addEventListener("click", (event) => {
    const li = event.target.parentNode                 //using the event to target whatever item was clicked on. and removing the parent and the children of that node
    li.parentNode.remove(li)
  })
}

const ninjaTool = document.createElement("li")
const toolsList = document.querySelector("ul")


function clearForm() {            // making a function for form reset and i added directly to the HTML
  form.reset()
}


form.addEventListener("submit", (event) => {
  event.preventDefault();

  let priceInput = `Price: ${event.target["price"].value}`;             //using the event to gather the inputed information
  if(priceInput === "Price:"){                                      //adding logic for empty string occurences
    priceInput = "Price: unknown"
  }
  let nameInput = event.target["name"].value;

  let stockInput = event.target["stock"].value;
   if(stockInput === "???"){
    stockInput = "unknown"
   }

  let imageSRC = event.target["image"].value;

  if(imageSRC === ""){                                    
    imageSRC = "./assets/no_image.jpeg"
  }

 const newStock = document.createElement("h3")             //I'm using AppendChild and im wondering why this is making my items appear at the end of the list?
 newStock.innerText = `Stock: ${stockInput}`
 ninjaTool.appendChild(newStock)

  const newImage = document.createElement("img")
  newImage.setAttribute("src", imageSRC)
  ninjaTool.appendChild(newImage)

  const newH3 = document.createElement("h3")
  newH3.innerText = `Name:${nameInput}`
  ninjaTool.appendChild(newH3)

  const newP = document.createElement("p")
  newP.innerText = `Price: ${priceInput}`
  ninjaTool.appendChild(newP)

  toolsList.appendChild(ninjaTool)          //adding my appendedn tools to the list

  setTimeout(clearForm, 0)                  // using the global timeout method to call my reset fuction when form is filled out correctly.         

})




const transform = document.getElementsByClassName("transform")    //SKILLSHARE WOOHOO!

for (let i = 0; i < transform.length; i++) {

  function transformX() {                                     //The transform property applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew
    transform[i].style.transform = "translateX(100px)"     //translateX() CSS function repositions an element horizontally on the 2D plane
  }


  transform[i].addEventListener("mouseover", transformX)  //adding my transform function to an event listener

}


const popup = document.getElementById("popup")              //SKILL SHARE!!!
const closeButton= document.getElementsByClassName("close")
const message = document.getElementsByName("message")
const p = document.querySelectorAll("p")

function closePopUp(){
  popup.style.display="none"
}



for(let i =0; i < transform.length; i++){
 
  transform[i].addEventListener("click", (event) =>{
    popup.style.display= "block"                           //making my pop up visiable on the click!
  
  })                                                      //Still having problems with CSS, i added an inline styling of display:none
  
}

let h4Status = document.getElementsByClassName("stock_status")

let stateOfStock = true          /// adding my toggle function to my status

for(let i = 0; i < h4Status.length; i++){

h4Status[i].addEventListener("click", () => {
           
stateOfStock = !stateOfStock 

h4Status[i].innerText = "In-Stock"
if(stateOfStock === true){
  h4Status[i].innerText = "In-Stock"
}else{
  h4Status[i].innerText = "NOT In-Stock"
}


})
}

