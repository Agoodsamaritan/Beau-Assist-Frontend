import React, { useState } from 'react';

export default function Quiz() {
  const questions = [
    {
      questionText: "What is your skin type?",
      answerOptions: [
        { "id": "A", "value": "Oily" },
        { "id": "B", "value": "Dry" },
        { "id": "C", "value": "Combination" },
        { "id": "D", "value": "Normal" },
        { "id": "E", "value": "Sensitive" }
      ]
    },
    {
      questionText: "What is your age range?",
      answerOptions: [
        { "id": "A", "value": "13-17" },
        { "id": "B", "value": "18-24" },
        { "id": "C", "value": "25-34" },
        { "id": "D", "value": "35-44" },
        { "id": "E", "value": "45-54" },
        { "id": "F", "value": "55+" }
      ]
    },
    {
      questionText: "What are your main skin concerns?",
      answerOptions: [
        { "id": "A", "value": "Acne" },
        { "id": "B", "value": "Fine lines and wrinkles" },
        { "id": "C", "value": "Dullness and uneven texture" },
        { "id": "D", "value": "Hyper pigmentation" },
        { "id": "E", "value": "Redness and sensitivity" },
        { "id": "F", "value": "Enlarged pores" },
        { "id": "G", "value": "Dehydration" },
        { "id": "H", "value": "Loss of firmness and elasticity" }
      ]
    }  
  ]    
  
  const recommendations = [
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
    {
    "skinType": "Dry",
      "ageRange": "35-44",
      "concerns": ["Fine lines and wrinkle"],
      "routine": [
        "Foaming cleanser",
        "Hydration toner",
        "Gentle Moisturizer",
        "Sunscreen",
        "Extra Hydration Night Cream)"
      ]
    },
    ]
      
  

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showThanks, setShowThanks] = useState(false)

  const handleAnswerOptionClick = () => {
    // if (isCorrect) {
    //   setScore(score + 1);
    // }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // <h1>Thanks for answering our questions.</h1>
      setShowThanks(true);
    }
  };

    const [skinType, setSkinType] = useState('')
    const [ageRange, setAgeRange] = useState('')
    const [skinConcerns, setSkinConcerns] = useState('')

    const handleSkinTypeSelection = (selectedOption) => {
        setSkinType(selectedOption.value);
    }

    const handleAgeRangeSelection = (selectedOption) => {
        setAgeRange(selectedOption.value);
    }

    const handleSkinConcernsSelection = (selectedOptions) => {
        const selectedValues = selectedOptions.map((option) => option.value);
        setSkinConcerns(selectedValues);
    }

    const findRecommendation = () => {
        const recommendations = recommendations.find((rec) => {
            
        })
    }
   
  return (
    <div className='thanks-message'>
      {showThanks ? (
        <div className='score-section'>
          <h1>Thanks for answering</h1>
        </div>
  ) : (
        <div className="flex justify-center pt-12 pb-12">
          <div className="block max-w-xl rounded-lg bg-white p-8 shadow-lg dark:bg-neutral-700">
            <h1 className="mb-5 text-3xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </h1>
          <div className='question-text'>{questions[currentQuestion].questionText}</div>
          <div className="flex p-8 grid grid-cols-2 gap-4 ">
          {questions[currentQuestion].answerOptions.map((answerOption) => (
              ( <label key={answerOption.id} >  
                  <button className="w-48 font-xl font-bold uppercase text-white py-3 px-10 font-bold text-xl uppercase bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-lg rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleAnswerOptionClick()}>
                    {answerOption.value}
                  </button>
                </label>
              )
            ))}
          </div>

            
          </div>
        </div>      
      )}            
    </div>
  )
}