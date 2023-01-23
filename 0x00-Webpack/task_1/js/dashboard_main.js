import $ from 'jquery'
const _ = require('lodash');

$('body').append("<p>Holberton Dashboard</p>")
        .append("<p>ashboard data for the students</p>")
        .append("<button>Click here to get started</button>")
        .append("<p id='count'></p>")
        .append("<p>Copyright - Holberton School</p>");
        
let count = 0;

function updateCounter() {
    count++;
    $("#count").text(`${count} clicks on the button`);
}

$("button").on( "click", updateCounter());

$("button").on("click", _.debounce(updateCounter, 500));
