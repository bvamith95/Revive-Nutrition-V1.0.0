const QUIZ_DATA= [
  {
  category: 'General',
  questions: [
    {
        questionText: 'Do you have an account with us?',
        id: 1,
        answerOptions: [
          { answerText: 'Yes', haveAccount: true },
          { answerText: 'No', haveAccount: false },
        ],
        questionTemplate: 2,          
      },

      {
        questionText: 'What is your Name?',
        id: 2,
        questionTemplate: 5,        
      },
      {
        questionText: 'What is your Email?',
        id: 3,
        questionTemplate: 5,                
      },
      {
        questionText: 'What sex were you assigned at birth?',
        id: 4,
        answerOptions: [
          { answerText: 'Male', sex: 'Male' },
          { answerText: 'Female', sex: 'Female' },
        ],
        questionTemplate: 2,         
      },
      {
        questionText: 'How old are you?',
        id: 5,
        answerOptions: [
          { answerText: '0-18', age: '0-18' },
          { answerText: '18-24', age: '18-24' },
          { answerText: '25-34', age: '25-34' },
          { answerText: '35-44', age: '35-44' },
          { answerText: '45-54', age: '45-54' },
          { answerText: '55+', age: '55+' },
        ],
        questionTemplate: 4,          
      },
      {
        questionText: 'Do you take nutritional supplemennts (Vitamins,Minerals etc)?',
        id: 6,
        answerOptions: [
          { answerText: 'Yes', takeSupplements: true },
          { answerText: 'No', takeSupplements: false },
        ],
        questionTemplate: 2,          
      },
      {
        questionText: 'Which areas are you looking to improve?',
        id: 7,
        answerOptions: [
          { answerText: 'Sleep', goalContext: 'sleep', contextScore: 1 },
          { answerText: 'Energy',goalContext: 'energy', contextScore: 1  },
          { answerText: 'Stress & Anxiety', goalContext: 'stress', contextScore: 1 },
          { answerText: 'Immunity', goalContext: 'immunity', contextScore: 1 },
          { answerText: 'Bones & Muscles', goalContext: 'bones', contextScore: 1 }
        ],
        questionTemplate: 3,          
      },
      {
        questionText: 'Are you also looking at improving the following?',
        id: 8,
        answerOptions: [
          { answerText: 'Alcohol Detox', goalContext: 'detox-m', contextScore: 1 },
          { answerText: 'Digital Detox',goalContext: 'detox-c', contextScore: 1  },
          { answerText: 'Post Workout-Recovery', goalContext: 'recovery', contextScore: 1 },
          { answerText: 'Skin', goalContext: 'skin', contextScore: 1 },
          { answerText: 'Hair & Nails', goalContext: 'hair', contextScore: 1 }
        ],
        questionTemplate: 3,          
      }
    ] 
}, 

// {
// category: 'Diet',
// questions: [
//   {
//       questionText: 'How many portions of fruits/ vegetables do you usually eat a day?',
//       answerOptions: [
//         { answerText: '0-2', goalContext: 'energy', contextScore: 1 },
//         { answerText: '2 to 5',goalContext: 'energy', contextScore: 0  },
//         { answerText: '5+', goalContext: 'energy', contextScore: -1 },

//       ], 
             
//     },
    
//     {
//       questionText: 'How many glasses of water do you generally drink each day?',
//       answerOptions: [
//         { answerText: '0-5'},
//         { answerText: '5 to 8' },
//         { answerText: '8+' },

//       ],          
//     },

//     {
//       questionText: 'How many caffeinated drinks do you have a day?',
//       answerOptions: [
//         { answerText: 'None'},
//         { answerText: '1 to 3'},
//         { answerText: '4 or more'},

//       ],          
//     },

// // For unique questions as the one in Detox , Use unique goalContext dotox-m,detox-c and set custom logic for its use

//     {
//       questionText: 'Do you drink alcohol 2 times a week or more?',
//       answerOptions: [
//         { answerText: 'Yes', goalContext: 'detox-m', contextScore: 1 },
//         { answerText: 'I drink only socially',goalContext: 'detox-m', contextScore: 0  },
//         { answerText: 'I don’t drink', goalContext: 'detox-m', contextScore: -1 },

//       ],          
//     },

//     {
//       questionText: 'Do you smoke  2 times a week or more?',
//       answerOptions: [
//         { answerText: 'Yes', goalContext: 'detox-c', contextScore: 1 },
//         { answerText: 'I smoke only socially',goalContext: 'detox-c', contextScore: 0  },
//         { answerText: 'I don’t smoke', goalContext: 'detox-c', contextScore: -1 },

//       ],          
//     },
//     {
//       questionText: 'How often do you order-out?',
//       answerOptions: [
//         { answerText: 'Every Day', goalContext: 'energy', contextScore: 1 },
//         { answerText: 'Every Now & Then',goalContext: 'energy', contextScore: 0  },
//         { answerText: 'Hardly Ever!', goalContext: 'energy', contextScore: -1 },

//       ],          
//     },
//   ] 
// },


]

export default QUIZ_DATA;