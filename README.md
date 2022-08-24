# Revive Nutrition MVP

Design and Devloped by Amith B V | JlionMedia | 


## Introduction 
Revive Nutrition is India’s 1st end-end nutritional brand for personalized wellness & nutrition. It is based on the idea of exploring and prototyping various solutions in Alternative protein and Curative nutrition. 

The revive nutrition MVP was envisioned as the first step toward providing this end-to-end wellness. It was intended to provide an online questionnaire-based assessment of a user's current nutrition make-up and health goals and further identify essential weaknesses or gaps in the same. Based on these assessments the user would receive a personalized health plan with a number of products specifically suggested for the user. 


## The Application 
The link to the live Website or Web Application deployed on Netlify can be found here: 

[https://dynamic-fox-b4267a.netlify.app/](https://dynamic-fox-b4267a.netlify.app/)


The website consists of a number of pages with critical unique functionalities :
Home Page / Landing Page: 

The home page is the face of the MVP. It contains an introduction to the website, benefits of the service, a mock nutrition plan, and a section to provide more information on the practices and research of the service.

A call to action is present at the end of the page to prompt the user to take the Consultation Quiz. 


### Sign In Page:
The Sign-In Page contains two forms, one to Sign In to the website using a previously set email and password or by means of a Google Account using the OAuth service provided by Firebase. 

The second form is for first-time users to sign up for an account with the website and has appropriate fields for the same. 

The data on both forms is posted back to the firebase library, and the user is redirected to the home page. 

In the future, all of the data of the website related to that unique user including their cart items, orders, previously shopped items, shipping address, and details can all be stored within these authentication credentials. 


### Shop Page:
The Shop Page showcases the potential look and feel of the future store. 

The products are displayed on small cards containing their title, short description, and respective price. An Add To Cart button extends the functionality of actually adding the product to the user’s cart.  

The product list can be further filtered for specific goals using the menu on the left. 

All of the product data including the details, photos, and goals are being pulled from the Backend Database, i.e. Firebase Library. They can be updated in bulk in the backend and the new products will automatically populate in the front end. 


### Cart: 
Once a user clicks on ‘ ADD TO CART ’ on a product the product is updated into the cart with its respective quantity and price. Multiple products and quantities can be added in the same fashion. The cart will always auto-update to populate the appropriate products, total quantities, and total price. 

The cart can be accessed and closed from an icon located on the right of the header. The icon also contains a count of the total items in a user's cart. 

A checkout button located at the bottom of the cart is used to proceed to the next step of purchase to the checkout. 


### Checkout:
The checkout page was designed to provide more information on the products and display a summary of the entire cart. 

The left portion of the page displays the cart items with their respective details, quantities, and price. The quantities of these products can be increased or decreased by clicking on the left and right caret symbols. An X button is added at the end of each product line to remove the product and all quantities of it completely from the cart. A Sub-Total of all the products is auto-calculated at the end of product lines. 

The right portion of the page provides further order details related to the total, including shipping fees, taxes, and discounts. It provides a final grand total that the user has to pay in order to complete the product purchase. A dummy ‘Proceed To Pay’ button completes the checkout page. 

Further improvements would include shipping calculations, a discount or referral code input, and calculations. The Pay button would also be linked to a payment provider, to which it would post the Order Data for payment.  


### Consultation Page: 
The consultation page forms the core of the MVP. When a user enters the page they are taken through a questionnaire in order to investigate the user's health goals and conditions and recommend appropriate products for the same. 

The questionnaire consists of a number of question slide components that change based on the nature of the question. They display the appropriate question text and respective answers for the user to choose from.

On clicking on any of the answers the quiz cycles to the next question while at the same time assessing if the answer selected has any goals and respective scores attached to it. If a goal is found on an answer then it adds the answer score to its respective goal score in the quiz score array. Some quiz slide components also contain inputs for the user to input personal data such as a name, age, email, and sex. This data is added to a quiz user array. These will further help customize the experience for the user. 

Two buttons are provided at the top of the page, one on the left to exit the quiz to the homepage and one on the right to reset the quiz completely including the quiz score and quiz user arrays. This is to help the user to restart the quiz if required. 

At the end of the quiz, both the quiz scores and user data are posted to the backend and are pushed onto the recommendation page to provide the required product recommendations for the user. 


### Recommendation Page 
The recommendation page displays the recommended products for the quiz user in a personalized way. 

The Quiz User data from the consultation page are used to display a personalized caption with the user's name and a message with the user's chosen goals. 

The Quiz Scores are used to populate a product line based on their respective scores. The products are displayed in a row with horizontal scroll functionality. To the left of this product, the row is a column that displays the respective product with its intended goal. This provides the user with references for the products they have been recommended. 

A call to action at the end of the page provides a button that leads to the shop page intended for users that would prefer to view all the products.


### Header & Footer
The header of the website contains the page links for the Shop and Consultation page on its left. The Revive logo in the middle can be used to redirect to the Home at any time. The right of the header contains the Sign In Page Link, Account, and Cart Icons. 

The footer has a short description of the service accompanied by a Caption and Revive Logo on top of it. Quick links to the shop and consultation page are also present to help with user navigation. The last column contains links to Revive Nutrition’s external Social Media Pages.  


## Supporting Frameworks 

### React.js
The website in its entirety is built on a React.js base. 
Documentation Link: [https://reactjs.org/](https://reactjs.org/)

### React Router V6
Routing on the website was developed with the help of React Router V6. 
Documentation Link: [https://reactrouter.com/](https://reactrouter.com/)

### SASS
Styling on the website was developed using Sass.
Documentation Link: [https://sass-lang.com/](https://sass-lang.com/)

### Animate.css
This framework was used to add simple animations to various elements on site. 
Documentation Link: [https://animate.style/](https://animate.style/)

## Future Scope

### Responsive Design 
As the majority of internet users are from mobile phones, the styling of the website can be further adjusted to accommodate all screen sizes. This can be done by adding further breakpoints in every component and adding custom styling for required elements. 

### Styled Components
Certain components can have styling conflicts amongst themselves because of class name clashes. To avoid such bugs, every component can be converted into a styled component which will avoid any such class confusion. 

### Redux
As the application features and number of users begin to grow, so will the complexity of the code. This will have a major impact on the performance on a larger scale. To help with performance and installing new features cleanly, the code can be refactored to use Redux rather than useState, useEffect and other pure React Methods.  

### Payment Provider Integration ( Stripe ) 
Since the final intended purpose of the website is to help users purchase products better suited to them, a payment provider must be integrated into the checkout page. Typically Stripe and its Stripe API are used to simulate test payments. For the Indian Market, other payment providers such RazorPay or PayU Money and their APIs can be explored. 

## Code Repository: 
The code can be found at the following GitHub repository: [https://github.com/bvamith95/Revive-Nutrition-V1.0.0](https://github.com/bvamith95/Revive-Nutrition-V1.0.0)

It can be pulled or downloaded from the same repo for further development. 

### Website Data  
All of the data related to the website can be found in the Firebase Firestore Library. It contains the following collections: 

goals: This collection contains the products grouped by their specific goal. At present, A single product exists in each collection. When the product range is expanded, the products or items can be added to their specific goal collection here by following the format of data present. 

quizUserData: This collection contains a record of all of the answers and information provided by a quiz user as well as the date the test was conducted. In the future, this collection of information will be critical in analyzing and optimizing the products for users. 

quiz_questions: This collection contains all data related to the questions of the quiz, the format includes the question, answer, and appropriate question template value. 

users: This collection contains all data related to the users who have signed up with the website or logged into it. In the future, the user data from the quiz can also be linked to the user data in this collection. 

Note: Access to this Firestore Database has been provided to admin@revivenutrition.in. This access can be extended to 6 more emails if required. 

Glossary / Reference Links : 


GitHub: [https://github.com/bvamith95/Revive-Nutrition-V1.0.0](https://github.com/bvamith95/Revive-Nutrition-V1.0.0)


Netlify: [https://www.netlify.com/](https://www.netlify.com/)


Firebase: [https://console.firebase.google.com/](https://console.firebase.google.com/)


React.js: [https://reactjs.org/](https://reactjs.org/)


React Router V6: [https://reactrouter.com/](https://reactrouter.com/)


SASS: [https://sass-lang.com/](https://sass-lang.com/)


Animate.css: [https://animate.style/](https://animate.style/)



### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
