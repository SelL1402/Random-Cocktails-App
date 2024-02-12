function getRandomCocktail(){
  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  .then((resp) => {return resp.json()})
  .then((data) => {
    console.log(data)
    document.querySelector(".cocktail-name").innerHTML = data.drinks[0].strDrink
    document.querySelector(".cocktail-img-pic").src = data.drinks[0].strDrinkThumb
    document.querySelector(".instructions-text").innerHTML = data.drinks[0].strInstructions

    let ingredients = document.querySelector(".ingredients")
    let measure = document.querySelector(".measure-list")

    for(let i=1; i<16; i++){
      if(data.drinks[0][`strIngredient${i}`] == null){
        break
      }
      let item = document.createElement('li');
      item.innerHTML = data.drinks[0][`strIngredient${i}`];
      ingredients.appendChild(item);
    }


    for(let g=1; g<16; g++){
      if(data.drinks[0][`strIngredient${g}`] == null){
        break
      }
      let item = document.createElement('li');
      item.innerHTML = data.drinks[0][`strIngredient${g}`] + ": " + data.drinks[0][`strMeasure${g}`];
      measure.appendChild(item);
    }

  }
    )
    .catch(function(err) {
    console.log('Fetch Error :-S', err);
    });
}

getRandomCocktail()
