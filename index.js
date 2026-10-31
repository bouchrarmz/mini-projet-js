

// console.log( Date.now())
const form =document.getElementById('form')
const ajoute =document.querySelector('button');
const tele =document.getElementById('tele');
const nom =document.getElementById('nom');
const liste =document.getElementById('liste')
const valure=document.querySelector('.valure')
let contacts = []

function afficher(){
     liste.innerHTML = "";
 contacts.forEach(contact => {
     const parent=document.createComment('div')
    const child= document.createElement('li');
    const sup=document.createElement('button ')
    sup.classList.add('supression')
    const edit= document.createElement('button')
    edit.classList.add('edit')
child.textContent= contact.id +"-"+contact.nom +'-'+ contact.tele
liste.append(child);
parent.append(liste)

 });   
}
form.addEventListener('submit' ,function(e){
    e.preventDefault();
 if (nom.value.trim()===""){
 alert('le nom vide')
 return;

}
let contact={
     id: Date.now(),
     nom: nom.value.trim(),
     tele: tele.value.trim()
}
console.log(nom.value)
contacts.push(contact);
afficher();
 form.reset();
  valure.textContent= contacts.length
});
sup.addEventListener('click', function(){
    parent.remove()
})


