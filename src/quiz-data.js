const QUIZ_DATA= [ 
  {
  category: 'All Questions',
  questions: [ 
    // General
    { 
        questionText: 'Do you have an account with us?',
        id: 0,
        name: "haveAccount",
        answerOptions: [
          { answerText: 'Yes', answerValue: true },
          { answerText: 'No', answerValue: false },
        ],
        questionTemplate: 2,          
      },
 
      {
        questionText: 'What is your Name?',
        type: "text",
        name: "name",
        id: 1,
        questionTemplate: 5,        
      },
      {
        questionText: 'What is your Email?',
        type: "email",
        name: "email",
        id: 2,
        questionTemplate: 5,                
      },
      {
        questionText: 'What sex were you assigned at birth?',
        id: 3,
        name: "sex",
        answerOptions: [
          { answerText: 'Male',  answerValue: "Male" },
          { answerText: 'Female',  answerValue: "Female"},
        ],
        questionTemplate: 2,         
      },
      {
        questionText: 'How old are you?',
        id: 4,
        name: "age",
        answerOptions: [
          { answerText: '0-18',  answerValue: "0-18" },
          { answerText: '18-24',  answerValue: "18-24" },
          { answerText: '25-34',  answerValue: "25-34" },
          { answerText: '35-44',  answerValue: "35-44" },
          { answerText: '45-54',  answerValue: "45-54" },
          { answerText: '55+',  answerValue: "55+" },
        ],
        questionTemplate: 4,          
      },
      {
        questionText: 'Do you take nutritional supplemennts (Vitamins,Minerals etc)?',
        id: 5,
        name:"takeSupplement",
        answerOptions: [
          { answerText: 'Yes',  answerValue: true },
          { answerText: 'No',  answerValue: false },
        ],
        questionTemplate: 2,          
      },
      {
        questionText: 'Which areas are you looking to improve the most?',
        id: 6,
        name: "to_improve",
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
        questionText: 'Are you also looking at improving any one of the following?',
        id: 7,
        name: "also_to_improve",
        answerOptions: [
          { answerText: 'Alcohol Detox', goalContext: 'detoxA', contextScore: 1 },
          { answerText: 'Digital Detox',goalContext: 'detoxD', contextScore: 1  },
          { answerText: 'Post Workout-Recovery', goalContext: 'recovery', contextScore: 1 },
          { answerText: 'Skin', goalContext: 'skin', contextScore: 1 },
          { answerText: 'Hair & Nails', goalContext: 'skin', contextScore: 1 }
        ],
        questionTemplate: 3,          
      },

    // DIET

    {
      questionText: 'How many portions of fruits/ vegetables do you usually eat a day?',
      answerOptions: [ 
        { answerText: '0-2', goalContext: 'energy', contextScore: 1 },
        { answerText: '2 to 5',goalContext: 'energy', contextScore: 0  },
        { answerText: '5+', goalContext: 'energy', contextScore: -1 },

      ], 
      id: 8,
      questionTemplate: 1,
             
    },
    
    {
      questionText: 'How many glasses of water do you generally drink each day?',
      answerOptions: [
        { answerText: '0-5'},
        { answerText: '5 to 8' },
        { answerText: '8+' },

      ],  
      id: 9,
      questionTemplate: 1,        
    },

    {
      questionText: 'How many caffeinated drinks do you have a day?',
      answerOptions: [
        { answerText: 'None'},
        { answerText: '1 to 3'},
        { answerText: '4 or more'},

      ],   
      id: 10,        
      questionTemplate: 1,
    },

// For unique questions as the one in Detox , Use unique goalContext dotox-m,detox-c and set custom logic for its use

    {
      questionText: 'Do you drink alcohol 2 times a week or more?',
      answerOptions: [
        { answerText: 'Yes', goalContext: 'detoxA', contextScore: 1 },
        { answerText: 'I drink only socially',goalContext: 'detoxA', contextScore: 0  },
        { answerText: 'I don’t drink', goalContext: 'detoxA', contextScore: -1 },

      ],
      id: 11,        
      questionTemplate: 1,  
    },

    {
      questionText: 'Do you smoke  2 times a week or more?',
      answerOptions: [
        { answerText: 'Yes', goalContext: 'blood', contextScore: 1 },
        { answerText: 'I smoke only socially',goalContext: 'blood', contextScore: 0  },
        { answerText: 'I don’t smoke', goalContext: 'blood', contextScore: -1 },

      ], 
      id: 12,         
      questionTemplate: 1,
    },
    {
      questionText: 'How often do you order-out?',
      answerOptions: [
        { answerText: 'Every Day', goalContext: 'energy', contextScore: 1 },
        { answerText: 'Every Now & Then',goalContext: 'energy', contextScore: 0  },
        { answerText: 'Hardly Ever!', goalContext: 'energy', contextScore: -1 },

      ],    
      id: 13,
      questionTemplate: 1,      
    },

    // EXCERSIZE

    {
      questionText: 'How often do you exercise each week?',
      answerOptions: [
        { answerText: 'Hardly Ever', goalContext: 'energy', contextScore: 1 },
        { answerText: '1-4 days',goalContext: 'energy', contextScore: 0  },
        { answerText: '5+ days', goalContext: 'energy', contextScore: -1 },

      ], 
      id: 14,
      questionTemplate: 1,
             
    },
    
    {
      questionText: 'What typed of exercise do you prefer?',
      answerOptions: [
        { answerText: 'Cardio ( Run,Swim,Tennis)'},
        { answerText: 'Strenghts (Weight/ Resistance)' },
        { answerText: 'Core (Yoga/Pilates)' },
        { answerText: 'Endurance (Cycling, Trek)' },

      ],  
      id: 15,
      questionTemplate: 1,        
    },
      
    {
      questionText: 'Do you drink alcohol 2 times a week or more?',
      answerOptions: [
        { answerText: 'Yes', goalContext: 'detoxA', contextScore: 1 },
        { answerText: 'Sometimes',goalContext: 'detoxA', contextScore: 0  },
        { answerText: 'No', goalContext: 'detoxA', contextScore: -1 },

      ],    
      id: 16,    
      questionTemplate: 1,  
    },

    {
      questionText: 'Do you feel pain is your muscles and joints?',
      answerOptions: [
        { answerText: 'Every Day', goalContext: 'recovery', contextScore: 1 },
        { answerText: 'Every Now & Then',goalContext: 'recovery', contextScore: 0  },
        { answerText: 'Hardly Ever!', goalContext: 'recovery', contextScore: -1 },

      ],    
      id: 17,    
      questionTemplate: 1,  
    },

    {
      questionText: 'How often have you been getting out in the sunshine recently?',
      answerOptions: [
        { answerText: 'Rarely', goalContext: 'energy', contextScore: 1 },
        { answerText: 'Somedays',goalContext: 'energy', contextScore: 0  },
        { answerText: 'Everyday', goalContext: 'energy', contextScore: -1 },

      ], 
      id: 18,
      questionTemplate: 1,
             
    },

    {
      questionText: 'How many hours do you usually spend in front of a screen?',
      answerOptions: [
        { answerText: '10+', goalContext: 'detoxD', contextScore: 1 },
        { answerText: '8 to 10',goalContext: 'detoxD', contextScore: 0  },
        { answerText: 'Fewer than 7', goalContext: 'detoxD', contextScore: -1 },

      ], 
      id: 19,       
      questionTemplate: 1,  
    },

    
    // SLEEP & STRESS

    {
      questionText: 'How many hours do you usually sleep at night?',
      answerOptions: [
        { answerText: 'Fewer than 7', goalContext: 'sleep', contextScore: 1 },
        { answerText: '7 to 9',goalContext: 'sleep', contextScore: 0  },
        { answerText: '9+ days', goalContext: 'sleep', contextScore: -1 },

      ], 
      id: 20,
      questionTemplate: 1,
             
    },

    {
      questionText: 'Do you find yourself experiencing an Inability to fall asleep',
      answerOptions: [
        { answerText: 'Every Day', goalContext: 'sleep', contextScore: 1 },
        { answerText: 'Every Now & Then',goalContext: 'sleep', contextScore: 0  },
        { answerText: 'Hardly Ever !', goalContext: 'sleep', contextScore: -1 },

      ], 
      id: 21,
      questionTemplate: 1,
             
    },

    {
      questionText: 'Do you find yourself experiencing tiredness while getting out of bed',
      answerOptions: [
        { answerText: 'Every Day', goalContext: 'sleep', contextScore: 1 },
        { answerText: 'Every Now & Then',goalContext: 'sleep', contextScore: 0  },
        { answerText: 'Hardly Ever !', goalContext: 'sleep', contextScore: -1 },

      ], 
      id: 22,
      questionTemplate: 1,
             
    },

    {
      questionText: 'Do you find yourself experiencing tiredness while getting out of bed',
      answerOptions: [
        { answerText: 'Stress', goalContext: 'stress', contextScore: 1 },
        { answerText: 'Anxiety',goalContext: 'stress', contextScore: 0  },
        { answerText: 'Low Mood', goalContext: 'stress', contextScore: 0 },
        { answerText: 'None', goalContext: 'stress', contextScore: -1 },

      ], 
      id: 23,
      questionTemplate: 1,
             
    },
    
    {
      questionText: 'In an average week, how often do you feel burned out?',
      answerOptions: [
        { answerText: 'Every Day', goalContext: 'stress', contextScore: 1 },
        { answerText: 'Every 2 - 3 Days',goalContext: 'stress', contextScore: 0  },
        { answerText: 'Never !', goalContext: 'stress', contextScore: -1 },

      ], 
      id: 24,
      questionTemplate: 1,
             
    },

    
    //SKIN & IMMUNITY

    {
      questionText: 'Do you have any of these skin concerns?',
      answerOptions: [
        { answerText: 'Acne', goalContext: 'skin', contextScore: 1 },
        { answerText: 'Breakouts',goalContext: 'skin', contextScore: 1  },
        { answerText: 'Hyperpigmentation', goalContext: 'skin', contextScore: 1 },
        { answerText: 'Black/White Heads', goalContext: 'skin', contextScore: 1 },
        { answerText: 'None of these', goalContext: 'skin', contextScore: 0 },

      ], 
      id: 25,
      questionTemplate: 1,
             
    },

    {
      questionText: 'Do you have any of these concerns with your hair?',
      answerOptions: [
        { answerText: 'Dry Scalp', goalContext: 'skin', contextScore: 1 },
        { answerText: 'Hairfall',goalContext: 'skin', contextScore: 1  },
        { answerText: 'Hair Damage', goalContext: 'skin', contextScore: 1 },
        { answerText: 'Dandruf', goalContext: 'skin', contextScore: 1 },
        { answerText: 'None of these', goalContext: 'skin', contextScore: 0 },

      ], 
      id: 26,
      questionTemplate: 1,
             
    },

    {
      questionText: 'Do you have any of these concerns with your nails?',
      answerOptions: [
        { answerText: 'Brittle Nails', goalContext: 'skin', contextScore: 1 },
        { answerText: 'Poor Growth',goalContext: 'skin', contextScore: 1  },
        { answerText: 'Discoloration', goalContext: 'skin', contextScore: 1 },
        { answerText: 'Whitespots', goalContext: 'skin', contextScore: 1 },
        { answerText: 'None of these', goalContext: 'skin', contextScore: 0 },

        
      ], 
      id: 27,
      questionTemplate: 1,
             
    },

    {
      questionText: 'Do you take public transportation regularly?',
      answerOptions: [
        { answerText: 'Yes', goalContext: 'immunity', contextScore: 1 },
        { answerText: 'No',goalContext: 'immunity', contextScore: 0  },
      ], 
      id: 28,
      questionTemplate: 1,
             
    },

    {
      questionText: 'Over the past year, how often have you been unwell?',
      answerOptions: [
        { answerText: '4+ Times', goalContext: 'immunity', contextScore: 1 },
        { answerText: '2 - 3 Times',goalContext: 'immunity', contextScore: 0  },
        { answerText: 'Rarely ', goalContext: 'immunity', contextScore: -1 },

      ], 
      id: 29,
      questionTemplate: 1,
             
    },
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
//       questionTemplate: 1,
             
//     },
    
//     {
//       questionText: 'How many glasses of water do you generally drink each day?',
//       answerOptions: [
//         { answerText: '0-5'},
//         { answerText: '5 to 8' },
//         { answerText: '8+' },

//       ],  
//       questionTemplate: 1,        
//     },

//     {
//       questionText: 'How many caffeinated drinks do you have a day?',
//       answerOptions: [
//         { answerText: 'None'},
//         { answerText: '1 to 3'},
//         { answerText: '4 or more'},

//       ],          
//       questionTemplate: 1,
//     },

// // For unique questions as the one in Detox , Use unique goalContext dotox-m,detoxD and set custom logic for its use

//     {
//       questionText: 'Do you drink alcohol 2 times a week or more?',
//       answerOptions: [
//         { answerText: 'Yes', goalContext: 'detoxA', contextScore: 1 },
//         { answerText: 'I drink only socially',goalContext: 'detoxA', contextScore: 0  },
//         { answerText: 'I don’t drink', goalContext: 'detoxA', contextScore: -1 },

//       ],        
//       questionTemplate: 1,  
//     },

//     {
//       questionText: 'Do you smoke  2 times a week or more?',
//       answerOptions: [
//         { answerText: 'Yes', goalContext: 'detoxD', contextScore: 1 },
//         { answerText: 'I smoke only socially',goalContext: 'detoxD', contextScore: 0  },
//         { answerText: 'I don’t smoke', goalContext: 'detoxD', contextScore: -1 },

//       ],          
//       questionTemplate: 1,
//     },
//     {
//       questionText: 'How often do you order-out?',
//       answerOptions: [
//         { answerText: 'Every Day', goalContext: 'energy', contextScore: 1 },
//         { answerText: 'Every Now & Then',goalContext: 'energy', contextScore: 0  },
//         { answerText: 'Hardly Ever!', goalContext: 'energy', contextScore: -1 },

//       ],    
//       questionTemplate: 1,      
//     },
//   ] 
// },

// {
//   category: 'Excersise',
//   questions: [
//     {
//         questionText: 'How often do you exercise each week?',
//         answerOptions: [
//           { answerText: 'Hardly Ever', goalContext: 'energy', contextScore: 1 },
//           { answerText: '1-4 days',goalContext: 'energy', contextScore: 0  },
//           { answerText: '5+ days', goalContext: 'energy', contextScore: -1 },
  
//         ], 
//         questionTemplate: 1,
               
//       },
      
//       {
//         questionText: 'How many glasses of water do you generally drink each day?',
//         answerOptions: [
//           { answerText: 'Cardio ( Run,Swim,Tennis)'},
//           { answerText: 'Strenghts (Weight/ Resistance)' },
//           { answerText: 'Core (Yoga/Pilates)' },
//           { answerText: 'Endurance (Cycling, Trek)' },
  
//         ],  
//         questionTemplate: 1,        
//       },
        
//       {
//         questionText: 'Do you drink alcohol 2 times a week or more?',
//         answerOptions: [
//           { answerText: 'Yes', goalContext: 'detoxA', contextScore: 1 },
//           { answerText: 'Sometimes',goalContext: 'detoxA', contextScore: 0  },
//           { answerText: 'No', goalContext: 'detoxA', contextScore: -1 },
  
//         ],        
//         questionTemplate: 1,  
//       },

//       {
//         questionText: 'Do you feel pain is your muscles and joints?',
//         answerOptions: [
//           { answerText: 'Every Day', goalContext: 'recovery', contextScore: 1 },
//           { answerText: 'Every Now & Then',goalContext: 'recovery', contextScore: 0  },
//           { answerText: 'Hardly Ever!', goalContext: 'recovery', contextScore: -1 },
  
//         ],        
//         questionTemplate: 1,  
//       },

//       {
//         questionText: 'How often do you exercise each week?',
//         answerOptions: [
//           { answerText: 'Rarely', goalContext: 'energy', contextScore: 1 },
//           { answerText: 'Somedays',goalContext: 'energy', contextScore: 0  },
//           { answerText: 'Everyday', goalContext: 'energy', contextScore: -1 },
  
//         ], 
//         questionTemplate: 1,
               
//       },

//       {
//         questionText: 'How many hours do you usually spend in front of a screen?',
//         answerOptions: [
//           { answerText: '10+', goalContext: 'recovery-lz', contextScore: 1 },
//           { answerText: '8 to 10',goalContext: 'recovery-lz', contextScore: 0  },
//           { answerText: 'Fewer than 7', goalContext: 'recovery-lz', contextScore: -1 },
  
//         ],        
//         questionTemplate: 1,  
//       },
//     ] 
//   },




]

export default QUIZ_DATA;