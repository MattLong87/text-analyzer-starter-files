// your code here!
function submitListener(){
	$('form').submit(function(event){
		//prevents submit button from loading new page
		event.preventDefault();

		//unhide the results area
		$("dl").removeClass("hidden");

		//asign input text to variable named submission
		var submission = $('textarea').val();

		//get words as an alphabetized array
		var wordsArray = getWords(submission);

		//populate the word count
		var wordCount = countWords(wordsArray);
		$('.js-word-count').text(wordCount);

		//populate the unique word count
		var uniqueWordCount = countUniqueWords(wordsArray);
		$('.js-unique-word-count').text(uniqueWordCount);

		//populate the average word length
		var averageLength = computeAverageLength(wordsArray);
		$('.js-average-word-length').text(averageLength.toFixed(2) + " characters");

	});


}

function getWords(string){
	return string.toLowerCase().split(/[ ,!.";:-]+|\r\n|\r|\n/).filter(Boolean).sort();
}

function countWords(wordsArray){
	return wordsArray.length;
}

function countUniqueWords(wordsArray){
	var uniqueWords = [];
	wordsArray.map(function(a){
		if(uniqueWords.indexOf(a) == -1){
			uniqueWords.push(a);
		}
	});
	return uniqueWords.length;
}

function computeAverageLength(wordsArray){
	var sum = 0;
	wordsArray.map(function(a){
		sum += a.length;
	});
	return sum / wordsArray.length;
}


$(submitListener);