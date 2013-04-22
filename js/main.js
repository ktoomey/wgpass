$(function() {
	var connectors = [' ','-','.','~','+'];
	function getRandomConnector() {
		return connectors[Math.floor(Math.random()*connectors.length)];
	}
	function generatePassword() {
		$.getJSON('data/actions.json',function(data) {
			var actions = data.actions.sort(function() { return 0.5 - Math.random(); });
			$('#manly-action').text(actions[0]);
			$('#manly-action-generate').text(actions[1]);
		});
		$.getJSON('data/passwords.json',function(data) {
			var password =  '' +
							data.first.sort(function() { return 0.5 - Math.random(); })[0] +
							getRandomConnector() +
							data.second.sort(function() { return 0.5 - Math.random(); })[0] +
							getRandomConnector() +
							data.third.sort(function() { return 0.5 - Math.random(); })[0] +
							getRandomConnector() +
							data.numbers.sort(function() { return 0.5 - Math.random(); })[0];
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
