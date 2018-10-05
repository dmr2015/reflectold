// App version of Portfolio

// Let's register Template7 helper so we can pass json string in links
Template7.registerHelper('json_stringify', function (context) {
    return JSON.stringify(context);
});


// Initialize app
var myApp = new Framework7({
    animateNavBackIcon: true,
    // Enable templates auto precompilation
    precompileTemplates: true,
    // Enabled pages rendering using Template7
    template7Pages: true,
    // Title of app in modal boxes
    modalTitle: 'Portfolio',
    // Specify Template7 data for pages    
    template7Data: {
        // Will be applied for page with data-page="contacts"
        'page:reviewsubmit': {
        	studentemail: '',
        	studnetname: '',
            email: 'daniel.ringrose@minotstateu.edu',
            previewtext: 'blank',
            emailtext: 'blank',
        },
    }
});

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

// set up advisor picker cover.html page
myApp.onPageInit('cover', function(page){
	var pickerDevice1 = myApp.picker({
		input: '#pickadvisor',
		toolbarCloseText: 'OK',
		rotateEffect: true,
		cols: [
			{
				textAlign: 'left',
				values: ['Dr. Andreasen', 'Dr. Pijning', 'Dr. Jastrzembski', 'Dr. Ringrose', 'Dr. Singer', 'other']
			}
		]
	});
	
	var pickerDevice2 = myApp.picker({
		input: '#pickgradterm',
		toolbarCloseText: 'OK',
		rotateEffect: true,
		cols: [
			{
				textAlign: 'left',
				values: ('Fall Spring Summer').split(' ')
			},
			{
				values: ('2017 2018 2019 2020').split(' ')
			},
		]
	});	
	
		var pickerDevice3 = myApp.picker({
		input: '#pickdegree',
		toolbarCloseText: 'OK',
		rotateEffect: true,
		cols: [
			{
				textAlign: 'left',
				values: ['BA', 'BSED', 'other']
			}
		]
	});
	
});

// set up paper list page
myApp.onPageInit('paperlist', function(page){

	var courselist = ['401 Historiography', '499 Special Topics', '497 Internship', '494 Independent Study', '491 Seminar', '460 Modern France Francophone World', '442 Crusades', '440 Comparative Slavery Americas',  '435 Latin America Seminar', '434 History and Multimedia', '430 Native American Social History', '420 Indian People Great Plains', '415 20th C. America', '410 Trans-Mississippi West', '385 Brazil', '380 Mexico', '365 Peoples and Cultures of Native North America', '363 Atlantic History', '352 Medieval and Early Modern Women', '351 Mediterranean World', '350 20th Century Europe', '347 Making of Modern Europe', '343 Medieval Church', '342 Age of the Vikings', '338 South Africa', '337 Imperialism', '336 African American', '328 Tranformation of America', '325 Sectionalism and Civil War', '320 Early Republic', '319 Colonial America', '315 American Women', '299 Special Topics', '261 American Indian History', '251 Public History', '220 North Dakota', 'not listed'];
	var pickerDevice1 = myApp.picker({
		input: '#course1title',
		toolbarCloseText: 'OK',
		rotateEffect: true,
		cols: [
			{
				textAlign: 'left',
				values: courselist
			}
		]
	});
	var pickerDevice2 = myApp.picker({
		input: '#course2title',
		toolbarCloseText: 'OK',
		rotateEffect: true,
		cols: [
			{
				textAlign: 'left',
				values: courselist
			}
		]
	});
	var pickerDevice3 = myApp.picker({
		input: '#course3title',
		toolbarCloseText: 'OK',
		rotateEffect: true,
		cols: [
			{
				textAlign: 'left',
				values: courselist
			}
		]
	});
	var pickerDevice4 = myApp.picker({
		input: '#course4title',
		toolbarCloseText: 'OK',
		rotateEffect: true,
		cols: [
			{
				textAlign: 'left',
				values: courselist
			}
		]
	});
	var pickerDevice5 = myApp.picker({
		input: '#course5title',
		toolbarCloseText: 'OK',
		rotateEffect: true,
		cols: [
			{
				textAlign: 'left',
				values: courselist
			}
		]
	});
	var pickerDevice6 = myApp.picker({
		input: '#course6title',
		toolbarCloseText: 'OK',
		rotateEffect: true,
		cols: [
			{
				textAlign: 'left',
				values: courselist
			}
		]
	});
	var pickerDevice7 = myApp.picker({
		input: '#course7title',
		toolbarCloseText: 'OK',
		rotateEffect: true,
		cols: [
			{
				textAlign: 'left',
				values: courselist
			}
		]
	});
		var pickerDevice8 = myApp.picker({
		input: '#course8title',
		toolbarCloseText: 'OK',
		rotateEffect: true,
		cols: [
			{
				textAlign: 'left',
				values: courselist
			}
		]
	});	
});

// function make pdf
function makePDF() {

	// make and save pdf {test doc for now}
			console.log('making a pdf');

			var success = function(status) {
				console.log('Message a: ' + status);
			}

			var error = function(status) {
				console.log('Error b: ' + status);
			}

			window.html2pdf.create(
				"<html><head></head><body><h1>Some</h1><p>html content.</p></body></html>",
				"~/Documents/test.pdf",
				success,
				error
			);
}

//force text area to expand when page is entered - shows all text
myApp.onPageInit('goal1 goal2 goal3 goal4 goal5 goal6 goal7 goal8 reviewsubmit', function(page) {
	// add error checking
	switch(page.name) {
	case 'goal1':
		var temp = myApp.resizeTextarea("textarea[name='goaltext']");
		break;
	case 'goal2':
		var temp = myApp.resizeTextarea("textarea[name='goaltext']");
		break;
	case 'goal3':
		var temp = myApp.resizeTextarea("textarea[name='goaltext']");
		break;
	case 'goal4':
		var temp = myApp.resizeTextarea("textarea[name='goaltext']");
		break;
	case 'goal5':
		var temp = myApp.resizeTextarea("textarea[name='goaltext']");
		break;
	case 'goal6':
		var temp = myApp.resizeTextarea("textarea[name='goaltext']");
		break;
	case 'goal7':
		var temp = myApp.resizeTextarea("textarea[name='goaltext']");
		break;
	case 'goal8':
		var temp = myApp.resizeTextarea("textarea[name='goaltext']");
	    break;
	case 'reviewsubmit':
	    var temp = myApp.resizeTextarea("textarea[name='previewtext']");
	    $$('.sendpdfmail').on('click', function() {
			console.log('hello');
			// save this - it is how to mail the pdf using the email plugin...
			// assumes the PDF already exists
			//			myApp.alert('attempting mail plugin with attachment');
						makePDF();
						var fp = cordova.file.applicationStorageDirectory + '/Documents/test.pdf';
						//cordova.plugins.email.open({attachments: [fp]});			
		});
	}

});



function erase() {
	function deleteform(formName) {
		if (myApp.formGetData(formName))
		{
		var storedData = myApp.formDeleteData(formName);
		}
	}
	deleteform('cover');
	deleteform('paperlist');
	deleteform('goal1');
	deleteform('goal2');
	deleteform('goal3');
	deleteform('goal4');
	deleteform('goal5');
	deleteform('goal6');
	deleteform('goal7');
	deleteform('goal8');
	
	myApp.alert('Content erased');
}

function giveFormObject(formName) {
	var tempobj = {
		goalrating:'0',
		goaltext:'No reflection',
		}

	if (myApp.formGetData(formName)) {
		var tempForm = myApp.formGetData(formName);
		tempobj.goalrating = tempForm.goalrating;	
		if (tempForm.goaltext.length>0)
		{tempobj.goaltext = tempForm.goaltext}		
	}
	return tempobj
}


// function to assemble fields into the preview text
function makePreview() {
	var lbr = '\n';
	var thetext = 'History Portfolio' + lbr + lbr;
	var tempform;
	var storedData;
	console.log('entering makePreview');
	// prepare the cover page
	thetext = thetext + 'Cover Page' + lbr + lbr;
	if (myApp.formGetData('cover')) {
		tempform = myApp.formGetData('cover');
		if (tempform.username) {thetext = thetext + 'Name: ' + tempform.username + lbr}
		if (tempform.msuid) {thetext = thetext + 'ID: ' + tempform.msuid + lbr}
		if (tempform.pickadvisor) {thetext = thetext + 'Advisor: '+ tempform.pickadvisor + lbr}
		if (tempform.pickgradterm) {thetext = thetext + 'Graduation Term: ' + tempform.pickgradterm + lbr}
		if (tempform.pickdegree) {thetext = thetext + 'Degree: '+ tempform.pickdegree + lbr}	
		if (tempform.minors) {thetext = thetext + 'Minor(s): '+ tempform.minors + lbr}
		if (tempform.concentrations) {thetext = thetext + 'Concentration(s): '+ tempform.concentrations + lbr}
		thetext = thetext + lbr + "Contact Information" + lbr;
		if (tempform.email) {thetext = thetext + 'Email: ' + tempform.email + lbr}
		if (tempform.localaddress) {thetext = thetext + 'Local Address: ' + tempform.localaddress + lbr}
		if (tempform.cellphone) {thetext = thetext + 'Cell #: ' + tempform.cellphone + lbr}
		if (tempform.otherphone) {thetext = thetext + 'Other #: '+ tempform.otherphone + lbr}
		if (tempform.permanentaddress) {thetext = thetext + 'Permanent Address:' + tempform.permanentaddress + lbr}
		thetext = thetext + lbr
	}
	// prepare the paper list
	// check if 'paperlist' form exists
	thetext = thetext + 'List of Papers' + lbr;

	if (myApp.formGetData('paperlist')) {
		tempform = myApp.formGetData('paperlist');
		var tempstr = '1';
		for (i = 1; i<9; i++) {
			tcoursestr = 'course' + i.toString() + 'title';
			ttitlestr = 'paper'+i.toString() + 'title';
			if (tempform[tcoursestr]) {thetext = thetext + tempform[tcoursestr] + lbr}
			if (tempform[ttitlestr]) {thetext = thetext + tempform[ttitlestr] + lbr + lbr}
			if (!tempform[ttitlestr]) {thetext = thetext + lbr}				
			}
		}
	thetext = thetext + lbr;
	// prepare the reflections and ratings
	thetext = thetext + 'Reflections and Ratings' + lbr;

	tempstr = '1';
		for (i = 1; i<9; i++) {
			tempstr = 'goal' + i.toString();		
			storedData = giveFormObject(tempstr);
			if (storedData.goalrating<1)
			{thetext = thetext + 'Goal ' + i.toString() + ' not rated ' + lbr}
			else
			{thetext = thetext + 'Goal ' + i.toString() + ' Rating: ' + storedData.goalrating + lbr}

			thetext = thetext + storedData.goaltext + lbr + lbr;	
		}
		
			console.log('leaving makePreview');
		
	return thetext;
}

// convert preview text to text for export to email
function encodeText(thetext) {
  return encodeURIComponent(thetext);
}

function setSendEmail() {
	//set default email to dmr - in case advisor not entered
	var result = 'daniel.ringrose@minotstateu.edu';
	if (myApp.formGetData('cover')) {
		var tempform = myApp.formGetData('cover');
		var advisor = tempform.pickadvisor;
		if (advisor.length>0)
		{
			switch(advisor) {
				case 'Dr. Andreasen':
				result = 'bethany.andreasen@minotstateu.edu';
				break;
				case 'Dr. Pijning':
				result = 'ernst.pijning@minotstateu.edu';
				break;
				case 'Dr. Jastrzembski':
				result = 'joseph.jastrzembski@minotstateu.edu';
				break;
				case 'Dr. Ringrose':
				result = 'daniel.ringrose@minotstateu.edu';
				break;
				case 'Dr. Singer':
				result = 'mark.singer@minotstateu.edu';
				break;
				case 'Other':
				result = 'daniel.ringrose@minotstateu.edu';
			}
			// check if the student email was entered; add it 
			if (tempform.email.length>0)
			{result = result + ', ' + tempform.email}	
		}
	}
	return result;
}

$$('.eraseall').on('click', function() {
	myApp.confirm('Cannot be undone', 'Erase All Content?', function () {
        erase();
    });	
})

$$('.networktype').on('click', function () {
// previewtext is for displaying on screen; emailtext contains proper line breaks
		var networkState = navigator.connection.type;
		var states = {};
		states[Connection.UNKNOWN]  = 'Unknown connection';
		states[Connection.ETHERNET] = 'Ethernet connection';
		states[Connection.WIFI]     = 'WiFi connection';
		states[Connection.CELL_2G]  = 'Cell 2G connection';
		states[Connection.CELL_3G]  = 'Cell 3G connection';
		states[Connection.CELL_4G]  = 'Cell 4G connection';
		states[Connection.CELL]     = 'Cell generic connection';
		states[Connection.NONE]     = 'No network connection';

		myApp.alert('Connection type: ' + states[networkState]);	
});	


// $$('.makepdf').on('click', function() {
//		alert('making pdf b');

//        var success = function(status) {
//            alert('Message c: ' + status);
//        }

//        var error = function(status) {
//            alert('Error d: ' + status);
//        }

//        window.html2pdf.create(
//            "<html><head></head><body><h1>Some</h1><p>html content.</p></body></html>",
//            "~/Documents/test.pdf",
//            success,
//            error
//        );

//});

//$$(document).on('deviceready', function(){ myApp.alert("device ready"); cordova.plugins.email.isAvailable( function (isAvailable) { myApp.alert("isAvailable"); cordova.plugins.email.open({ to: 'max@mustermann.de', cc: 'erika@mustermann.de', bcc: ['john@doe.com', 'jane@doe.com'], subject: 'Greetings', body: 'How are you? Nice greetings from Leipzig' }); } ); });




//('a').on('click', function (e) { 
//  console.log('clicked'); 
//});



$$('.preview').on('click', function () {
// previewtext is for displaying on screen; emailtext contains proper line breaks
	
	var settings = localStorage.f7Form-settings;
	
	myApp.template7Data['page:reviewsubmit'].previewtext = makePreview();
	myApp.template7Data['page:reviewsubmit'].emailtext = encodeText(myApp.template7Data['page:reviewsubmit'].previewtext);	

	// fix by calling:  var emailstring = setSendEmail();
	myApp.template7Data['page:reviewsubmit'].email = setSendEmail();

	mainView.router.load({url:'reviewsubmit.html'});
});	

// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})



$$('.callsettings').on('click', function () {
view.hideNavbar()
});		

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})