$(document).ready(function () {
  let params = new URLSearchParams(window.location.search);
  let parameterValue = params.get("i");
  let parameterValueMealName = params.get("c");
  let detailMeal

  $('#nav-meal-list-by-category').attr('href', `../foodListByCategory/foodListByCategory.html?c=${parameterValueMealName}`)

  axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + parameterValue)
    .then(function (response) {
      detailMeal = response.data.meals[0]

      $('#hero-img').css('background-image', `url(${detailMeal.strMealThumb})`)

      $('#ingredients').append(
        `<h2>Ingredients :</h2>`
      )

      $('#ingredients').append(
        `<ol class="list-decimal lg:w-[70%] w-full"></ol>`
      )

      for (let i = 1; i < Object.keys(detailMeal).length; i++) {
        if (detailMeal["strIngredient" + i] === "") {
          break
        }
        $('#ingredients>ol').append(
          `
          <li class='flex justify-start lg:justify-between lg:gap-0 flex-wrap mt-3' >
            <span class="w-[50%] text-left">
            ${i + ". " + detailMeal["strIngredient" + i]} 
            </span>
            <span class="w-[50%] text-left">
            (${detailMeal["strMeasure" + i]})
            </span>
          </li>
          `
        )
      }

      $('#instruction').append(
        `<h2>Instruction :</h2>`
      )

      $('#instruction').append(
        `<ol class="list-decimal lg:w-[70%] w-full"></ol>`
      )

      let arr = detailMeal.strInstructions.split(/[\r\n]/);

      for (let index = 0; index < arr.length; index++) {
        if (arr[index] !== "") {
          $('#instruction>ol').append(
            `
            <li class='mt-5'>${arr[index]}</li>
              
              `
          )
        }
      }

      $('#youtube').append(
        `<h2>youtube :</h2>`
      )

      $('#youtube').append(
        `<a href=${detailMeal.strYoutube} class="w-full mb-10 block text-red-400 underline">See the youtube tutorial here</a>`
      )
    })

    .catch(function (error) {
      console.log(error)
    })

})