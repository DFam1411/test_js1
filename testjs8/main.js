
// table params: objectArray [{ name:  "vasya" }, {}]

const array = [
    {
        name: 'nick',
        age: 18,
        course: 1,
        university: 'PJATK',
        english: 'yes'
    },
    {
        name: 'Dat',
        age: 20,
        course: 2,
        university: 'PJATK',
        english: 'yes'
    },
    {
        name: 'kirill',
        age: 22,
        course: 2,
        university: 'Politeknika',
        english: 'yes'
    },
    {
        name: 'Max',
        age: 20,
        course: 3,
        university: 'Business school',
        english: 'yes'
    },
    {
        name: 'Matvey',
        age: 19,
        course: 0,
        university: 'PJATK',
        english: 'yes'
    },
    {
        name: 'Matvey',
        age: 19,
        course: 0,
        university: 'PJATK',
        english: 'yes'
    },
]

const fields = [];
array.forEach(item => {
    console.log(item);
    fields.push(Object.keys(item));
})
const fieldsNew = fields[0];
const fieldsNewCapitalise = fieldsNew.map( a => a.charAt(0).toUpperCase() + a.substr(1));
console.log(fieldsNewCapitalise);

//TODO sorting js sort(a, b) { return a - b }

function createTable(objectArray, fields, fieldTitles) {
    let body = document.getElementsByTagName('body')[0];
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let thr = document.createElement('tr');
    fieldTitles.forEach(fieldtitle => {
        let th = document.createElement('th');
        th.appendChild(document.createTextNode(fieldtitle));
        thr.appendChild(th);
    })
    thead.appendChild(thr);
    table.appendChild(thead);

    let tbody = document.createElement('tbody');
    let tbr = document.createElement('tr');
    objectArray.forEach((object) => {
        let tbr = document.createElement('tr');
        fields.forEach(field => {
            const td = document.createElement('td');
            td.appendChild(document.createTextNode(object[field]));
            tbr.appendChild(td);
        })
        tbody.appendChild(tbr);
    })
    table.appendChild(tbody);
    body.appendChild(table);
    return table;
};



function sortFields (objectArray, fields) {

}



createTable(array, fieldsNew, fieldsNewCapitalise);
// sortTable(array);