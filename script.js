nom = document.getElementById("nom");
email = document.getElementById("email");
texte = document.getElementById("texte");

function  verification() {
if (nom.value == "") {
    alert("Please enter your name.");
    nom.style.backgroundColor = "#FC9E9E";
    nom.focus();
}else {
    nom.style.backgroundColor = "#eee";
}

valide = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
if ( email.value == "" || valide.test(email.value) == false ) {
    alert("Please enter a valid e-mail address.");
    email.style.backgroundColor = "#FC9E9E";
    email.focus();
}else {
    email.style.backgroundColor = "#eee";
}


if (texte.value == "") {
    alert("Please enter a text.");
    texte.style.backgroundColor = "#FC9E9E";
    texte.focus();
}else {
    texte.style.backgroundColor = "#eee";
}
}
