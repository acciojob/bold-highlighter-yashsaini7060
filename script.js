function highlight() {
    //Write your code here
	 var strongTags = document.querySelectorAll('strong');

    // Apply CSS styles to each <strong> tag
    for (var i = 0; i < strongTags.length; i++) {
        strongTags[i].style.color = 'green'; // Example: Change text color to red

    }

}


function return_normal() {
    //Write your code here
	var strongTags = document.querySelectorAll('strong');

    // Apply CSS styles to each <strong> tag
    for (var i = 0; i < strongTags.length; i++) {
        strongTags[i].style.color = 'black'; // Example: Change text color to red

    }
    
}
