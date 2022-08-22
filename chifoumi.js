const player = document.querySelectorAll(".playground")



function letPlay() {
    robotValue = Math.floor(Math.random()*3);
    let image = ''
    if (robotValue ==0) {
        image="pierre";
    }else if (i==1){
        image="ciseaux";
    }else {
        image="papier";
    }
    
    robot.innerHTML = `<img src="img/`+image+`.jpg"
    
    console.log("playerValue:" , playerValue);
    console.log(Math.floor(Math.random() *3));
}

//la boucle for prend en parametres 3 arguments (init comparaison action)
for (let i= 0; i< player.length; i++) {
    player[i].addEventListener('click', (e)=>{
        if (i==0) {
            playerValue="pierre";
        }else if (i==1){
            playerValue="ciseaux";
        }else {
            playerValue="papier";
        }
        letPlay()
            
        
    })
    
}