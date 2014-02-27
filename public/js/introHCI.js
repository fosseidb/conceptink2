'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.requestlistitem a').click(function(e) {
		// Prevent following the link
		e.preventDefault();
		console.log('clicked request');
		// Get the div ID, e.g., "project3"
		var requestID = $(this).closest('.requestlistitem').attr('id');
		console.log('requestID ' + requestID);
		// get rid of 'project' from the front of the id 'project3'
		//var idNumber = projectID.substr('requestlistitem'.length);
		//onsole.log('idNumber ' + idNumber);
		// this is the URL we'll call
		var url_call = '/request/'+requestID;
		console.log('url_Call ' +url_call);
		

		//How to respond to the GET request
		// function addRequestDetails(project_json) {
		// 	//We need to compute a display string for the date
		// 	//Search 'toLocaleDateString' online for more details.
		// 	var date_obj = new Date(project_json['deadline']);
		// 	var options = {
		// 		weekday: "long",
		// 		year: "numeric",
		// 		month: "long",
		// 		day: "numeric"
		// 	};
		// 	var display_date = project_json['deadline']; //date_obj.toLocaleDateString('en-US', options);

		// 	// compose the HTML
		// 	var new_html =
		// 		'<div class="deadline-date">'+display_date+'</div>'+
		// 		'<div class="request-summary">'+project_json['summary']+'</div>'+
		// 		'<button class="request-delete btn btn-default" '+
		// 			'type="button">delete</button>';

		// 	// get the DIV to add content to
		// 	var details_div = $('#requestlistitem' + idNumber + ' .details');
		// 	// add the content to the DIV
		// 	details_div.html(new_html);

		// 	details_div.find('.request-delete').click(function(e) {
		// 		$.post('/requestlistitem/'+idNumber+'/delete', function() {
		// 			window.location.href = '/';
		// 		});
		// 	});
		// }

		// issue the GET request
		$.get(url_call, addRequestDetails);
	});

	$('#newMemberSubmitButton').click(function(e) {
		console.log('clicked');
		var name = $('#new-member-form #name').val();
		var email = $('#new-member-form #email').val();
		var password = $('#new-member-form #password').val();
		var type = $('#new-member-form #type').val();
		var json = {
			'name': name,
			'email': email,
			'password':  password,
			'type': type,
			'rating': 0
		};
		console.log(json);
		$.post('./member/new', json, function() {
			window.location.href = '/'; // reload the page
		});
	});

	$('#newRequestSubmitButton').click(function(e) {
		console.log('clicked');
		var title = $('#new-request-form #title').val();
		var keywords = $('#new-request-form #keywords').val();
		var deadline = $('#new-request-form #deadline').val();
		//var type = $('#new-request-form #type').val();
		var json = {
			//'user': user,
			'title': name,
			'keywords': email,
			'deadline':  password,
			'type': type
		};
		console.log(json);
		// $.post('/project/new', json, function() {
		// 	window.location.href = './clienthome'; // reload the page
		// });
	});

	$('#signinSubmitButton').click(function(e) {
		console.log('clicked');
		var title = $('#new-request-form #title').val();
		var keywords = $('#new-request-form #keywords').val();
		var deadline = $('#new-request-form #deadline').val();
		//var type = $('#new-request-form #type').val();
		var json = {
			//'user': user,
			'title': name,
			'keywords': email,
			'deadline':  password,
			'type': type
		};
		console.log(json);
		// $.post('/project/new', json, function() {
		// 	window.location.href = './clienthome'; // reload the page
		// });
	});

	$("#testjs").click(function(e) {

	})
}


