// Random meal body call from html
const meals = document.getElementById('meals')

getRandomMeal()
async function getRandomMeal() {
  // feching random meals
  const resp = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');

  const respData = await resp.json()
  const randomMeal = respData.meals[0];
  console.log(randomMeal)

// calling the addMeal function
  addMeal(randomMeal, true)
}



async function getMealById(id){
  const meal = await fetch('www.themealdb.com/api/json/v1/1/lookup.php?i='+ id);
}

async function getMealBySearch(term){
  const meals = await fetch('www.themealdb.com/api/json/v1/1/search.php?s=' +term);
}



function addMeal(mealData, random = false){
  //Creating a div and adding a class-name on it and the innerText
  const meal = document.createElement('div');
  meal.classList.add('meal')
  
  meal.innerHTML = 
  
  `<div class="meal-header">
    ${random ? `<span class="random">Random Recipe</span>` : '' }
    
    <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
  </div>
  <div class="meal-body">
    <h4>${mealData.strMeal}</h4>
    <button class="active fav-btn ">
      <i class="fas fa-heart"></i>
    </button>
  </div>`;

  const btn = meal.querySelector('.meal-body .fav-btn');
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    
  });

  meals.appendChild(meal);
}

