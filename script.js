const QUESTIONS = {
		"What is a reason (besides pregnancy) you can miss your period?": "Stress",
		"What is one reason for going into labor prematurely?": "Stress",
		"How many tablespoons of blood does the average person lose on their period?": "4-12",
		"How many days do most periods last?": "3-5",
		"When was the first commercial pad released in America? (note: it failed to be successful bc advertisement wasn’t allowed)": "1888",
		"What’s the first successful brand of pads to be released in America?": "Kotex",
		"What brand that makes period products invented the first tampon?": "Tampax",
		"What’s the most common brand of pad used in America?": "Always",
		"What year did the first tampon come on the market?": "1934",
		"In what year did the US lift its ban on advertising period products on TV?": "1972",
		"In what decade was the first menstrual cup released?": "1930s",
		"In what decade did the washable pad make a big comeback?": "1960s",
		"In what decade was the first ad for period products released that included blood?": "1990s",
		"What age does the average American get their period?": "10-15",
		"What famous sitcom star was the first person to say 'period' on TV in 1985?": "Courtney Cox",
		"What Academy Award nominee had one of her first roles in a Tampax commercial?": "Naomi Watts"
	}

$(document).ready(function() {

	var sessionQuestions = Object.assign({}, QUESTIONS);

	$("#getRandomQuestion").click(function() {

		$('#answerText').text("");

		var arr = Object.keys(sessionQuestions);
		var index = Math.floor(Math.random() * arr.length);

		if (arr.length === 0) {
			$("#questionText").text("You went through all the questions!");
			$('#endSession').show();
			$("#getRandomQuestion").hide();
			$("#showAnswer").hide();

		} else {
			index = Math.floor(Math.random() * arr.length);
			var chosen = arr[index];
			delete sessionQuestions[chosen];

			$("#showAnswer").show();
			$(this).hide();

			$("#questionText").text(chosen);
			$('#answerText').css("visibility", "hidden");
			$('#answerText').text(QUESTIONS[chosen])
		}
	});

	$("#showAnswer").click(function() {
		$(this).hide();
		$("#getRandomQuestion").show();
		$('#answerText').css("visibility", "visible");

	});

	$("#startSession").click(function() {
		$(this).hide();
		$("#endSession").show();
		$("#getRandomQuestion").show();
	});

	$("#endSession").click(function() {
		$(this).hide()
		$('#startSession').show();
		$("#getRandomQuestion").hide();
		$("#showAnswer").hide();

		// repopulate sessionQuestions
		sessionQuestions = Object.assign({}, QUESTIONS);

		$("#questionText").text("");
		$('#answerText').text("");

	});
});


