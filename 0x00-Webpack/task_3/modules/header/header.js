import $ from 'jquery'
import { head } from 'lodash';
import style from './header.css'
import logo from '../../assets/holberton-logo.jpg';

let header = document.createElement('header');
let h1 = document.createElement('h1');
let div = document.createElement('div');
div.id = 'logo';
let img = document.createElement('img');
img.src = logo;
img.alt = 'sample logo';
h1.text('Holberton Dashboard');

//append all items
header.append(div, h1);
$('body').append(header);

//print mssg
console.log('Init header');
