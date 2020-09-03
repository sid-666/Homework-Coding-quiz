# Quiz Application
## Problems
1) When I press start quiz the quiz questions and options should only be displayed, and the timer should start counting down
2) When I get a question right at the bottom it should have a pop up display of correct and then dissapear, vice versa for when a question is wrong.
3) If a question is wrong there needs to be an added penalty of time deduction
4) When time reaches zero end quiz regardless of whether if all question were finished and automatically got to form page.
5) if questions are finished it should automatically go to a form to fill infomration
6) When forms submitted should take me to High-Score page 
7) High score page should display Inititials and Score
8) Go back button should refresh to the start and Clear should clear the leader board

## Outcome
### Soltution- important bits
1) Eventlisteners were deployed for all click events, which triggers function and actions
2) 
    * For the questions, first a variable was defined that contained an array of objects, each object having the properties of question, option and correct.
    * When the startGame function is triggered by the click of the start button, questions are sorted randomly and the current question index is extablished (mixed question and index are stored in global variables)
    * Set question function is also deployed as part of the event function start game which triggers the display function, responsible for displaying th question
3) 
    * The display functions is also responsible for rendering the answer buttons and their content
    * Through iterating through all the options for a particular question. A button is created for each one and buttons for previous question, or at the start with default buttons, are cleared and replaced with the new ones ( createElement for each option and set button text content to options)
    * In the iteration as well it is stated that if button-text/option is equal to correct the attribute for the button should be set to correct. This is done for the purpose of making score count actions, and correct and wrong pop up text displays are easy to establish (these actions require for the correct option to be trackable thus setting of the attribute)
4) 
    * Selection of answer buttons contains a lot of actions and triggers different functions
    * If statments to check whether selected answer is correct or not (attribute). if correct score count is added (score is defined as global variable and set to zero), and if incorrect then time duration is decreased by 10 seconds.
    * Actions are also pushed after the selection of an answer to increase current question index in order to move onto the next question. If statement were put to enure that when the index exceeds length of number of question in the array then it will move onto the form section. 


### Image

![placeholder](Webimg2.jpg)

