$(document).ready(function () {
  let foodListCategory

  axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(function (response) {
      foodListCategory = response.data.categories


      $.map(foodListCategory, function (value, index) {
        
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + value.strCategory)
          .then(function (response) {
            return $('main').append(
              `
            <div class="bg-white rounded-2xl p-3 w-60 h-72 shadow-md relative z-10 group hover:-translate-y-3 transition-all duration-500">
            <div class="bg-[#E9E6E5] rounded-lg w-full aspect-square overflow-hidden bg-cover bg-center cursor-pointer"
              style="background-image: url(${value.strCategoryThumb});">
            </div>
            <div class="flex justify-between mt-4">
              <h2 class="flex-1 group-hover:text-red-400 transition-all duration-500">${value.strCategory}</h2>
              <p class="text-gray-400 text-sm">${response.data.meals.length} Recipes</p>
            </div>
          </div>
              `
            )
          })
          .catch(function (error) {
            console.log(error)
          })
      });

    })
    .catch(function (error) {
      console.log(error)
    })
    .finally(function () {
      console.log(foodListCategory)
    })
})