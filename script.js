const QUESTIONS = {
	"What is a reason (besides pregnancy) you can miss your period?":"Stress",
	"What is one reason for going into labor prematurely?":"Stress",
	"How many tablespoons of blood does the average person lose on their period?":"4-12",
	"How many days do most periods last?":"3-5",
	"When was the first commercial pad released in America? (note: it failed to be successful bc advertisement wasn’t allowed)":"1888",
	"What’s the first successful brand of pads to be released in America?":"Kotex",
	"What brand that makes period products invented the first tampon?":"Tampax",
	"What’s the most common brand of pad used in America?":"Always",
	"What year did the first tampon come on the market?":"1934",
	"In what year did the US lift its ban on advertising period products on TV?":"1972",
	"In what decade was the first menstrual cup released?":"1930s",
	"In what decade did the washable pad make a big comeback?":"1960s",
	"In what decade was the first ad for period products released that included blood?":"1990s",
	"What age does the average American get their period?":"10-15",
	"What famous sitcom star was the first person to say “period” on TV in 1985?":"Courtney Cox",
	"What Academy Award nominee had one of her first roles in a Tampax commercial?":"Naomi Watts ",
	"What percent of European babies are conceived in IKEA brand beds?":"10%",
	"What did British spies use for invisible ink at one point? (they stopped because it would smell if it wasn't fresh)":"Semen",
	"A female ferret will die if it doesn't ______ for a year":"have sex",
	"Dolphins, bonobos, (and humans) are relatively unique because they all _______ for pleasure":"have sex",
	"The semen in a single ejaculation contains 15,875 GB of genetic information, which is equivalent to _______":"the combined capacity of 62 MacBook Pros",
	"Male fruitflies rejected by females drink significantly more _______ than those who were not rejected":"Alcohol",
	"Drinking too much ________ prior to having sex can make it harder to orgasm. ":"Alcohol",
	"The G-spot was almost named the ________________ after the professor who coined the term we use today":"Whipple Tickle",
	"A 15th century best selling erotic work of fiction was written by the person who later became ____________________":"Pope Pius II",
	"____________ viagra tablets are sold every second ":"7",
	"Taurine, the active ingredient in Red Bull, is also found in ___________":"Breast Milk",
	"Every person's __________ has a unique scent that helps your baby identify you":"Breast Milk",
	"____________ have 3 vaginas ":"Kangaroos",
	"In 1899, Dr. Horace Emmett claimed that __________ were the secret to eternal youth. He died later that year.":"Squirrel Testicles",
	"_________________ can help relieve menstrual cramps and muscle tension.":"Masturbation",
	"May is international ________________ month":"Masturbation",
	"In Greek mythology, Ixion betrayed Zeus by having sex with a _________ that looked like Hera. (This was actually a trap set by Zeus to catch Ixion having sex with Hera.)":"Cloud",
	"Vaginas grow (and can even double) in size during arousal due to _____________ ":"Vaginal tenting",
	 "Wolves, bears, bats (and humans) are all known to perform ___________":"Oral sex",
	"_____________, produced in Argentina in 1907, is one of the earliest surviving pornographic films":"El Sartorio ",
	"How often should women over the age of 21 get pelvic exams and pap smears if the last one they had was normal":"every 3 years",
	"what two synthetic hormones are in the pill":"estrogen and progestin",
	"____ is a food, drink or drug believed to stimulate sexual desire ":"aphrodisiac",
	"____ and ____ are physical signs of sexual arousal":"erect nipples and increased heart rate",
	"Shakespeare's a Winter's Tale references which sex toy?":"Dildo",
	"Peeing after sex can ________":"prevent vaginal infection",
	"Wiping front to back can ______":"prevent vaginal infection",
	"What is the scientific name for morning wood?":"Nocturnal penile tumescence",
	"What percentage of Americans use contraceptive pills?":"28%",
	"How long does the copper IUD, Paragard, remain effective?":"10 years",
	"How long does the hormonal IUD Mirena remain effective?":"5 years",
	"At what age should people with a cervix generally get their first pap smear?":"21 years",
	"What is the failure rate of 'pulling out'?":"22%",
	"How many days after sex can Plan B be used to still prevent pregnancy?":"5 days",
	"What window of time can you take the birth control pill before it is considered a missed dose?":"2 hours",
	"What is the nickname for gonorrhea? ":"the clap",
	"What kind of hepatitis does not have a vaccine available?":"Hepatitis C",
	"What is the most common symptom of an STI?":"no symptoms",
	"What characteristic of vaginal discharge should be a cause for concern?":"yellow or green discharge",
	"What is it called when someone with a penis orgasms without ejaculating?":"ejaculatory anhedonia",
	"Is the clitoris internal or external?":"both",
	"What is a sign of sexual arousal?":"pupil dilation",
	"What percentage of women masturbate at least once a week?":"48%",
	"What is it called when sexual pleasure is derived from rubbing up against an object or another person?":"Frottage",
	"What is the formal name for scissoring?":"Tribadism",
	"Where should flavored lube NOT be used?":"vagina",
	"Where is the most popular place Americans have sex outside of the bedroom?":"cars",
	"How long does an orgasm last for a person with a vagina, in seconds?":"20",
	"What percentage of women over 80 regularly have sex?":"30%",
	"How many calories do you burn during 30 mintues of sex?":"200",
	"What is the average size of an erect penis, in inches?":"4-5",
	"How long are pigs' orgasms, in minutes?":"30",
	"What year was Roe v. Wade decided?":"1973",
	"What year was Lawrence v. Texas, the Supreme Court Case that declared anti-sodomy laws unconstitutional, decided?":"2003",
	"What is one state where the sale of sex toys is banned?":"Alabama",
	"What is the medical term for a prolonged erection?":"priapism",
	"What muscles to kegel exercises strengthen?":"pubococcygeus muscles",
	"What mammals have the largest penises?":"whales",
	"What position helps in removing a tampon or menstrual cup?":"squat",
	"In what century was 'sex' coined?":"14",
	"How many erections do people with penises have on average per day?":"11",
	"What month of the year to do most people engage in sexual activity for the first time?":"June",
	"What is the medical term for a person's first period?":"menarche",
	"What is the most successful pornographic film of all time?":"Deep Throat"
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
		var currAns = $("#answerText").text();

		$(".answerList").append("<li>" + currAns + "</li>")

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
		$('.answerList').empty();

	});

	$(".done").click(function() {
		$(".answerList").slideToggle();
		$(".viewAnswersGlyph").toggleClass('glyphicon-chevron-up', 'glyphicon-chevron-down');
		$(".viewAnswersGlyph").toggleClass('glyphicon-chevron-down', 'glyphicon-chevron-up');
	});
});


