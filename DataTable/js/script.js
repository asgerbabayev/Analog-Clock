const name = document.getElementById("name");
const surname = document.getElementById("surname");
const age = document.getElementById("age");
const id = document.getElementById("id");
const tbody = document.querySelector("tbody");
const btnAdd = document.getElementById("btnAdd");
const search = document.getElementById("search");
const btnUpdate = document.getElementById("btnUpdate");
const table = document.querySelector("table");

let number = 0;
btnAdd.addEventListener("click", function(){
tbody.innerHTML += `<tr>
                <td>${++number}</td>
                <td>${name.value}</td>
                <td>${surname.value}</td>
                <td>${age.value}</td>
                <td><span class="btn btn-warning"  onclick="edit(this)">Edit</span></td>
                <td><span class="btn btn-danger"  onclick="remove(this)">Delete</span></td>
            </tr>`;
});

function remove(btn){
   var currentIndex = btn.closest("tr").rowIndex;
   table.rows[currentIndex].remove();
}

function edit(btn){
   var currentIndex = btn.closest("tr").rowIndex;
   id.value = table.rows[currentIndex].cells[0].innerText;
   name.value = table.rows[currentIndex].cells[1].innerText;
   surname.value = table.rows[currentIndex].cells[2].innerText;
   age.value = table.rows[currentIndex].cells[3].innerText;
}

btnUpdate.addEventListener("click",function(){
    var hiddenId = id.value;
    table.rows[hiddenId].cells[1].innerText = name.value;
    table.rows[hiddenId].cells[2].innerText = surname.value;
    table.rows[hiddenId].cells[3].innerText = age.value;
});

search.onkeyup = function (){
    let searchText = search.value;
    console.log(searchText);
    for (let i = 0; i < table.rows.length; i++) {
        if (table.rows[i].cells[1].innerText === searchText) {
          table.rows[i].classList.remove("d-none");
        }
        else{
            table.rows[i].classList.add("d-none");
        }
    }
}

window.addEventListener("")