

// console.log( Date.now())
const form =document.getElementById('form')
const ajoute =document.querySelector('button');
const tele =document.getElementById('tele');
const nom =document.getElementById('nom');
const liste =document.getElementById('liste')
const valure=document.querySelector('.valure')
 const search =document.getElementById('search')

let contacts = []
let modifactioncontact= null;

function afficher(){
     liste.innerHTML = "";
 contacts.forEach(contact => {
    //  const parent=document.createComment('div')
     const child= document.createElement('li');
     child.classList.add('child')
     child.dataset.id = contact.id;
    const sup=document.createElement('button')
    sup.classList.add('supression')
    sup.textContent='suppreme'
    const edit= document.createElement('button')
//     sup.addEventListener('click', function(){
//     parent.remove()
// })

    edit.classList.add('edit')
    edit.textContent='modifer'
child.textContent= contact.id +"-"+contact.nom +'-'+ contact.tele
child.append(edit,sup)
liste.append(child);


 });   
}
form.addEventListener('submit' ,function(e){
    e.preventDefault();
 if (nom.value.trim()===""){
 alert('le nom vide')
 return;

}
if (modifactioncontact !==null){
        const index=contacts.findIndex(c=>c.id === modifactioncontact)
        contacts[index].nom= nom.value.trim();
        contacts[index].tele= tele.value.trim();
     }else{
let contact={
     id: Date.now(),
     nom: nom.value.trim(),
     tele: tele.value.trim()
}
contacts.push(contact);}
modifactioncontact = null;
ajoute.textContent = "Ajouter";
afficher();
 form.reset();
   valure.textContent= contacts.length
  

});
liste.addEventListener('click', function(e){
if(e.target.classList.contains('supression') ){
    const contactindex=e.target.closest('.child')
    const id = Number(contactindex.dataset.id);
    contacts=contacts.filter(contact=> contact.id !== id )
    afficher();
    valure.textContent = contacts.length;
    }
     if (e.target.classList.contains('edit')){
        const contactemodifier = e.target.closest('.child');
        const id=Number(contactemodifier.dataset.id)
        const contacte=contacts.find(c=>c.id===id)
        nom.value= contacte.nom;
        tele.value= contacte.tele;
        modifactioncontact= contacte.id;
         ajoute.textContent = "Modifier";

    
     }
})
// search.addEventListener('input', function(){
//     let  nomserch=search.value.toLowerCase();
//     const filternom= contacts.filter(nom.toLowerCase().includes(nomserch))
    
//     afficher();
// })



