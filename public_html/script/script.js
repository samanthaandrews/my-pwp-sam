$(document).ready(function() {
	$('#fullpage').fullpage({

		//basic setup
		sectionsColor: ['rgb(57, 113, 178)', 'rgb(240, 187, 31)', 'rgb(255, 255, 231)', 'rgb(223, 60, 57)', 'rgb(228, 130, 178)'],
		anchors: ['welcomeJs', 'developmentJs', 'designJs', 'writingJs', 'contactJs'],
		scrollingSpeed: 1000,

		//navigation buttons
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['welcomeJs', 'developmentJs', 'designJs', 'writingJs', 'contactJs'],

		//accessibility
		keyboardScrolling: true,

		//design
		controlArrows: true,
		verticalCentered: false,
		fixedElements: '#header, .footer'
	});
});
