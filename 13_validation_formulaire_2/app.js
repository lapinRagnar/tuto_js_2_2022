const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const mdp = document.getElementById('mdp')
const mdp2 = document.getElementById('mdp2')


form.addEventListener('submit', (e)=>{
    e.preventDefault()
    checkInputs()
} )

function checkInputs(){
    // obtenir la valeur des inputs
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const mdpValue = mdp.value.trim()
    const mdp2Value = mdp2.value.trim()

    if (usernameValue === '') {
        setErrorFor(username, 'le pseudo ne peut pas être vide!')
    } else {
        setSuccessFor(username)
    }

    if (emailValue === ""){
        setErrorFor(email, "l'adresse email est vide!")
    } else{
        setSuccessFor(email)
    }

    if (mdpValue === ""){
        setErrorFor(mdp, "le mot de passe 1 est vide!")
    } else{
        setSuccessFor(mdp)
    }

    if (mdp2Value === ""){
        setErrorFor(mdp2, "le mot de passe 2 est vide!")
    } else if (mdpValue !== mdp2Value ) {
        setErrorFor(mdp2, "le mot de passe est different!")
    } else {
        setSuccessFor(mdp2)
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement // .form-control
    console.log(formControl);
    const small = formControl.querySelector('small')
    // ajouter message dans small
    small.innerText = message
    
    //ajouter error class
    formControl.className = 'form-control error'
}


function setSuccessFor(input, message){
    const formControl = input.parentElement
    console.log(formControl);
    const small = formControl.querySelector('small')
    formControl.className = 'form-control success'
    small.innerText = ""
}
