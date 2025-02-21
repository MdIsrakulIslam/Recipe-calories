import { useEffect, useState } from "react";
import { Clock3 } from 'lucide-react';
import { Flame } from 'lucide-react';


const Recipe = ({handleAddToCook}) => {
const [recipes,setRecipes]= useState([]);

 useEffect(()=>{
    fetch("food.json")
    .then((res)=>res.json())
    .then((data)=>setRecipes(data.recipes))
 },[]);


  return (
    <div className="pt-8 md:w-2/3 ml-70">
      <h1 className="text-3xl font-bold text-center">Our Recipes</h1>
      <p className="mt-4 text-center max-w-lg mx-auto">
        Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
        vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum
        mauris aenean neque.
      </p>
      <h2 className="mt-6 text-xl font-semibold">
        Total Recipes: {recipes.length}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
        {recipes.map((food) => (
          <div
            key={food.recipe_id}
            className="p-4 border rounded-lg shadow-md hover:shadow-lg transition"
          >
            <img
              src={food.recipe_image}
              alt={food.recipe_name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="mt-4 text-lg font-bold">{food.recipe_name}</h3>
            <p className="text-sm text-gray-600 border-b-2 pb-2">{food.short_description}</p>

            <div className="mt-4">
              <strong>Ingredients: {food.ingredients.length}</strong>
              <ul className="list-disc list-inside mt-2 text-sm border-b-2 pb-2">
                {food.ingredients.slice(0, 3).map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <p className="mt-2 text-sm flex gap-2">
               <div className="flex gap-1">
               <Clock3 /> {food.preparing_time} 
               </div>
             <div className="flex">
             <Flame />{food.calories}
             </div>
            </p>
            <div className="pt-2">
            <button onClick={()=>handleAddToCook(food)} className="border rounded-full p-2 bg-[#0BE58A]">Want to Cook</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipe;


 