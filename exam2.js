// creating my array for counting later
let ratingArray = [];

// function that does all the magic!
function submitAndClear() {

    // grab all the elemnents
    let ul = document.getElementById("list");
    let counter = document.getElementById("counter");
    let name = document.getElementById("name").value;
    let review = document.getElementById("review").value;

    // creating the new elements
    let li = document.createElement("li");
    let li2 = document.createElement("li");
    let rater = document.createElement("li");
    
    // grabbing a list of all the li to get the total number to use for rating
    let numberOfReviews = document.querySelectorAll(`li`);
    let length = numberOfReviews.length;
    
    // updating the elements
    li.innerHTML = "Customer Name: " + name;
    li.setAttribute("style", "background-color: aliceblue");
    li.setAttribute("class", "names");
    li2.innerHTML = "Customers Review: " + review;
    li2.setAttribute("class", "reviews");
    li2.setAttribute("style", "background-color: aliceblue");
    rater.innerHTML = "Rating given: " + ratingArray.length + " stars";
    rater.setAttribute("class", "rader");
    rater.setAttribute("style", "background-color: aliceblue");
    counter.innerHTML = length / 3 + 1;

    // adding the new li items to the list
    ul.appendChild(li);
    ul.appendChild(li2);
    ul.appendChild(rater);

    // calling a function that will clear and reset back defaults 
   clearform();
    
}

//  function to clear everything to defaults
// I feel like there is a way to use a loop for this but i couldnt figure it out with nodes so if you can give me 
// some feed back on how i could have done this i would be grateful
function clearform(){
    document.form.reset();  
    let allChildren = document.querySelector("#spans").childNodes
    let child1 = allChildren[1];
    let child2 = allChildren[3];
    let child3 = allChildren[5];
    let child4 = allChildren[7];
    let child5 = allChildren[9];
    child1.classList.remove("check");
    child2.classList.remove("check");
    child3.classList.remove("check");
    child4.classList.remove("check");
    child5.classList.remove("check");
    ratingArray = [];
    
    
    
    
}

// functions below that is applying orange color to stars when clicked and adding them to an array for counting later
// also here again im thinking a loop would work, but i couldnt figure it out
function rate1() {
    
    let rate = document.getElementById("1star");
    rate.classList.add("check");
    ratingArray.push("rate1");  
}

function rate2() {
    
    let rate = document.getElementById("2star");
    rate.classList.add("check");  
    ratingArray.push("rate2");  
}

function rate3() {
    
    let rate = document.getElementById("3star");
    rate.classList.add("check");  
    ratingArray.push("rate3");  
}

function rate4() {
    
    let rate = document.getElementById("4star");
    rate.classList.add("check"); 
    ratingArray.push("rate4");   
}

function rate5() {
    
    let rate = document.getElementById("5star");
    rate.classList.add("check"); 
    ratingArray.push("rate5");  
}




