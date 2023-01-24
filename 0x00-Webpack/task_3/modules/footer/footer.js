import $ from 'jquery';
import style from './footer.css';

let footer = document.createElement('p');
footer.text('Copyright - Holberton School');

//append to the body
$('body').append(footer);