document.getElementById('inscription').addEventListener('submit', (e)=>{

    e.preventDefault()

    let erreur
    // pour eviter de selectionner tous les inputs
    inputs = document.getElementById('inscription').getElementsByTagName('input')
    // ou
    // inputs = this.getElementsByTagName('input')
    
    console.log(inputs);
    for (i=0; i<inputs.length; i++){
        if (!inputs[i].value){
            erreur = "Il faut remplir tous les chammps!"
            console.log(erreur);
        }
    }

    if (erreur){
        e.preventDefault()
        document.getElementById('erreur').innerHTML = erreur

        setTimeout(() => {
            location.reload()
        }, 3000);
        return false
    }

    // if (!pseudo.value) {
    //     erreur = "entrez un pseudo!"
    // }
    // if (!email.value) {
    //     erreur = "entrez un email!"
    // }
    // if (!email1.value) {
    //     erreur = "entrez un email!"
    // }
    // if (!mdp.value) {
    //     erreur = "entrez un mdp!"
    // }

    // if (erreur){
    //     e.preventDefault()
    //     document.getElementById('erreur').innerHTML = erreur
    //     return false
    // } else{
    //     alert('formulaire envoyé!')
    // }
})