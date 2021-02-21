const searchFood = () =>{
    const search = document.getElementById('search-field').value;
    if(search == ""){
        // const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${search}`
const url = `https://www.themealdb.com/api/json/v1/1/random.php`
fetch(url)
    .then( res => res.json())
    .then(data => displayCategory(data));
}

    else if(search == " " ||!isNaN(search)){
        // alert("please Input a first letter of food");
        const noResult =`<h4 class ="no-result">NO SEARCH RESULT ARE FOUND</h4>`
        const foodCategories = document.getElementById('food-categori');
        foodCategories.innerHTML = noResult;

    }
    
    else{
        // const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${search}`
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
    fetch(url)
        .then( res => res.json())
        .then(data => displayCategory(data))
        
    }
}

const displayCategory = item =>{

    
    const foodCategories = document.getElementById('food-categori');
    const items = item.meals;
    console.log(items);

    items.forEach(element => {


        const foodDiv = document.createElement('div');
        foodDiv.className = 'col topu';


        const foodName = element.strMeal;
       const image = element.strMealThumb;
       const price = element.idMeal;
       
        const foodList =`
        
        <div class="card h-100">
          <img src="${image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${foodName}</h5>
            
            <li class="ingradents">${element.strIngredient1}</li>
            <li class="ingradents">${element.strIngredient2}</li>
            <li class="ingradents">${element.strIngredient3}</li>
            <li class="ingradents">${element.strIngredient4}</li>
            <li class="ingradents">${element.strIngredient5}</li>

          </div>
          <div class="card-footer d-flex justify-content-around">
            <h3 class="">$${price}</h3>
            <a href="#" class="btn btn-primary">BUY NOW</a>
          </div>
        </div>
      
        `
    foodDiv.innerHTML = foodList;
    foodCategories.appendChild(foodDiv);
    });


}











const searchRandomFood =() =>{
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then( res => res.json())
    .then(data => displayRandomCategory(data));
}


const displayRandomCategory = item =>{

    
    const foodCategories = document.getElementById('randomCategory');
    const items = item.meals;
    

    items.forEach(element => {


        const foodDiv = document.createElement('div');
        foodDiv.className = 'col topu';


        const foodName = element.strMeal;
       const image = element.strMealThumb;
       const price = element.idMeal;
       
        const foodList =`
        
        <div class="card bg-dark text-white">
        <img src="${image}" class="card-img" alt="...">
        <div class="card-img-overlay-own">
          <h5 class="card-title">${foodName}</h5>
          <p class="card-text">we are all about we are all about to the fullest and all content dining out or in!dining out or in!</p>
          <p class="card-text">Last updated 3 mins ago</p>
          <div class="d-flex flex-row-reverse">
            <p class="order">Book Now</p>
          </div>
        </div>
      </div>
            
        

         
      
        `
        
    foodDiv.innerHTML = foodList;
    foodCategories.appendChild(foodDiv);
    console.log(foodDiv);
    });


}




