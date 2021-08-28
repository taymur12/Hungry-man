const btnSearch = () => {
    const inputField = document.getElementById('input-Field')
    const inputFieldText = inputField.value
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputFieldText}`
    fetch(url)
        .then(res => res.json())
        .then(Data => displayFood(Data.meals))
    inputField.value = ''
}

const displayFood = food => {
    const cardId = document.getElementById('card')
    food.forEach(foods => {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `<div class="card h-100 w-75 mx-auto carditem">
        <img src="${foods.strMealThumb}" class="card-img-top" alt="Food">
        <div class="card-body">
          <h5 class="card-title">${foods.strMeal}</h5>
          <p class="card-text">${foods.strInstructions.slice(0,200)}</p>
        </div>
      </div>`
        cardId.appendChild(div)


    });
}