console.log('test');
const header = document.getElementById('first-header');
header.innerText = 'Main 1111'
header.style.color = 'green'
console.log('Main header', header);

const header2 = document.getElementsByTagName('h2');


const div = document.getElementById('list');

const listItem = document.querySelector("ul");
console.log('list ', listItem);

    const newItem = document.createElement('ol');
    newItem.innerHTML = `<ol>
<li>elements 123</li>
<li>elements 123</li>
<li>elements 123</li>
<li>elements 123</li>
<li>elements 123</li>
<li>elements 123</li>
</ol>
`;
    listItem.parentNode.replaceChild(newItem, listItem);

