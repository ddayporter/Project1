$( document ).ready( function () {
  $(".answerField").hide();
  $(".reset").hide();
  $(".results").hide();
  $(".play").on("click", triviaStart);
}); //document.ready function closure

var score = 0;
var i = 0;

// use these questions for the "Eye of the World questions only" option in
// Gold level, and be sure to clarify which book each q references
var easyQuestions = [
  {
    question: "Which of the main characters accepts a gift from Mordeth?",
    options: "<p>a) Rand</p><p>b) Mat</p><p>c) Perrin</p><p>d) Moiraine</p>",
    answer: "b",
    points: 2,
    imageURL: "http://jcsalomon.github.io/wot-chapter-icons/Dagger-icon.svg"
  },

  {
    question: "How does Rand help pay for room and board at the inns he and Mat visit on the way to Caemlyn?",
    options: "<p>a) he helps out in the forge</p>   <p>b) he juggles to entertain the guests</p>   <p>c) he plays the flute to entertain the guests</p>   <p>d) he uses the One Power to do tricks to entertain the guests</p>",
    answer: "c",
    points: 2,
    imageURL: "http://jcsalomon.github.io/wot-chapter-icons/Deadtree-icon.svg"
  },

  {
    question: "What is the name of the place where the Dark One is imprisoned?",
    options: "<p>a) Shayol Ghul</p>   <p>b) Ankor Dall</p>   <p>c) Fal Moran</p>   <p>d) Seanchan</p>",
    answer: "a",
    points: 2,
    imageURL: "http://jcsalomon.github.io/wot-chapter-icons/Blight-icon.svg"
  },

  {
    question: "During what festival is the first attack by Trollocs in Emond's Field?",
    options: "<p>a) Feast of Lights</p>   <p>b) Festival of Birds</p>   <p>c) Bel Tine</p>   <p>d) Michaelmas</p>",
    answer: "c",
    points: 2,
    imageURL: "http://jcsalomon.github.io/wot-chapter-icons/Aessedai-icon.svg"
  },

  {
    question: "What skill does Perrin learn he possesses on the journey to Caemlyn?",
    options: "<p>a) he can communicate with ravens</p>   <p>b) he can juggle</p>   <p>c) he can channel the One Power</p>   <p>d) he can communicate with wolves</p>",
    answer: "d",
    points: 2,
    imageURL: "http://jcsalomon.github.io/wot-chapter-icons/Falcon-icon.svg"
  },

  {
    question: "What question does the leader of a Tuatha'an caravan always ask visitors?",
    options: "<p>a) What is your name?</p>   <p>b) Do you know the song?</p>   <p>c) Are you carrying any iron?</p>   <p>d) Do you know the dance?</p>",
    answer: "b",
    points: 2,
    imageURL: "http://jcsalomon.github.io/wot-chapter-icons/Leaves-icon.svg"
  },

  {
    question: "What is the killing fog of Shadar Logoth known as?",
    options: "<p>a) Mashadar</p>   <p>b) Mashiara</p>   <p>c) Machin Shin</p>   <p>d) Moghedien</p>",
    answer: "a",
    points: 2,
    imageURL: "http://jcsalomon.github.io/wot-chapter-icons/Ravens-icon.svg"
  },

  {
    question: "What is the name of the Green Man who protected the Eye of the World?",
    options: "<p>a) Da'shain</p>   <p>b)  Haran</p>   <p>c) Someshta</p>   <p>d) Loial</p>",
    answer: "c",
    points: 2,
    imageURL: "http://jcsalomon.github.io/wot-chapter-icons/Leaf-icon.svg"
  },

  {
    question: "What is the meaning of the word <em>ta'veren</em>?",
    options: "<p>a) another word for the True Source</p>   <p>b) an item that allows a person who can channel to tap into more power than they could handle otherwise</p>   <p>c) people who have pledged to never commit an act of violence</p>   <p>d) people around whom the Wheel of Time weaves the Pattern</p>",
    answer: "d",
    points: 2,
    imageURL: "http://jcsalomon.github.io/wot-chapter-icons/Snake-icon.svg"
  },

  {
    question: "What does the group find at the Eye when they first arrive?",
    options: "<p>a) an Aielman in a cage</p>   <p>b) a crown of swords</p>  <p>c) a well of <em>saidin</em></p>   <p>d) a powerful <em>angreal</em></p>",
    answer: "c",
    points: 2,
    imageURL: "http://jcsalomon.github.io/wot-chapter-icons/Fang-icon.svg"
  }
]

function triviaStart() {
  $(".play").hide();
  $(".results").show();
  $(".reset").on("click", resetGame);
  firstQuestion();

}

function firstQuestion() {
  console.log("first question");
  $(".decoration").attr("src", easyQuestions[0].imageURL)
  $(".housekeeping").html("Question 1/10:");
  $(".question").html(easyQuestions[0].question);
  $(".options").html(easyQuestions[0].options);
  $(".answerField").show();
  $(".submit").on("click", printAnswer);
}

function printQuestion() {
  // $(".decoration").attr("src", easyQuestions[i].imageURL)
  $(".housekeeping").html("Question " + (i+1) + "/10:");
  $(".question").html(easyQuestions[i].question);
  $(".options").html(easyQuestions[i].options);
  $(".answerField").show();
  $(".submit").on("click", printAnswer);
}

function printAnswer() {
  $(".submit").off();
  console.log("Input value is " + $('input').val() + ".");
  console.log("Value of i is currently " + i + ".");
  if ($('input').val() == easyQuestions[i].answer) {
    $(".answer").addClass("correctAnswer").html("Correct!");
    score = score + easyQuestions[i].points;
    console.log("Right answer. Score is " + score);
  } else {
    $(".answer").addClass("wrongAnswer").html("Sorry. You answered " + $('input').val() + ", but the correct answer is " + easyQuestions[i].answer + ".");
    score = score;
    console.log("wrong answer. Score is " + score);
  }
  $(".score").html("Points: " + score);
  $(".answerField").hide();
  $(".next").on("click", nextQuestion);
}

function nextQuestion() {
  $(".next").off();
  $(".answer").html("");
  $("input").val("");
  console.log("Next button clicked");
  console.log("Input value is " + $('input').val() + ".");
  console.log("Value of i is currently " + i + ".");
  i++;
  console.log("i++. Value of i is currently " + i + ".");
  if (i < easyQuestions.length) {
    console.log("question: " + easyQuestions[i].question);
    printQuestion();
  } else {
    triviaEnd();
  }
}

function triviaEnd() {
  $('.board').hide();
  $(document.createElement('p')).html('Your final score was ' + score + '.').appendTo('main');
  toggleMessage();
  $(document.createElement('p')).html('To play again click "Reset"').appendTo('main');
}

function toggleMessage() {
  if (score <= 6) {
    $(document.createElement('p')).html('Hmm. Have you actually read the Eye of the World?').appendTo('main'); //add link to book
  } else if (score <= 16) {
    $(document.createElement('p')).html('You did ok. Maybe you need to read it again.').appendTo('main');
  } else if (score >= 18) {
    $(document.createElement('p')).html('Great job! You are a true fan.').appendTo('main');
  }
}

function resetGame() {
  console.log("reset button clicked");
  score = 0;
  i = 0;
  $(".housekeeping").html("Press PLAY to begin.");
  $("div.game p").empty();
  $(".answer").empty();
  $(".score").html("Points: 0");
  $("[type]").val("");
  $('.board').show();
  $("main > p").remove();
  $(".next").off();
  $(".play").show();
}


// more advanced features to add:
// **1 $('.next').html('FINISH').on("click", function() { <-- want Next button
//    to change to Finish after the last question, need to refactor a bit to
//    make that work
// **2 add "medium" and "hard" level questions and allow the user to choose
//    level of difficulty
// **3 add option to choose "only Eye of the World" questions to avoid later
//    series spoilers, or the full quiz, which would include some of each of
//   the easy, middle and hard (chosen randomly, so each time you play it's a
//   little different
//**4 print leaderboard as part of triviaEnd()
//**5 give option to try again as part of printAnswer()
//
