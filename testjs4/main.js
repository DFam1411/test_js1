
const signInObject = {
    username: 'Max',
    email: 'max@gmail.com',
    password: '123214124'
}

const array = [1,2,4,5,7,{year: '2002'}, 'table',false, null];
console.log(array);

for(let i = 0;i<=array.length;i++){
    console.log(i+' '+array[i]);
    if(typeof array[i]==='object'){
        console.log(array[i]);
    }
}
const arrayKeys = Object.values(signInObject);

console.log('Array-Keys', arrayKeys);

const arrayFilter = array.filter( item =>{
    console.log(item);
    if (item === null) {
        return;
    }
    return item.year;
    }
)
console.log('array filter: ', arrayFilter);

let newArray = [];
array.forEach(item => newArray.push(item));
console.log(newArray);