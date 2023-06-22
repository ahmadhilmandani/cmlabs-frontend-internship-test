$(document).ready(function () {
  let params = new URLSearchParams(window.location.search);
  let parameterValue = params.get("c");
  let foodCategory
  let foodListByCategory

  $('#nav-meal-list-by-category').attr('href', `foodListByCategory.html?c=${parameterValue}`)
  axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(function (response) {
      foodCategory = response.data.categories
      foodCategory = foodCategory.find((value) => value.strCategory === parameterValue)

      $('#hero-img').css('background-image', `url(${foodCategory.strCategoryThumb})`)
      $('#header-content').append(
        `
      <h1 class=text-2xl>${foodCategory.strCategory}</h1>
      <p class="mt-5">${foodCategory.strCategoryDescription}</p>
      `
      )
    })
    .catch(function (error) {
      console.log(error)
    })


  axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + parameterValue)
    .then(function (response) {
      foodListByCategory = response.data.meals

      $.map(foodListByCategory, function (value, index) {
        $('main>div').append(
          `
          <a href=../detailMeal/detailMeal.html?i=${value.idMeal}&c=${parameterValue}>
            <div class="bg-white rounded-2xl p-3 w-60 min-h-72 shadow-md relative z-10 group hover:-translate-y-3 transition-all duration-500">
              <div class="bg-[#E9E6E5] rounded-lg w-full aspect-square overflow-hidden bg-cover bg-center cursor-pointer"
                style="background-image: url(${value.strMealThumb});">
              </div>
              <div class="flex justify-between mt-4">
                <h2 class="flex-1 group-hover:text-red-400 transition-all duration-500 line-clamp-2">${value.strMeal}</h2>
              </div>
            </div>
          </a>
          `
        )
      })
    })
    .catch(function (error) {
      console.log(error)
    })

})