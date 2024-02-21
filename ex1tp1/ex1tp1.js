let diff = document.getElementById("diff");
let nb = document.getElementById("nb");
let resultat = document.getElementById("resultat");
let difflvl=document.getElementById("difflvl");
let chiffre = 0;
let essais = 0;
diff.addEventListener("change", niveau);
function niveau(){
    if(diff.value === "Facile"){
        chiffre = Math.floor(Math.random() * 10);
        essais=7;
        difflvl.textContent="Vous avez 7 essais et le nombre appartient a [0..10] Bonne chance";
    }else if(diff.value === "Medium"){
        chiffre = Math.floor(Math.random() * 100);
        essais=5;
        difflvl.textContent="Vous avez 5 essais et le nombre appartient a [0..100] Bonne chance";
    }else{
        chiffre = Math.floor(Math.random() * 1000);
        essais=3;
        difflvl.textContent="Vous avez 3 essais et le nombre appartient a [0..1000] Bonne chance";
    }
}
function deviner() {
    essais--;
    
    if (nb.value < chiffre && essais>0) {
        resultat.textContent = "C'est plus grand";
    } else if (nb.value > chiffre && essais>0) {
        resultat.textContent = "C'est plus petit";
    } else {if(nb.value===chiffre && essais>0)
       { resultat.textContent = "Bravo, vous avez trouvé en " + essais + " essais";}
       if(nb.value!=chiffre && essais===0)
            {alert( "Perdu!, le chiffre etait " + chiffre);
            let resp=prompt("Voulez-vous rejouer? (oui/non)");
            if(resp==="oui"){
                resultat.textContent = "";
                nb.value="";
                difflvl.textContent="";
                niveau();
        }
            else
            {
                 resultat.textContent = "Merci d'avoir jouer!";
            }
        }
    }
    
}