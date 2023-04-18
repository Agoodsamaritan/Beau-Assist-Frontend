import React, { useState } from 'react';

export default function Quiz() {
  const questions = [
    {
      questionText: "What is your skin type?",
      answerOptions: [
        { "id": "A", "value": "Oily" },
        { "id": "B", "value": "Dry" },
        { "id": "C", "value": "Mature" },
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
  
  const recommendationsData = [
    {
      "id": 1,
      "skinType": "Oily",
      "ageRange": "13-17",
      "concern": "Acne",
      "routine": [
        "Gentle foaming cleanser",
        "Salicylic acid toner",
        "Oil-free moisturizer",
        "Sunscreen",
        "Spot treatment (as needed)"
      ], 
      "video_link": "https://www.tiktok.com/embed/v2/7121944280456858926"
    },
    {
      "id": 2,
      "skinType": "Oily",
      "ageRange": "18-24",
      "concern": "Acne",
      "routine": [
        "Gentle foaming cleanser",
        "Salicylic acid toner",
        "Oil-free moisturizer",
        "Sunscreen",
        "Retinol serum (PM, alternate nights)"

      ],
      "video_link": "https://www.tiktok.com/embed/v2/7200851393245121798"
    },
    {
      "id": 3,
      "skinType": "Dry",
      "ageRange": "35-44",
      "concern": "Fine lines and wrinkles",
      "routine": [
        "Foaming cleanser",
        "Hydration toner",
        "Gentle moisturizer",
        "Sunscreen",
        "Extra hydration night cream"
      ],
      "video_link": "https://www.tiktok.com/embed/v2/7206001722584534273"
    },
    {
      "id": 4,
      "skinType": "Dry",
      "ageRange": "45-54",
      "concern": "Fine lines and wrinkles",
      "routine": [
        "Foaming cleanser",
        "Hydration toner",
        "Gentle moisturizer",
        "Sunscreen",
        "Extra hydration night cream"
      ],
      "video_link": "https://www.tiktok.com/embed/v2/7172739283202198790"
    },
    {
      "id": 5,
      "skinType": "Mature",
      "ageRange": "55+",
      "concern": "Loss of firmness and elasticity",
      "routine": [
        "Cream cleanser",
        "Hydrating toner",
        "Rich moisturizer",
        "Sunscreen",
        "Firming serum (AM and PM)",
        "Brightening serum (AM and PM)",
        "Eye cream (AM and PM)"
      ],
      "video_link": "https://www.tiktok.com/embed/v2/7175221365329513774"
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showRoutine, setShowRoutine] = useState(false)

  const [userResponses, setUserResponses] = useState({
    skinType: '',
    ageRange: '',
    concern: ''
  });

  const handleAnswerOptionClick = (value) => {
    if (currentQuestion === 0) {
      setUserResponses({
        ...userResponses,
        skinType: value
      });
    } else if (currentQuestion === 1) {
      setUserResponses({
        ...userResponses,
        ageRange: value
      });
    } else if (currentQuestion === 2) {
      setUserResponses({
        ...userResponses,
        concern: value
      });
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // <h1>Thanks for answering our questions.</h1>
      setShowRoutine(true);
    }
  };

  const matchingRecommendation = recommendationsData.find((recommendation) => {
    return (
      recommendation.skinType === userResponses.skinType &&
      recommendation.ageRange === userResponses.ageRange &&
      recommendation.concern === userResponses.concern
    )
  });
  
  const recommendationId = matchingRecommendation ? matchingRecommendation.id : null;
 
  return (
    <div className='thanks-message'>
      {showRoutine ? (
        <div className="flex justify-center relative pb-12">
          <div className="block max-w-xl rounded-lg bg-white p-8 shadow-lg">
            <h1 className="flex justify-center mb-5 text-3xl font-medium leading-tight text-neutral-800">
              Thanks for answering
            </h1>
            <div className='grid gap-4 grid-cols-2'>
              <a className="w-48 font-xl font-bold uppercase text-white py-3 px-10 font-bold text-xl uppercase bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-lg rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
              type="button" href="/Products">SHOP PRODUCTS</a>
              <a className="w-48 font-xl font-bold uppercase text-white py-3 px-10 font-bold text-xl uppercase bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-lg rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
              type="button" href="/Quiz">RETRY THE QUIZ</a>
            </div>
          
            <div className="block max-w-xl p-8">
            {!matchingRecommendation ? (
              <h3 className="flex justify-center mb-5 text-3xl font-medium leading-tight text-neutral-800">
                Sorry, recommendation is not available. 
              </h3>
            ) : (
              <>
                <h3 className="mb-5 text-3xl font-medium leading-tight text-neutral-800">
                  Here's the suggested routine:
                </h3>
                <ul>
                  {matchingRecommendation.routine.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul><br></br>
                <div className='absolute relative overflow-hidden pt-56.25%'>
                  <iframe title={recommendationId} className="top-0 left-0 w-full h-full" src={matchingRecommendation.video_link} frameborder="0" allowFullScreen style={{maxWidth: '605px', minWidth: '325px', minHeight: '720px'}} />
                </div>
              </>  
            )}  
          </div>
          </div>    
        </div>
  ) : (
        <div className="flex justify-center pt-12 pb-12">
          <div className="block max-w-xl rounded-lg bg-white p-8 shadow-lg">
            <h1 className="mb-5 text-3xl font-medium leading-tight text-neutral-800">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </h1>
          <div className='question-text'>{questions[currentQuestion].questionText}</div>
          <div className="flex p-8 grid grid-cols-2 gap-4 ">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              ( <label key={answerOption.id} >  
                  <button className="w-48 font-xl font-bold uppercase text-white py-3 px-10 font-bold text-xl uppercase bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-lg rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleAnswerOptionClick(answerOption.value)}>
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