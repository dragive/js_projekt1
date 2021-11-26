var currencySuffix = " zł"

var storage = [{
    lp:10,
    name:"nazwa",
    price:123,
    amount:10
},{
    lp:20,
    name:"nazwa",
    price:123,
    amount:10
}]

function update(){
    clearList()
    reenumerateStorage()
    generateListFromStorage()
    setContentSumaTextView( sumElementsOnList())
}

function getSumaTextView(){
    return document.getElementById("field_sum")
}

function setContentSumaTextView(content){
    
    getSumaTextView().innerHTML = content+currencySuffix
}

function sumElementsOnList(){
    let sum = 0
    sum = storage.map(element=>element.price*element.amount).reduce((a,b)=>{return a+b})
    return sum
}

function generateListFromStorage(){
    storage.forEach(element=>{
        generateNewRowByObject(element)
    })
}

function generateNewRowByObject(element){
    let tr = document.createElement("tr")
    
    
    let tdLp = document.createElement("td")
    let tdName = document.createElement("td")
    let tdPrice = document.createElement("td")
    let tdAmount = document.createElement("td")
    let tdCost = document.createElement("td")
    let tdControlls = document.createElement("td")

    //ustawienie poprawnych wartości pobranych z elementu

    tdLp.innerHTML = element.lp
    tdName.innerHTML = element.name
    tdPrice.innerHTML = element.price
    tdAmount.innerHTML = element.amount
    tdCost.innerHTML = element.price* element.amount
    tdControlls.appendChild(getControllsDiv())

    // Nadanie odpowiednich klas
    tr.classList.add("table-row")

    tdLp.classList.add("table-cell")
    tdName.classList.add("table-cell")
    tdPrice.classList.add("table-cell")
    tdAmount.classList.add("table-cell")
    tdCost.classList.add("table-cell")
    tdControlls.classList.add("table-cell")

    tr.id = "element-number-"+element.lp

    // Dodanie do widoku
    addTableCellAsLast(tr)

    tr.appendChild(tdLp)
    tr.appendChild(tdName)
    tr.appendChild(tdPrice)
    tr.appendChild(tdAmount)
    tr.appendChild(tdCost)
    tr.appendChild(tdControlls)
}

function getControllsDiv(){
    let span = document.createElement("span")
    let buttonEdit = document.createElement("input")
    buttonEdit.type= "button"
    buttonEdit.value="Edytuj"
    span.appendChild(buttonEdit)

    let buttonDelete = document.createElement("input")
    buttonDelete.type= "button"
    buttonDelete.value="Usuń"
    buttonDelete.style.marginLeft="10px"
    span.appendChild(buttonDelete)

    let buttonUp = document.createElement("input")
    buttonUp.type= "button"
    buttonUp.value="Up"
    buttonUp.style.marginLeft="10px"
    span.appendChild(buttonUp)

    let buttonDown = document.createElement("input")
    buttonDown.type= "button"
    buttonDown.value="Down"
    buttonDown.style.marginLeft="10px"
    span.appendChild(buttonDown)

    return span    
}

function addTableCellAsLast(tableCellElement){
    let pointer = document.getElementById("table-footer")
       
    pointer.parentElement.insertBefore(tableCellElement,pointer)

}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

function clearList(){
    let list = document.getElementsByClassName("table-row")
    while( list.length>0) list[0].remove()
}
function reenumerateStorage(){
    for(let i =0;i<storage.length;i++){
        storage[i].lp=i+1
    }
}

window.onload = function (){
    update()
}
