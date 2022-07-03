var clock = document.getElementById("clock")
var nineBlockInput = document.getElementById("nineBlock")
var nineBlockBtn = document.getElementById("9-Btn")
var tenBlockInput =document.getElementById("tenBlock")
var tenBlockBtn = document.getElementById("10-Btn")
var elevenBlockInput =document.getElementById("elevenBlock")
var elevenBlockBtn = document.getElementById("11-Btn")
var twelveBlockInput =document.getElementById("twelveBlock")
var twelveBlockBtn = document.getElementById("12-Btn")
var oneBlockInput =document.getElementById("oneBlock")
var oneBlockBtn = document.getElementById("1-Btn")
var twoBlockInput =document.getElementById("twoBlock")
var twoBlockBtn = document.getElementById("2-Btn")
var threeBlockInput =document.getElementById("threeBlock")
var threeBlockBtn = document.getElementById("3-Btn")
var fourBlockInput =document.getElementById("fourBlock")
var fourBlockBtn = document.getElementById("4-Btn")
var fiveBlockInput =document.getElementById("fiveBlock")
var fiveBlockBtn = document.getElementById("5-Btn")


//initial function
function init(){
    var nineBlockStored = JSON.parse(localStorage.getItem("9am"))
    if(nineBlockStored !== null){
        nineBlockInput.value = nineBlockStored.task
    }else{
        return
    }

    var tenBlockStored = JSON.parse(localStorage.getItem("10am"))
    if(tenBlockStored !== null){
        tenBlockInput.value = tenBlockStored.task
    }else{
        return
    }

    var elevenBlockStored = JSON.parse(localStorage.getItem("11am"))
    if(elevenBlockStored !== null){
        elevenBlockInput.value = elevenBlockStored.task
    }else{
        return
    }

    var twelveBlockStored = JSON.parse(localStorage.getItem("12PM"))
    if(twelveBlockStored !== null){
        twelveBlockInput.value = twelveBlockStored.task
    }else{
        return
    }

    var oneBlockStored = JSON.parse(localStorage.getItem("1PM"))
    if(oneBlockStored !== null){
        oneBlockInput.value = oneBlockStored.task
    }else{
        return
    }

    var twoBlockStored = JSON.parse(localStorage.getItem("2PM"))
    if(twoBlockStored !== null){
        twoBlockInput.value = twoBlockStored.task
    }else{
        return
    }

    var threeBlockStored = JSON.parse(localStorage.getItem("3PM"))
    if(threeBlockStored !== null){
        threeBlockInput.value = threeBlockStored.task
    }else{
        return
    }

    var fourBlockStored = JSON.parse(localStorage.getItem("4PM"))
    if(fourBlockStored !== null){
        fourBlockInput.value = fourBlockStored.task
    }else{
        return
    }

    var fiveBlockStored = JSON.parse(localStorage.getItem("5PM"))
    if(fiveBlockStored !== null){
        fiveBlockInput.value = fiveBlockStored.task
    }else{
        return
    }


    
}

//function that updates time using moment API
function updateTime(){
    var time = moment().format('MMMM Mo YYYY');
    clock.textContent = time
}

setInterval(updateTime, 1000)

//9AM
nineBlockBtn.addEventListener("click", function(event){
    event.preventDefault();

    var nine = {
        task: nineBlockInput.value
    }

    localStorage.setItem("9am", JSON.stringify(nine))
})

//10AM
tenBlockBtn.addEventListener("click", function(event){
    event.preventDefault();

    var ten = {
        task: tenBlockInput.value
    }

    localStorage.setItem("10am", JSON.stringify(ten))
})

//11AM
elevenBlockBtn.addEventListener("click", function(event){
    event.preventDefault();

    var eleven = {
        task: elevenBlockInput.value
    }

    localStorage.setItem("11am", JSON.stringify(eleven))
})

//12PM
twelveBlockBtn.addEventListener("click", function(event){
    event.preventDefault();

    var twelve = {
        task: twelveBlockInput.value
    }

    localStorage.setItem("12PM", JSON.stringify(twelve))
})

//1PM
oneBlockBtn.addEventListener("click", function(event){
    event.preventDefault();

    var one = {
        task: oneBlockInput.value
    }

    localStorage.setItem("1PM", JSON.stringify(one))
})

//2PM
twoBlockBtn.addEventListener("click", function(event){
    event.preventDefault();

    var two = {
        task: twoBlockInput.value
    }

    localStorage.setItem("2PM", JSON.stringify(two))
})

//3PM
threeBlockBtn.addEventListener("click", function(event){
    event.preventDefault();

    var three = {
        task: threeBlockInput.value
    }

    localStorage.setItem("3PM", JSON.stringify(three))
})

//4PM
fourBlockBtn.addEventListener("click", function(event){
    event.preventDefault();

    var four = {
        task: fourBlockInput.value
    }

    localStorage.setItem("4PM", JSON.stringify(four))
})

//5PM
fiveBlockBtn.addEventListener("click", function(event){
    event.preventDefault();

    var five = {
        task: fiveBlockInput.value
    }

    localStorage.setItem("5PM", JSON.stringify(five))
})



init();