




var cat1 = ($("input[name=Question1]:checked").val() != "BIG");
var cat2 = ($("input[name=Question2]:checked").val() != "tupac");
var cat3 = ($("input[name=Question3]:checked").val() != "hill");
var cat4 = ($("input[name=Question4]:checked").val() != "DeathRow");
var cat5 = ($("input[name=Question5]:checked").val() != "quest");
var cat6 = ($("input[name=Question6]:checked").val() != "bag");
var cat7 = ($("input[name=Question7]:checked").val() != "jeff");
var cat8 = ($("input[name=Question8]:checked").val() != "PublicEnemy");

// need to define and start a timer $('#timer-div') 

$('#restart').on('click', function(){
		$('#results-div').empty();
});

$('#submit').on('click', function() {
			// need to check for correct answers and display to $('#results-div')



			// term = $('#searchTerm').val().trim();
			// inputBegin = $('#start').val().trim();
			// inputEnd = $('#end').val().trim();
			// number = $('input[name=radioName]:checked', '#myForm').val();

			// console.log($('input[name=radioName]:checked', '#myForm').val())

			// displayResults();
});







// function displayResults() {
// 	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// 	url += '?' + $.param({
// 	  'api-key': "d64907f7906d46f2a3c6713b0ff7f5ec",
// 	  'q': term,
// 	  'begin_date': inputBegin,
// 	  'end_date': inputEnd,
// 	  'page': number
// 	});
// 	$.ajax({
// 	  url: url,
// 	  method: 'GET',
// 	}).done(function(result) {
// 	  console.log(result);

// 	 for (var i = 0; i < number; i++) {

// 	 		var title = $('<h1>');
// 	 		title.text(result.response.docs[i].headline.main);
// 	 		var description = $('<p>');
// 	 		description.text(result.response.docs[i].snippet);
// 	 		var divArticle = $('<div>');
// 	 		divArticle.append(title, description);
// 	 		$('#results-div').append(divArticle);
// 	 		console.log(result.response.docs[i].headline.main);
// 	 		console.log(result.response.docs[i].snippet);
// 	 }


// 	}).fail(function(err) {
// 	  throw err;
// 	});

// }