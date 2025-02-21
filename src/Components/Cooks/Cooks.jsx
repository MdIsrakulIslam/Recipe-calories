import React from 'react';

export default function Cooks({ cooks }) {
  return (
    <div className="md:w-1/3 p-4 gap-5">
      <h2 className="text-2xl font-bold mb-4 text-center mt-56 border-b-1">Want to Cook: {cooks.length}</h2>
      {cooks.length === 0 ? (
        <p className="text-gray-600 text-center">You haven't selected any recipes yet!</p>
      ) : (
        <table className="w-full   ">
          <thead>
            <tr className="">
            <th className="pb-2"></th>
              <th className="pb-2">Name</th>
              <th className="pb-2">Time</th>
              <th className="pb-2">Calories</th>
              
            </tr>
          </thead>
          <tbody >
            {cooks.map((cook,index)=>(
              <tr className='bg-gray-300' key={index}>
                <td className="">{index + 1}</td>
                <td className=" pl-10">{cook.recipe_name}</td>
                <td className="pl-13">{cook.preparing_time} minutes</td>
                <td className="pl-12">{cook.calories} calories</td>
                <td className="">
                  <button className="bg-[#0BE58A] text-white px-3 py-1 rounded-full">
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

