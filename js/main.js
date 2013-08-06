$(function() {
	function shuffle(array) {
		var m = array.length, t, i;

		// While there remain elements to shuffle…
		while (m) {

			// Pick a remaining element…
			i = Math.floor(Math.random() * m--);

			// And swap it with the current element.
			t = array[m];
			array[m] = array[i];
			array[i] = t;
		}

		return array;
	}
	
	var connectors = [' ','-','.','~','+'];
	function getRandomConnector() {
		return shuffle(connectors)[0];
	}
	function generatePassword() {
		$.getJSON('data/actions.json',function(data) {
			var actions = shuffle(data.actions);
			$('#manly-action').text(actions[0]);
			$('#manly-action-generate').text(actions[1]);
		});
		$.getJSON('data/passwords.json',function(data) {
			var password =  '' +
							shuffle(data.first)[0] +
							getRandomConnector() +
							shuffle(data.second)[0] +
							getRandomConnector() +
							shuffle(data.third)[0] +
							getRandomConnector() +
							shuffle(data.numbers)[0];
			$('.output').val(password);
			$('#output-contain').removeClass('hidden');
		});
	}
	
	$('.output').on('click',function() {$(this).select();});
	$('.big-button').on('click',function(e) {
		e.preventDefault();
		generatePassword();
	});

	generatePassword();

});
