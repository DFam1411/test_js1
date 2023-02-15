const id = document.getElementById('user_id');
console.log(id)

function formSubmitted(){
    if(id.value.length==0){
        id.style.borderColor = 'red';
    }
}