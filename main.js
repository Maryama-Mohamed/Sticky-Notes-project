
let createBox = document.getElementsByClassName('createBox')[0];

let notes = document.getElementsByClassName('notes')[0];

let input = document.getElementById('userInput');

let create = document.getElementById('create');

let i = 0;

create.addEventListener('click', () => {

    // console.log("clicked create")
    createBox.style.display = 'block';
});

createBox.addEventListener('keydown', content);

function content(e){
    if(e.keyCode == '13'){

        divStyle(input.value);

        input.value = '';

        createBox.style.display = 'none';
    }
}


function color(){

      let rendomColors = ['#c2ff3d', '#ff3de8', '#3dc2ff', '#04e022', '#bc83e6', '#ebb238', '#2f6dff', '#4cee3d', '#cc4e00', '#0392ca', '#18f867', '#ff3c3c'];

      if(i > rendomColors.length - 1){

        i = 0;
        
      }
    return   rendomColors[i++];
}
function divStyle(text){

       let div = document.createElement('div');

       div.className = 'note';

       div.innerHTML = '<div class = "details"' + '<h3>' + text + '</h3>' + '</div>';

       div.addEventListener('click', () => {
        div.remove();

       });

       div.setAttribute('style', 'background: ' + color() + ';');
       notes.appendChild(div);
}
