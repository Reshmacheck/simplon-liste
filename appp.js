let case1 = document.querySelector('.saisie');
let divTaches = document.querySelector('.taches');

// bouton ajouter:
case1.insertAdjacentHTML('afterend', `
    <button class="add">+ajouter+</button>
`);

let button = document.querySelector('.add');

button.addEventListener('click', e => {
    divTaches.insertAdjacentHTML('beforeend', `<div class='tache'>
        <p>${case1.value}</p>
        
        <button class='edit'>🖉</button>

        <button class='delete'>✖</button>
    </div>
    `);

    // ajouter des événements
    let btnDelete = [...document.querySelectorAll('.delete')];
    for (let btn of btnDelete) {
        btn.addEventListener('click', e => {
            e.currentTarget.closest('.tache').remove();
            // console.log(btnDelete);
        })
    }

    let btnEdit = [...document.querySelectorAll('.edit')];
    for (let btn of btnEdit) {
        // array: 
        btn.addEventListener('click', e => {
            if( e.currentTarget.previousElementSibling.getAttribute('contenteditable') == null ){
                e.currentTarget.previousElementSibling.setAttribute('contenteditable', true);
            } else {
                e.currentTarget.previousElementSibling.removeAttribute('contenteditable');
            }
            
            // e.currentTarget.closest('.tache').remove();
            // console.log('btnedit');

        })
    }
    


});

