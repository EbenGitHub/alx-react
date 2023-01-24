import $ from 'jquery';
const _ = require('lodash');
import style from './body.css'

let btn = document.createElement('button');
btn.text('Click here to get started');
let p = document.createElement('p');
p.id = 'count';

//append to body
$('body').append(btn, p);