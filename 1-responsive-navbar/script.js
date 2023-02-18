// EXO:
            // faire apparaitre le menu quand l'utilisateur clique sur l'icone hamburger 
            var prenom = 'Mohamed';
            var nom = 'Rabhi'; 
            var age = 25;
            // fonction
            function bonjour(){
                console.log('bonjour tout le monde');
            }

            var personne = {
                // propriété : valeur
                nom : 'Rabhi',
                prenom : 'Mohamed',
                age : 25,
                // méthode
                bonjour : function(){
                    console.log('bonjour tout le monde');
                }
            }
            // faire dispparaitre le menu quand l'utilisateur re-clique sur l'icone hamburger

        // selectionner le hamburger
        // document : objet globale
        // querySelector : méthode (function) de l'objet document
        var burger = document.getElementsByClassName('hamburger')[0] // retourne un nodeList => liste de noeuds

        // querySelector : permet de selectionner le premier element noeud trouvé qui correspond au critère de selection
        var burger = document.querySelector('.hamburger') // un noeud
        
        
    // fonction anonyme : une fonction qui n'a pas de nom
    // fonction callback: une fonction qui est passé en tant qu'argument à une autre fonction
       burger.addEventListener('click', function(){
            // 1ere étape  : selection du menu
           var menu =  document.querySelector('.menu');
           if( menu.style.left == '0%'){
            menu.style.left = '-100%'
           }else{
            menu.style.left = '0%'
           }
           
       })

    // multiplication : nom de la fonction
    // argument : 54 est une valeur
    // parametre : x est une variable

    // définition de la fonction multiplication
       function multiplication(x){
        return x * 5;
       }

    // invocation , appelation
    multiplication('tr')

       

        // type de données primitif js : String , Number, Boolean, Undefined, Null
        // type de données objets : Objet (nodeList , node) , tableau, function
        
        // lévénement click

        // condition

        // changer le style en js