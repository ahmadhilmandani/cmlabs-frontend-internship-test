// // https://www.themealdb.com/api/json/v1/1/categories.php

// let categories
// let filterCategories
// let detailMeal

// axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
//   .then(function (response) {
//     categories = response.data.categories
//     console.log(response.data.categories[0].strCategory)
//     console.log(response.data.categories)

//     for (let index = 0; index < categories.length; index++) {
//       axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + categories[index].strCategory)
//         .then(function (response) {
//           filterCategories = response.data.meals
//           console.log(filterCategories);

//           for (let index = 0; index < filterCategories.length; index++) {
//             axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + filterCategories[index].idMeal)
//               .then(function (response) {
//                 detailMeal = response.data
//                 console.log(detailMeal)

//               })

//               .catch(function (error) {
//                 console.log(error)
//               })
//           }
//         })

//         .catch(function (error) {
//           console.log(error)
//         })

//     }

//     // axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c='+)
//     //   .then(function (response) {

//     //   })

//     //   .catch(function (error) {
//     //     console.log(error)
//     //   })

//   })

//   .catch(function (error) {
//     console.log(error)
//   })
