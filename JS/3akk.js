for (let i = 0; i < arr.length; i++) {
  cartoona += `
    <div class="col-md-3">
      <div onclick="getMealDetails('${arr[i].idMeal}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
        <img class="w-100" src="${arr[i].strMealThumb}" alt="" srcset="">
        <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
          <h3>${arr[i].strMeal}</h3>
        </div>
      </div>
    </div>`;
}