const input = document.querySelector('.todo_input');
const addButton = document.querySelector('.add_button');
const ulEl = document.querySelector('.todo_list');

// const ToDoFromLocalStorage = JSON.parse(localStorage.getItem("myToDo"))

addButton.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log(input.value);
    if (input.value === ''){
        alert("Write something!");
        return
    }else{
    createEl(input.value)}
    input.value = ' '
})

function createEl(value){
    const li=document.createElement('li');
    const deleteBtn=document.createElement('button');

    li.className = 'todo_item'
    li.textContent = value

    deleteBtn.className = 'delete_button'
    deleteBtn.textContent = 'X'
    li.appendChild(deleteBtn)
    
    deleteBtn.addEventListener('click', (e)=>{
        console.log(e);
    ulEl.removeChild(li)
    })

    ulEl.appendChild(li)
}

ulEl.addEventListener('click',(e)=>{
    console.log(e.target.tagName);
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked');  
    }
})


















// let myToDo=[]

// const input = document.querySelector('.todo_input');
// const addButton = document.querySelector('.add_button');
// const ulEl = document.querySelector('.todo_list');
// const deleteBtn = document.querySelector('.delete_button');

// addButton.addEventListener('click', addToDo)

// const ToDoFromLocalStorage = JSON.parse(localStorage.getItem("myToDo"))

// if(ToDoFromLocalStorage){
//    myToDo = ToDoFromLocalStorage
//     render(myToDo)
// }

// function addToDo() {
//     myToDo.push(input.value)
//     localStorage.setItem("myToDo", JSON.stringify(myToDo))
//     render(myToDo)
// }

// function render(todo) {      
//     let  counter = 0;
    
//     for (let i = 0; i<todo.length; i++){
//         console.log(todo[i]);
//          ulEl.innerHTML += `
//          <li class="todo_item" id='list_id_${++counter}'>
//              <p>${todo[i]}</p>
//              <button id=${counter} class="delete_button" onClick="qwer()">X</button>
//          </li>`;
//     }  
   
// }

// function qwer(){
//     console.log(333);
// //     var eventId = event.srcElement.id;

// //    var deletingLiElementId = `list_id${eventId}`;

// //    document.getElementById(deletingLiElementId).remove();
// }

// // console.log(JSON.parse(window.localStorage.getItem('myToDo')))

