const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

const AddTask = () => {
    const textTask = inputBox.value;
    if (!textTask) {
        Swal.fire(
            'pleas enter task',
            '',
            'error'
        )

    }
    else {
        const li = document.createElement('li')
        li.innerText=textTask
        const span = document.createElement('span')
        span.innerHTML = '&#10005;'
        li.appendChild(span)
        listContainer.appendChild(li)
    }
    inputBox.value = ''
    saveTasks()
}

listContainer.addEventListener('click',e=>{
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveTasks()
    }
    if (e.target.tagName === 'SPAN') {
        e.target.parentNode.remove();
        saveTasks()
    }
    
})

const saveTasks=()=>{
    localStorage.setItem('data',listContainer.innerHTML)
}
const loadTasks=()=>{
    listContainer.innerHTML=localStorage.getItem('data')
}
loadTasks();