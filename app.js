const form = document.querySelector(".formQuiz");
const  bloc = document.querySelectorAll(".bloc")
let tableResultat = [];
const reponse = ["c","c","c","a",]
const emojis = ["✅","🫶","👀","🙄"]
const titreResultaut = document.querySelector(".resultat h2")
const texteResultat= document.querySelector(".note");
const aideResultat = document.querySelector(".aide");

let verifTableau = []

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    for(let i=1; i<5; i++){
        tableResultat.push(document.querySelector(`input[name="r${i}"]:checked`).value)
    }
    verifFunc(tableResultat)
    tableResultat =[]

})
function verifFunc(tabResultat){
    for (let i = 0; i < 4; i++) {
        if(tabResultat[i] === reponse[i]){
            verifTableau.push(true);
        }
        else{verifTableau.push(false)}
    }
    afficherResultat(verifTableau)
    couleur(verifTableau)
    verifTableau=[]
}
function afficherResultat(tabbChack) {
    const nbFautes = tabbChack.filter(el => el !== true).length
    console.log(nbFautes)
    switch(nbFautes){
        case 0:
            titreResultaut.innerText = "✅ Bravo, vous avez gangné ✅"
            aideResultat.innerText =""
            texteResultat.innerText = "4/4";
        
            break
        case 1:
            titreResultaut.innerText = "👀 Faites des effort👀 ";
            aideResultat.innerText ="Retentez vous avez fait une faute "
            texteResultat.innerText = "3/4";
            break
        case 2:
            titreResultaut.innerText = "👀 Faites des effort👀" 
            aideResultat.innerText ="Retentez vous avez fait deux fautes ";
            texteResultat.innerText = "2/4";
            
            break
        case 3:
            titreResultaut.innerText = "👀 Faites des effort👀" 
            aideResultat.innerText ="Retentez vous avez fait une faute "
            texteResultat.innerText = "1/4";
        case 4:
            aideResultat.innerText ="🙄 Faites des effort🙄"
            titreResultaut.innerText = "Retentez vous n'avez rien trouvé ";
            texteResultat.innerText = "0/4";
        break
    } 
}
function couleur(tabBool) {
    for (let j = 0; j < tabBool.length; j++) {
        if(tabBool[j]===true){
            bloc[j].style.background = "lightgreen"
        }
        else{
            bloc[j].style.background = "#ffb8b8"
            bloc[j].classList.add('echec')

            setTimeout(()=>{
                bloc[j].classList.remove('echec')
            },500)
        }
        
    }
    
}
bloc.forEach(item =>{
    item.addEventListener("click", ()=>{
        item.style.background = "white"
    })
})
