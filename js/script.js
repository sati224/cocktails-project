import { cocktails } from "./data.js";

console.log("cocktails", cocktails);

const cocktailsWrapper = document.querySelector(".cocktails-wrapper");
const details = document.querySelector(".details-wrapper");
const about = document.querySelector('.about');
const aboutWrapper = document.querySelector('.about-wrapper');
const home = document.querySelector('.home');

//Event for about section
about.addEventListener('click', () => {
    cocktailsWrapper.style.display = 'none';
    aboutWrapper.style.display = 'block';
})

//Event for home section
home.addEventListener('click', () => {
    cocktailsWrapper.style.display = 'block';
    aboutWrapper.style.display = 'none';
})

// creating search bar

const searchBox = document.createElement("div");
searchBox.classList.add("search-box")

const label = document.createElement("label");
label.classList.add("search-label");
label.setAttribute("for", "search-input");
label.innerText = "Search Your Favorite Cocktail";

const input = document.createElement("input");
input.setAttribute("id", "search-input");

searchBox.appendChild(label);
searchBox.appendChild(input);
cocktailsWrapper.appendChild(searchBox);

//creating addEventLis for search button

input.addEventListener('keyup', function () {
    const allDrinks = document.querySelectorAll(".grid-box")
    const alert = document.querySelector(".alert");

    const matchDrinks = []

    cocktails.filter((cocktail, i)=>{
        if(cocktail.strDrink.toLowerCase().includes(input.value.toLowerCase())){
            allDrinks[i].style.display = "grid";
            alert.style.display = 'none';
            matchDrinks.push(allDrinks[i])
        }else {
            allDrinks[i].style.display = "none";
        }
    })
    // for (let i = 0; i < cocktails.length; i++) {
    //     if (cocktails[i].strDrink.toLowerCase().includes(input.value.toLowerCase())) {
    //         allDrinks[i].style.display = "grid";
    //         alert.style.display = 'none';
    //         matchDrinks.push(allDrinks[i])
    //     } 
    //     else {
    //         allDrinks[i].style.display = "none";
    //     }
    // }
    if (matchDrinks.length > 0) {
        alert.style.display = "none";
        gridContainer.style.display = "grid"
        mainWord.style.display = "block"
    } else {
        alert.style.display = "block"
        gridContainer.style.display = "none"
        mainWord.style.display = "none"
    }
});

// creating word Cocktails

const mainWord = document.createElement("h1");
mainWord.classList.add("main-word");
mainWord.innerText = "Cocktails";
cocktailsWrapper.appendChild(mainWord);

// creating grid container

const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");
cocktailsWrapper.appendChild(gridContainer);

cocktails.forEach((cocktail)=>{
    const gridBox = document.createElement("div");
    gridBox.classList.add("grid-box");  
    
    const imgBox = document.createElement("div");
    imgBox.classList.add("img-box");

    const imgCocktail = document.createElement("img");
    imgCocktail.classList.add("img-cocktail");
    imgCocktail.setAttribute("src", `${cocktail.strDrinkThumb}`);
    imgCocktail.setAttribute("alt", `${cocktail.strDrink}`);
    imgBox.appendChild(imgCocktail);
    gridBox.appendChild(imgBox);
    gridContainer.appendChild(gridBox);

    const textBox = document.createElement("div");
    textBox.classList.add("text-box");

    // creating elements for text box

    const cocktailName = document.createElement("h2");
    cocktailName.classList.add("cocktail-name");
    cocktailName.innerText = `${cocktail.strDrink}`

    const cocktailGlass = document.createElement("h4");
    cocktailGlass.classList.add("cocktail-glass");
    cocktailGlass.innerText = `${cocktail.strGlass}`

    const cocktailType = document.createElement("p");
    cocktailType.classList.add("cocktail-type");
    cocktailType.innerText = `${cocktail.strAlcoholic}`

    const cocktailBtn = document.createElement("button");
    cocktailBtn.classList.add("cocktail-btn");
    cocktailBtn.innerText = "Details"

    textBox.appendChild(cocktailName);
    textBox.appendChild(cocktailGlass);
    textBox.appendChild(cocktailType);
    textBox.appendChild(cocktailBtn);
    gridBox.appendChild(textBox);

    //button
    cocktailBtn.addEventListener('click', function () {
        details.style.display = 'block';
        cocktailsWrapper.style.display = 'none';
    })
    //cocktails-details

    //button back to home
    cocktailBtn.addEventListener('click', function () {
        details.style.display = 'block';
        cocktailsWrapper.style.display = 'none';

        //back button add event listener
        const backBtn = document.querySelector(".back-btn");
        backBtn.addEventListener("click", function () {
            details.style.display = 'none';
            cocktailsWrapper.style.display = 'block';
        })
        // heading to button details
        const detailsHeading = document.querySelector(".details-heading");
        detailsHeading.innerText = `${cocktail.strDrink}`

        //img 
        const imgDiv = document.querySelector(".img-details");
        imgDiv.src = `${cocktail.strDrinkThumb}`

        //getting Name details
        const detailsName = document.querySelector("#name");
        detailsName.innerText = `${cocktail.strDrink}`

        // getting Category details
        const detailsCategory = document.querySelector("#category");
        detailsCategory.innerText = `${cocktail.strCategory}`

        // getting Info details
        const detailsInfo = document.querySelector("#info");
        detailsInfo.innerText = `${cocktail.strAlcoholic}`

        //getting Glass details
        const detailsGlass = document.querySelector("#glass");
        detailsGlass.innerText = `${cocktail.strGlass}`

        //getting Instructions details
        const detailsInstructions = document.querySelector("#instruction");
        detailsInstructions.innerText = `${cocktail.strInstructions}`

        // getting Ingredients details
        const detailsIngredients = document.querySelector("#ingerdients");
        if (cocktail.strIngredient6 !== undefined) {
            detailsIngredients.innerText = `${cocktail.strIngredient1} ${cocktail.strIngredient2} ${cocktail.strIngredient3} ${cocktail.strIngredient4} ${cocktail.strIngredient5} ${cocktail.strIngredient6}`
        } else if (cocktail.strIngredient5 !== undefined) {
            detailsIngredients.innerText = `${cocktail.strIngredient1} ${cocktail.strIngredient2} ${cocktail.strIngredient3} ${cocktail.strIngredient4} ${cocktail.strIngredient5}`
        } else if (cocktail.strIngredient4 !== undefined) {
            detailsIngredients.innerText = `${cocktail.strIngredient1} ${cocktail.strIngredient2} ${cocktail.strIngredient3} ${cocktail.strIngredient4}`
        } else if (cocktail.strIngredient3 !== undefined) {
            detailsIngredients.innerText = `${cocktail.strIngredient1} ${cocktail.strIngredient2} ${cocktail.strIngredient3}`
        } else if (cocktail.strIngredient2 !== undefined) {
            detailsIngredients.innerText = `${cocktail.strIngredient1} ${cocktail.strIngredient2}`
        } else if (cocktail.strIngredient1 !== undefined) {
            detailsIngredients.innerText = `${cocktail.strIngredient1}`
        }
    })
})


// for (let i = 0; i < cocktails.length; i++) {
//     const gridBox = document.createElement("div");
//     gridBox.classList.add("grid-box");

//     const imgBox = document.createElement("div");
//     imgBox.classList.add("img-box");

//     const imgCocktail = document.createElement("img");
//     imgCocktail.classList.add("img-cocktail");
//     imgCocktail.setAttribute("src", `${cocktails[i].strDrinkThumb}`);
//     imgCocktail.setAttribute("alt", `${cocktails[i].strDrink}`);
//     imgBox.appendChild(imgCocktail);
//     gridBox.appendChild(imgBox);
//     gridContainer.appendChild(gridBox);


//     const textBox = document.createElement("div");
//     textBox.classList.add("text-box");

//     // creating elements for text box

//     const cocktailName = document.createElement("h2");
//     cocktailName.classList.add("cocktail-name");
//     cocktailName.innerText = `${cocktails[i].strDrink}`

//     const cocktailGlass = document.createElement("h4");
//     cocktailGlass.classList.add("cocktail-glass");
//     cocktailGlass.innerText = `${cocktails[i].strGlass}`


//     const cocktailType = document.createElement("p");
//     cocktailType.classList.add("cocktail-type");
//     cocktailType.innerText = `${cocktails[i].strAlcoholic}`
//     // console.log(cocktailType)


    // const cocktailBtn = document.createElement("button");
    // cocktailBtn.classList.add("cocktail-btn");
    // cocktailBtn.innerText = "Details"

//     textBox.appendChild(cocktailName);
//     textBox.appendChild(cocktailGlass);
//     textBox.appendChild(cocktailType);
//     textBox.appendChild(cocktailBtn);
//     gridBox.appendChild(textBox);
//     //button
//     cocktailBtn.addEventListener('click', function () {
//         details.style.display = 'block';
//         cocktailsWrapper.style.display = 'none';

//     })
//     //cocktails-details

//     //button back to home
//     cocktailBtn.addEventListener('click', function () {
//         details.style.display = 'block';
//         cocktailsWrapper.style.display = 'none';

//         //back button add event listener
//         const backBtn = document.querySelector(".back-btn");
//         backBtn.addEventListener("click", function () {
//             details.style.display = 'none';
//             cocktailsWrapper.style.display = 'block';
//         })
//         // heading to button details
//         const detailsHeading = document.querySelector(".details-heading");
//         detailsHeading.innerText = `${cocktails[i].strDrink}`

//         //img 
//         const imgDiv = document.querySelector(".img-details");
//         imgDiv.src = `${cocktails[i].strDrinkThumb}`

//         //getting Name details
//         const detailsName = document.querySelector("#name");
//         detailsName.innerText = `${cocktails[i].strDrink}`

//         // getting Category details
//         const detailsCategory = document.querySelector("#category");
//         detailsCategory.innerText = `${cocktails[i].strCategory}`

//         // getting Info details
//         const detailsInfo = document.querySelector("#info");
//         detailsInfo.innerText = `${cocktails[i].strAlcoholic}`

//         //getting Glass details
//         const detailsGlass = document.querySelector("#glass");
//         detailsGlass.innerText = `${cocktails[i].strGlass}`

//         //getting Instructions details
//         const detailsInstructions = document.querySelector("#instruction");
//         detailsInstructions.innerText = `${cocktails[i].strInstructions}`

//         // getting Ingredients details
//         const detailsIngredients = document.querySelector("#ingerdients");
//         if (cocktails[i].strIngredient6 !== undefined) {
//             detailsIngredients.innerText = `${cocktails[i].strIngredient1} ${cocktails[i].strIngredient2} ${cocktails[i].strIngredient3} ${cocktails[i].strIngredient4} ${cocktails[i].strIngredient5} ${cocktails[i].strIngredient6}`
//         } else if (cocktails[i].strIngredient5 !== undefined) {
//             detailsIngredients.innerText = `${cocktails[i].strIngredient1} ${cocktails[i].strIngredient2} ${cocktails[i].strIngredient3} ${cocktails[i].strIngredient4} ${cocktails[i].strIngredient5}`
//         } else if (cocktails[i].strIngredient4 !== undefined) {
//             detailsIngredients.innerText = `${cocktails[i].strIngredient1} ${cocktails[i].strIngredient2} ${cocktails[i].strIngredient3} ${cocktails[i].strIngredient4}`
//         } else if (cocktails[i].strIngredient3 !== undefined) {
//             detailsIngredients.innerText = `${cocktails[i].strIngredient1} ${cocktails[i].strIngredient2} ${cocktails[i].strIngredient3}`
//         } else if (cocktails[i].strIngredient2 !== undefined) {
//             detailsIngredients.innerText = `${cocktails[i].strIngredient1} ${cocktails[i].strIngredient2}`
//         } else if (cocktails[i].strIngredient1 !== undefined) {
//             detailsIngredients.innerText = `${cocktails[i].strIngredient1}`
//         }
//     })
// }

//Cagatay's version 
// const detailsIngredients = document.querySelector("#ingerdients");
//     const ingredientsArray = [
//       cocktails[i].strIngredient1,
//       cocktails[i].strIngredient2,
//       cocktails[i].strIngredient3,
//       cocktails[i].strIngredient4,
//       cocktails[i].strIngredient5,
//       cocktails[i].strIngredient6,
//     ];
//     detailsIngredients.innerText = ingredientsArray.map((ingredients) => {
//         if (ingredients == undefined) return;
//         return `${ingredients}` + " ";
//     })
//       .join("");




















