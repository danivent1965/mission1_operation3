//Declarations et affectations des variables
let board =[]; //le tableau vide
let capture = ''; //la saisie de nombres
let captureZero = ''; //la saisie de 0 pour sortir 
let sumBoard = 0; //la somme des nombres saisis
let averageBoard = 0; //la moyenne des nombres saisis
let captureTotal = 0; //le total de nombres saisis
let maxBoard = ''; // le nombre saisi le plus petit
let minBoard = ''; //le nombre saisi le plus grand
let err = 0;
//On defini ce que l'utilisateur peut taper
let reg = new RegExp("^[\-]?[0-9]+[,\.]?[0-9]*$")

//Boucle tant que la fin de la saisie n'est pas validée par 0
while (captureZero !=1){

    err = err +1

    //Demande de saisie de nombres  
    capture=prompt('Entrez un nombre puis appuyez sur ENTREE pour valider. Pour terminer entrez  0')

    //Vérification Regex (sécurisation de la saisie)
    if(reg.test(capture)){

        //On sort le 0 de sortie du tableau et incrémente le tableau   
        if(capture !=0){
        board.push(parseInt(capture))
        console.log(`Vous venez d'entrer le nombre: ${capture}`)
        }

        //L'utilisateur peut avoir tapé 0 par erreur et revenir dans la capture
        if (capture == 0){

            //Si l'utilisateur commence par un 0, il recoit un message d'erreur et reviens sur la saisie
            if(err==1){
                alert('Vous n\'avez saisi aucun nombre!');
            }
            else{

            captureZero = prompt('Avez vous fini vos opérations? 1.OUI 2.NON');
            
                //Comparaison  définir min/max (ici à la fin de la saisie)
                if (captureZero==1){
                    
                    for (i=1; i<=board.length; i++){
                        
                    let currentMinValue = board[i]
                    let currentMaxValue = board[i]

                        if(i==1){
                            minBoard=board[0]
                            maxBoard=board[0]}
                        
                        if (currentMinValue<minBoard){
                            minBoard=currentMinValue}
                            
                        if(currentMaxValue>maxBoard){
                            maxBoard=currentMaxValue}
                    }   
                }
            }
        }
        //Si la saisie est 2 ou différente de 0 alors on continue la boucle 
        else if(captureZero == 2 || capture != 0){
            sumBoard=Number(sumBoard)+Number(capture)
            captureTotal=captureTotal+1
        }
    }
    //Message d'erreur si carectère saisi non valide
    else{
    alert('Vous ne pouvez pas saisir ce caractère');
    }
}

//Calcul de la moyenne
averageBoard=Number(sumBoard/captureTotal).toFixed(2);

//Affichage des résultats dans la console
console.log(`Nombres saisis: ${board}`);
console.log(`Vous avez saisi: ${captureTotal} nombres`);
console.log(`La somme des nombres saisis est: ${sumBoard}`);
console.log(`La moyenne de ces nombres est: ${averageBoard}`);
console.log(`Le nombre le plus petit est: ${minBoard}`);
console.log(`Le nombre le plus grand est: ${maxBoard}`);
console.log("Merci d'avoir testé notre programme!");
console.log("La Ligue du Code vous salue bien!");


//Affichage des résultats dans la boite de dialogue

let text =`Vous avez saisi ${captureTotal} nombres 
Ces nombres sont: ${board}
La somme de ces nombres est: ${sumBoard}
La moyenne de ces nombres est: ${averageBoard}
Le nombre le plus petit est: ${minBoard}
Le nombre le plus grand est: ${maxBoard}
Cliquez sur OK pour continuer`
alert(text)



if ( confirm(`OK pour terminer \n
ou ANNULER pour recommencer l'opération` ) ) {
    // Code à éxécuter si l'utilisateur clique sur "OK"
    // Message de remerciements de l'équipe
    text =`Merci d'avoir utilisé notre programme!
    La ligue du Code vous salue bien!
    Cliquez sur OK pour quitter` 
    alert(text)

    
    } 
    else {
    // Code à éxécuter si l'utilisateur clique sur "Annuler"
    // Rechargement de la page
    window.location.reload(); 
    }

