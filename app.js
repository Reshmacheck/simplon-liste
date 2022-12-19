// je cible la case editable de mon html:
// je crée un btn+ virtuel
// let addButton = document.createElement('button');
// addButton.innerHTML='+ajouter+';
// UN ELEMENT VIRTUEL ON L INSERT AVEC insertAdjacentELEMENT sinon ca marche pas: 
// addButton.addEventListener('click', event=>{
//     console.log(addButton);
//     // dans ma target precise j'ajouter ma variable item
//     event.currentTarget.insertAdjacentHTML('afterbegin', item.outerHTML);
// })
//  console.log(addButton);
// je crée un button 'ajouter' que je place sous la case1:
// case1.insertAdjacentElement('afterend', addButton);
// -----------------------------------------------------

// taches.insertAdjacentHTML('afterend', `<button class='delete'>✖</button>`);

// taches.insertAdjacentHTML('afterend', `<button class='edit'>🖉</button>`);







let case1 = document.querySelector('.saisie');
let taches = document.querySelector('.taches');

case1.insertAdjacentHTML('afterend', `
    <button>+ajouter+</button>
`);


// let edit = document.querySelector('.edit');



let button = document.querySelector('button');
button.addEventListener('click', e => {
    taches.insertAdjacentHTML('beforeend', `<div class='tache'>
        <p>${ case1.value }</p>
        
        <button class='edit'>🖉</button>

        <button class='delete'>✖</button>
    </div>
    `);

    // ajouter des événements

});

let caseVirtuel = document.querySelector('.tache')
let dele = document.querySelector('.tache .delete')
console.log(caseVirtuel);

let del = document.querySelector('.del');
del.addEventListener('click', e =>{
    caseVirtuel.remove();

})




// let delete = document.querySelector('.delete');
// button.addEventListener('click', e => {
//     console.log(delete);  

// })





// je crée un blockquote "item" virtuel que je vais appeler avec mon btn addButton:
// let item = document.createElement('blockquote');
// item.innerHTML= 'item';











