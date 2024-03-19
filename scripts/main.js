document.addEventListener("DOMContentLoaded", function(){

    let etatInitial = true;
    let reponseBall = [
        "Essaye plus tard", "Essaye encore", "Pas d'avis", "C'est ton destin",
        "Le sort en est jeté", "Une chance sur deux", "Repose ta question",
        "D'après moi oui", "C'est certain", "Oui absolument", "Tu peux compter dessus",
        "Sans aucun doute", "Très probable", "Oui", "C'est bien parti", "C'est non",
        "Peu probable", "Faut pas rêver", "N'y compte pas", "Impossible"
    ];
    
    function changeImage() {

        const imageBack = document.getElementById ("backImage");
        const imageFront = document.getElementById ("frontImage");
        const ballText = document.getElementById ("ballText");

        if (etatInitial){
            imageBack.style.display = "none";
            imageFront.style.display = "block";
            ballText.style.display = "block";
            ballText.textContent = randomText();
            etatInitial=false;
            console.log("verif1")
    
        }
    
        else{
                imageBack.style.display = "block";
                imageFront.style.display = "none";
                ballText.style.display = "none";
                etatInitial=true;
                console.log("verif2")
        }
    }

    function randomText() {
        let randomIndex = Math.floor(Math.random() * reponseBall.length);
        return reponseBall[randomIndex];
    } 

    const submitButton = document.getElementById ("submitButton");

    submitButton.addEventListener("click", () => {
        changeImage()
    })

});





// const textArea = document.getElementById (#question);