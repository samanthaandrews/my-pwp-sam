$(document).ready(function() {
	$('#fullpage').fullpage({

		//basic setup
		sectionsColor: ['rgb(57, 113, 178)', 'rgb(240, 187, 31)', 'rgb(255, 255, 231)', 'rgb(223, 60, 57)', 'rgb(228, 130, 178)'],
		anchors: ['welcome', 'development', 'design', 'writing', 'contact'],
		scrollingSpeed: 1000,

		//navigation buttons
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['welcome', 'development', 'design', 'writing', 'contact'],

		//accessibility
		keyboardScrolling: true,

		//design
		controlArrows: true,
		verticalCentered: false,
		fixedElements: '#header, .footer'
	});
});
