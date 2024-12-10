$(document).ready(function() {	
	$(".post").addEventListener('click', function() {
  if (isUserLoggedIn()) {
    $(this).next().slideToggle("slow");
  } else {
    alert('Please log in to view the image');
    	location.replace('/login')
  }
});

function isUserLoggedIn() {
   if 'user_data' in session:
        user_data_pprint = pprint.pformat(session['user_data'])#format the user data nicely
    else:
        user_data_pprint = '';
}
});





