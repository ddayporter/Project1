$( document ).ready( function () {

// use these questions for the "Eye of the World questions only" option in
// Gold level, and be sure to clarify which book each q references
  var easyQuestions = [
    {
      question: "Which of the main characters accepts a gift from Mordeth?",
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
  var i = 0;

  $(".answerField").hide();

  $(".play").on("click", triviaStart);

  function triviaStart() {
    $(".play").off();
    $(".reset").on("click", resetGame);
    //printQuestion();
    firstQuestion();

    }

  function firstQuestion() {
    console.log("first question");
    $(".housekeeping").html("Question 1/10:");
    $(".question").html(easyQuestions[0].question);
      // console.log("question printed");
    $(".options").html(easyQuestions[0].options);
      // console.log("options printed");
    $(".answerField").show();
    $(".submit").on("click", printAnswer);
  }

  function printQuestion() {
    $(".housekeeping").html("Question " + (i+1) + "/10:");
    $(".question").html(easyQuestions[i].question);
      // console.log("question printed");
    $(".options").html(easyQuestions[i].options);
      // console.log("options printed");
    $(".answerField").show();
    $(".submit").on("click", printAnswer);
    }

  function printAnswer() {
    $(".submit").off();
    console.log("Input value is " + $('input').val() + ".");
    console.log("Value of i is currently " + i + ".");
    if ($('input').val() == easyQuestions[i].answer) {
      // console.log("Correct!");
      $(".answer").html("Correct!");
      score = score + 2;
      console.log("Right answer. Score is " + score);
    } else {
      // console.log("Wrong!");
      // silver level: give option to try again
      $(".answer").html("Sorry. You answered " + $('input').val() + ", but the correct answer is " + easyQuestions[i].answer + ".");
      score = score;
      console.log("wrong answer. Score is " + score);
    }
    $(".score").html("Points: " + score);
    // $("input").val("");
    $(".answerField").hide();
    $(".next").on("click", nextQuestion);

  } // printAnswer closure

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
    $('.next').html('FINISH').on("click", function() {
      $('.board').hide();
      $(document.createElement('p')).html('Your final score was ' + score + '.').appendTo('main');
      toggleMessage();
      $(document.createElement('p')).html('To play again click "Reset"').appendTo('main');
      //silver feature: print leaderboard
    });

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
    $("[type]").val(" ");
    $('.board').show();
    $(".play").on("click", triviaStart);
  }

}); //document.ready function closure
