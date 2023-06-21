$(document).ready(function () {
  let params = new URLSearchParams(window.location.search);
  let parameterValue = params.get("c");
  let foodListCategory

  axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
  .then(function (response) {
    foodListCategory = response.data.categories
    foodListCategory = foodListCategory.find((value) => value.strCategory === parameterValue)
  })
  .catch(function (error) {
    console.log(error)
  })

  
  axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + parameterValue)
    .then(function (response) {

    })
    .catch(function (error) {
      console.log(error)
    })

})