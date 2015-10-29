# Project1
Project 1 Repo - Wheel of Time trivia game

## User Stories

As a user, I should be able to:
<ol>
  <li>...enter my name so my score can be recorded on the leaderboard</li>
  <li>...choose whether I want a game based on the first book or the whole series, so I can only get spoilers if I want them</li>
  <li>...see my score after each question so I can see how I'm doing as I go along</li>
  <li>...NOT see the answers if I get the question wrong, so I can go back and try again later</li>
  <li>...see my final score and find out how much I really know about the Wheel of Time</li>
  <li>...only see the current question being asked so I can't skip ahead</li>
  <li>...follow links to things mentioned throughout the quiz to find out more</li>
  <li>...find the game interface visually appealing so it keeps my interest</li>
</ol>

## Approach
I chose Wheel of Time trivia because it's my favorite book series (I've read the first 7 or 8 books probably 5 times, and the rest at least twice except the very last book, which I've only read once). You can see my initial plans in my above User Stories.

After composing the questions for the first book only (which would double as my "easy" questions), and coding the game just for that, I realized how much bigger a project it would be to provide extra options. I kept my ideas for future enhancements commented out in the .js file so I could go back to it when I had a chance.

Once my game was functional at a Bronze MVP level, I tackled the CSS styling. Once I had reached a passably attractive site, I went back to improve some functionality, and then later improved styles again.

## Technologies Used

### JavaScript structure
Basically, the questions are loaded into objects within in an array, and each object contains the questions, multiple choice options, answers, points value, and an image - another Gold level feature would be for the image to change for each question.

Each function created is a step in the process of displaying the question, capturing the answer, comparing it to the answer key, showing the result to the user, and then enabling a click through to the next question.

The reset button hides appropriate divs, turns off listeners and empties html where appropriate.

### JQuery
I used almost exclusively jquery for manipulating the DOM.

### CSS
I had a general idea of what I wanted the site to look like (drawn out by hand), and searched the internet for images and CSS tricks (mostly from, well, [css-tricks](http://css-tricks.com)).

### HTML
I laid out the HTML in a way that I thought would be easiest for DOM manipulation, so nearly every element has a class or ID, and is grouped inside divs as appropriate.

## Unsolved Problems

### Animations
I tried to incorporate some fadeIn/Out features but couldn't get them to work and ran out of time to research more to make it happen.

### Dropcaps in the Title
I did figure out a way to do dropcaps in my sandbox but did not have time to implement it in my project.

### Ordered Lists of Type "a"
Since my multiple choice were a) b) c) or d), I thought I would do an ordered list of type "a" - but when I put that markup into my question objects, it broke something. Ordered lists worked but I didn't want the standard numbering so I chose to do paragraphs instead - probably with a little more troubleshooting I could have figured out the issue but I decided to devote time elsewhere.
