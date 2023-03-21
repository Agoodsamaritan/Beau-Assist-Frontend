import React, { useState } from 'react';

export default function Quiz() {
    const jsonData = 
            
        {
            "quiz": {
              "questions": [
                {
                  "id": 1,
                  "question": "What is your skin type?",
                  "options": [
                    { "id": "A", "value": "Oily" },
                    { "id": "B", "value": "Dry" },
                    { "id": "C", "value": "Combination" },
                    { "id": "D", "value": "Normal" },
                    { "id": "E", "value": "Sensitive" }
                  ]
                },
                {
                  "id": 2,
                  "question": "What is your age range?",
                  "options": [
                    { "id": "A", "value": "13-17" },
                    { "id": "B", "value": "18-24" },
                    { "id": "C", "value": "25-34" },
                    { "id": "D", "value": "35-44" },
                    { "id": "E", "value": "45-54" },
                    { "id": "F", "value": "55+" }
                  ]
                },
                {
                  "id": 3,
                  "question": "What are your main skin concerns?",
                  "options": [
                    { "id": "A", "value": "Acne" },
                    { "id": "B", "value": "Fine lines and wrinkles" },
                    { "id": "C", "value": "Dullness and uneven texture" },
                    { "id": "D", "value": "Hyperpigmentation" },
                    { "id": "E", "value": "Redness and sensitivity" },
                    { "id": "F", "value": "Enlarged pores" },
                    { "id": "G", "value": "Dehydration" },
                    { "id": "H", "value": "Loss of firmness and elasticity" }
                  ]
                }
              ],
              "recommendations": [
                {
                  "skinType": "Oily",
                  "ageRange": "13-17",
                  "concerns": ["Acne"],
                  "routine": [
                    "Gentle foaming cleanser",
                    "Salicylic acid toner",
                    "Oil-free moisturizer",
                    "Sunscreen",
                    "Spot treatment (as needed)"
                  ]
                },
                {
                  "skinType": "Oily",
                  "ageRange": "18-24",
                  "concerns": ["Acne"],
                  "routine": [
                    "Gentle foaming cleanser",
                    "Salicylic acid toner",
                    "Oil-free moisturizer",
                    "Sunscreen",
                    "Retinol serum (PM, alternate nights)"
                  ]
                },
                
              ]
            }
          }

   
return (

        <div className="flex justify-center pt-12 pb-12">
        <div className="block max-w-xl rounded-lg bg-white p-8 shadow-lg dark:bg-neutral-700">
        {jsonData.quiz.questions[0].options.map(option => 
        ( <label key={option.id} >
        <h1 className="mb-5 text-3xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            What is your skin type ? </h1>
        
        <div className="flex p-8 grid grid-cols-2 gap-8">
        <button className="w-48 font-xl font-bold uppercase text-white py-3 px-10  font-bold text-xl uppercase bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-lg rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {option.value}
        </button>
        
        </div>
        </label>
        ))}
        </div>
        </div>
      

    // <div className="flex justify-center pt-12 pb-12">
    //     <div className="block max-w-xl rounded-lg bg-white p-8 shadow-lg dark:bg-neutral-700">
    //    <h1 className='mb-5 text-3xl font-medium leading-tight text-neutral-800 dark:text-neutral-50'>
    //      Skin Care Routine Quiz</h1>
    
    // {jsonData.quiz.questions[0].options.map(option => (
    //     <label key={option.id}>
    //         <div className="flex p-8 grid grid-cols-2 gap-8">
    //         <button className="text-white py-3 px-10 font-bold text-xl uppercase bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-lg rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" name="skinType" value={option.value} onChange={() => setSkinType(option.value)}
    //         required> {option.value}</button></div>
    //    </label>
    // ))}
    


    
    // </div>
    // </div>
)
}