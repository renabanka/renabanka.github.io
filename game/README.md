#Project #1: The Game: Urban Garden Fall
---

### Assignment Overview

---

### Project Deliverables:
* ** A working game, built by you, hosted somewhere on the internet
* ** A link to your hosted working game in the URL section of your Github repo. This must be placed inside of your_username.github.io in a folder called project1. It will then be accessible via http://your_username.github.io/project1/
* ** A git repository hosted on Github, with a link to your hosted game, and frequent commits dating back to the very beginning of the project. We strongly encourage you to work our of the repository your_username.github.io
* ** A readme.md file with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.

---

### Project Technical Requirements:
* ** Render a game in the browser
* ** Switch turns between two players
* ** Design logic for winning & visually display which player won
* ** Include separate HTML / CSS / JavaScript files
* ** Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
* ** Use Javascript or jQuery for DOM manipulation
* ** Deploy your game online, where the rest of the world can access it
* ** Use semantic markup for HTML and CSS (adhere to best practices)

---

### Summary of Game
My game is titled Urban Garden Fall and is inspired by the game "Fruit Ninja". The objective of my game is for the player to catch as many flowers as they can to advance through all the levels. This game was designed for one player, and does not require the players to switch turns during the game. To catch a flower you simply click (if you are on a computer) or tap the flowers (if you are on a mobile device). As you advance through the 5 levels, flowers fall faster but are worth more points. 

---

### Project Approach
When I wireframed my game, I wanted to use Jquery to manipulate the DOM. I designed the game so that it would be something that could also be played on a mobile device. My approach was to first create a simple game interface which included a game container, a scoreboard, and popups that informed the player where they were in the game. In my code, I used functions, jquery, arrays, loops, if else statements, keyframes, animations, and styling to complete my game.

---
###My Project Deliverables
* ** I have a hosted my game on github so it is viewable online
* ** I have played my game on github inside renabanka.github.io/game
* ** I have commited my game multiple times throughout this week
* ** I have added a readme.md file with the explanation of my game

---

###My Project Technical Requirments
* ** My project uses functions, jquery, arrays, loops, if else statements, keyframes, animations, css, and media queries
* ** My game renders in a browser and also on mobile devices of 480px
* ** My game is designed for one player game, and does not require the players to switch turns during the game
* ** The logic of my game goes through 5 levels. The game awards points for flowers caught and subtracts points for flowers not caught. If a certain amount of flowers are caught, the player will advance to another level. As the player advances to new levels, new flowers are presented that fall faster. 
* ** I have included an HTML file, CSS files (I used skeleton and sass), and one app.js file
* ** I used jQuery for DOM manipulation

---

###app.js outline

---

###Store Points:
* **I created a variable that starts at 0 points and is stored in pointCounter
* **Inside the variable I defined two functions
* **AddPoint - takes in any number as an argument and increments the current pointCounter by that number (eg. level 1 = 1pt)
* **SubPoint - takes in any number as an argument and decreases the current pointCounter by that number (in this case 1)



###Store Level:
* **I created a variable that starts at level 1 and is stored in levelCounter
* **I defined one function which increments the levelCounter by 1 overtime as it is called


###Flower Array:
* **I created an empty array so that my flowers which are appended to the page go into that array

###timer Function:
* **I got this timer function from online 
* **It is a setInterval function that runs every second
* **It uses the new Date() function which is a timestamp
* **It defines a variable start which stores the timestamp once the game starts
* **Every second it subtracts the current timestamp by the variable with the original timestamp
* **It stores that timestamp and then subtracts and rounds up


###getRandomInt Function
* **I referenced this game to get my logic for my falling flowers: http://codepen.io/anon/pen/zKRBJL
* **First I defined the randomIntFunction - this is used to define where on the x-coord of the flowers are dropped
* **It takes two arguments (min and max) - calculates a random number and provides a number


###I have jQuery to hide and show elements depending on the point of the game

###startGame Function
* **Once the game is started, it begins to append the flowers to the game container - 8 at a time.
* **It starts with var num at 8 and iterates through making flowers as long as num is above 0 
* **In order for it not to overload with succulents, it subtracts from num each time and waits until it has created 8 succulents before it drops the next batch
* **Because the variable is never actually being updated, it keeps running through the funcition

###nextLevel Function
* **This function evaluates the level counter and the points counter to change the level text and animate the fade


###newSucculents
* **This function looks at the points and evaluates if the new succulents should be dropped, if you lose points, you will be dropped to an easier level of flowers even though your level counter stays the same


###makeSucculent Function
* **This is the main function that I first created to append the level one flowers to the game container
* **It also calls the getRandom function to define the x coordinate drop position
* **It also calls the click function that removes the flowers from the game container when the player clicks on a flower
* **This also adds a point to the pointCounter
* **It also calls and checks the conditions on the newSucculents and the displayResults functions

###findLocation Function
* **This function has variables that get the height of the game container
* **It also loops through the array of flower and checks the position of each of the flowers that have been appended
* **It then compares their positions to the bottom line of the game container
* **If the flower is past the bottom line, it subtracts a point and also removes the flower


###setInterval function
* **This calls the findLocation function every second to check when to subtract points and remove flowers
* **It also calls the newSucculent function to make sure conditions are adjusted as points drop (eg. if points fall to a certain level, flowers from that level reappear)


###For displaying back the final results:
* **Created span ids and pushed final result into this id

###For replay button:
* **Used the method: window.location.reload
---
###CSS outline
* **Added a no scroll style for browser and for phone(http://stackoverflow.com/questions/28790889/css-how-to-prevent-scrolling-on-ios-safari)
* **Used media queries to try to make the phone adaptive on the iPhone
* **Added a key frame animation that undergoes 3 states every 20 seconds - rotates the flowers certain degrees and specifies a 2D translation by the vector (not sure I fully understand translate)
* **Added another key frame that fades the boxes onto the page when the levels change. Fades in with a predefined fade type, changes the opacity and fills the box, and happens within the second
* **Utilized Skeleton for containers and buttons
* **Background image during game:https://www.google.com/search?q=garden+background+game&biw=1440&bih=738&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjlmLzqutjPAhUDOD4KHcULA9IQ_AUIBigB#imgrc=OX-MW_jKsQf96M%3A