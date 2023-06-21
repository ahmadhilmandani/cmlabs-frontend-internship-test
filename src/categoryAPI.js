axios.get('https://www.themealdb.com/api/json/v1/1/categories.php ')
.then(function (response) {
  // Handle response dari server
  console.log(response.data);
})
.catch(function (error) {
  // Handle error jika permintaan gagal
  console.log(error);
});