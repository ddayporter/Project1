$( document ).ready( function () {

// use these questions for the "Eye of the World questions only" option in
// Gold level
var easyQuestions = [
  {
    question: "Which of the main characters accepts a gift from Mordeth?", //later iterations, change this to "in the Eye of the World" specifically
    options: "a) Rand    b) Mat   c) Perrin   d) Moiraine",
    answer: "b",
    points: 2
  },

  {
    question: "How does Rand help pay for room and board at the inns he and Mat visit on the way to Caemlyn?",
    options: "a) he helps out in the forge   b) he juggles to entertain the guests   c) he plays the flute to entertain the guests   d) he uses the One Power to do tricks to entertain the guests",
    answer: "c",
    points: 2
  },

  {
    question: "What is the name of the place where the Dark One is imprisoned?",
    options: "a) Shayol Ghul   b) Ankor Dall   c) Fal Moran   d) Seanchan",
    answer: "a",
    points: 2
  },

  {
    question: "During what festival is the first attack by Trollocs in Emond's Field?",
    options: "a) Feast of Lights   b) Festival of Birds   c) Bel Tine   d) Michaelmas",
    answer: "c",
    points: 2
  },

  {
    question: "What skill does Perrin learn he possesses on the journey to Caemlyn?",
    options: "a) he can communicate with ravens   b) he can juggle   c) he can channel the One Power   d) he can communicate with wolves",
    answer: "d",
    points: 2
  },

  {
    question: "What question does the leader of a Tua'athon caravan always ask visitors?",
    options: "a) What is your name?   b) Do you know the song?   c) Are you carrying any iron?   d) Do you know the dance?",
    answer: "b",
    points: 2
  },

  {
    question: "What is the killing fog of Shadar Logoth known as?",
    options: "a) Mashadar   b) Mashiara   c) Machin Shin   d) Moghedien",
    answer: "a",
    points: 2
  },

  {
    question: "What is the name of the Green Man who protected the Eye of the World?",
    options: "a) Da'shain   b)  Haran   c) Someshta   d) Loial",
    answer: "c",
    points: 2
  },

  {
    question: "What is the meaning of the word <em>ta'veren</em>?",
    options: "a) another word for the True Source   b) an item that allows a person who can channel to tap into more power than they could handle otherwise   c) people who have pledged to never commit an act of violence   d) people around whom the Wheel of Time weaves the Pattern",
    answer: "d",
    points: 2
  },

  {
    question: "What does the group find at the Eye when they first arrive?",
    options: "a) an Aielman in a cage   b) a crown of swords  c) a well of <em>saidin</em>   d) a powerful <em>angreal</em>",
    answer: "c",
    points: 2
  }
]

var score = 0;

  $(".play").on("click", function() {
    printQuestion();
    $(".submit").on("click", printAnswer);
    $(".reset").on("click", resetGame);
  });

  function printQuestion() {
    $(".housekeeping").html("Question 1/10:");
    $(".question").html(easyQuestions[0].question);
      console.log("question printed");
    $(".options").html(easyQuestions[0].options);
      console.log("options printed");
    }

  function printAnswer() {
    console.log("submit button clicked");
    $("input").hide();
    if ($('input') == easyQuestions[0].answer) {
      console.log("Correct!");
      $(".answer").html("Correct!");
      score = score + easyQuestions[0].points;
    } else {
      console.log("Wrong!");
      $(".answer").html("Sorry. The correct answer was " + easyQuestions[0].answer);
      score = score;
    }

    $(".score").html("Points: " + score);

  } // printAnswer closure

  function resetGame() {
    console.log("reset button clicked");
    score = 0;
    $(".question").html("Press PLAY to begin.");
    $(".answer").empty();
    $(".score").html("Points: 0");
    $("[type]").val(" ");
  }


}); //document.ready function closure
