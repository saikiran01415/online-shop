/* code for dynamic header and footer */
function loadComponent(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => document.getElementById(elementId).innerHTML = data);
}

loadComponent("Header", "Header.html");
loadComponent("Footer", "Footer.html");

/*  function to redirection */

function redirectTo(link){
    window.location.href=link
}

document.addEventListener("DOMContentLoaded",()=>{
    fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        data.forEach(element => {
            let Allproducts_containor=document.getElementById("Allproducts_containor")
            let productcard=document.createElement("div")
            productcard.classList.add("product_card")
            productcard.innerHTML=`<img src="${element["image"]}" alt="image" class="product_images">
            <h3>${element["title"]}</h3>
            <h4>price:${element.price}$</h4>
            <button> show more</button>`
            Allproducts_containor.appendChild(productcard)

        });
    })
    .catch(error=>{
        console.log(error)
    })
})








/* for mens */


function Men() {
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        console.log(data);  // Check the full response to see if the category is correct
        let Allproducts_containor = document.getElementById("Allproducts_containor");

        // Loop through all products and filter for "men's clothing"
        data.forEach(element => {
            // Log the category of each product to verify it
            console.log('Category:', element["category"]);

            // Check if the category matches "men's clothing" exactly
            if (element["category"] === "men's clothing") {
                let productcard = document.createElement("div");
                productcard.classList.add("product_card");

                // Add product details to the card
                productcard.innerHTML = `
                    <img src="${element["image"]}" alt="image" class="product_images">
                    <h3>${element["title"]}</h3>
                    <h4>Price: $${element.price}</h4>
                    <button onclick="show()">Show More</button>
                `;

                // Append the product card to the container
                Allproducts_containor.appendChild(productcard);
            }
            function show(){
                window.location.href="show.html"
            }
        });
    })
    .catch(error => {
        console.log("Error fetching products: ", error);
    });
}








/* for image slider */

const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');


let currentIndex = 0;
function updateSlider() {
    const offset = -currentIndex * 100; 
    slider.style.transform = `translateX(${offset}%)`; 
}


function nextImage() {
    currentIndex = (currentIndex + 1) % images.length; 
    updateSlider();
}


function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; 
    updateSlider();
}


nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

setInterval(nextImage, 3000); 

