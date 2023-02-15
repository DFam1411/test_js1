console.log('test');
const header = document.getElementById('first-header');
header.innerText = 'Main 1111'
header.style.color = 'green'
console.log('Main header', header);


const div = document.getElementById('list');

const ul = document.getElementsByTagName('ul')[0];
ul.style.color = '#123';
const ol = document.createElement('ol');

const uList = div.querySelector('ul');
uList.replaceWith(ol);
ul.replaceWith(uList);
/*
ul.innerHTML=ol.innerHTML;
ul.parentNode.replaceChild(ol, ul);
*/

