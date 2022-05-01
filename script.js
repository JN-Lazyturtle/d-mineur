// appel des fonctions
creationDiv(10)
mineurs = creationMat(10, 10)
listeEntiere = creationListeEntiere(10, 10)
listeModifiable = creationListeEntiere(10, 10)
bombesAleatoiresMaisMieux(listeModifiable, 10)
indications(mineurs)
afficheMat(mineurs)

caseNoire = 0
caseBombe = 0
$('.jeu>div>div').mousedown(function (event) {
    switch (event.which) {
        case 1:
            $(this).css("color", "white")
            verifZero(this, 10, 10)
            if ($(this).html() == 'X'){
                alert("GAME OVER")
                location.reload()
            }
            break;
        case 3:
            if ($(this).css("color") == 'rgb(128, 128, 0)') {
                $(this).css("background-color", "black")
                $(this).css("color", "black")
                caseNoire++
                if ($(this).css("background-color") == 'rgb(0, 0, 0)' && $(this).html() == 'X') {
                    caseBombe++
                    if (caseNoire == 10 && caseBombe == 10) {
                        alert("!!!! GAGNE !!!!")
                        location.reload()
                    }
                }
            } else if ($(this).css("color") == 'rgb(0, 0, 0)') {
                $(this).css("background-color", "olive")
                $(this).css("color", "olive")
                caseNoire--
                if ($(this).html() == 'X') {
                    caseBombe--
                }
            }
            break;
    }
})


// faire gagner
// faire perdre
// faire choisir les carac
// faire refresh la partie
// clique gauche




// vérifie si la case révélée est un 0
function verifZero(numCase, largeur, longueur) {
    if ($(numCase).html() == '0') {
        $(numCase).css("background-color", "darkslategrey")
        indice = parseInt($(numCase).attr('class').slice(4, 7))
        reveleZero(indice, 10, 10)
        verifAround(10, 10)
    } else {
        couleurCase(numCase)
    }
}

// vérifie si les cases autour du 0 révélé sont aussi 0
function verifAround(largeur, longueur) {
    for (j = 0; j < 2; j++) {
        for (i = 1; i < largeur * longueur; i++) {
            if (($(".case" + i).css("color")) == 'rgb(255, 255, 255)' && $(".case" + i).html() == '0') {
                reveleZero(i, 10, 10)
            }
        }
        for (i = largeur * longueur; i > 0; i--) {
            if (($(".case" + i).css("color")) == 'rgb(255, 255, 255)' && $(".case" + i).html() == '0') {
                reveleZero(i, 10, 10)
            }
        }
    }
}

// css des cases révélées
function couleurCase(nb) {
    if (($(nb).html()) == '0') {
        $(nb).css("color", "white")
        $(nb).css("background-color", "darkslategrey")
    } else if (($(nb).html()) == '1') {
        $(nb).css("color", "yellow")
        $(nb).css("background-color", "darkslategrey")
    } else if (($(nb).html()) == '2') {
        $(nb).css("color", "orange")
        $(nb).css("background-color", "darkslategrey")
    } else if (($(nb).html()) == '3') {
        $(nb).css("color", "red")
        $(nb).css("background-color", "darkslategrey")
    } else {
        $(nb).css("color", "black")
        $(nb).css("background-color", "darkslategrey")
    }
}

// révèle les cases autour d'une case 0
function reveleZero(indice, longueur, largeur) {
    //révèle les 4 coins-coins
    if (indice == 1) {
        couleurCase($(".case" + (2)))
        couleurCase($(".case" + (1 + longueur)))
        couleurCase($(".case" + (2 + longueur)))
    } else if (indice == largeur) {
        couleurCase($(".case" + (indice - 1)))
        couleurCase($(".case" + (indice + longueur - 1)))
        couleurCase($(".case" + (indice + longueur)))
    } else if (indice == (largeur * longueur) - largeur + 1) {
        couleurCase($(".case" + (indice + 1)))
        couleurCase($(".case" + (indice - largeur)))
        couleurCase($(".case" + (indice - largeur + 1)))
    } else if (indice == (largeur * longueur)) {
        couleurCase($(".case" + (indice - 1)))
        couleurCase($(".case" + (indice - largeur)))
        couleurCase($(".case" + (indice - largeur - 1)))
        //révèle les côtés
    } else if (indice < largeur) {
        couleurCase($(".case" + (indice - 1)))
        couleurCase($(".case" + (indice + 1)))
        couleurCase($(".case" + (indice + largeur)))
        couleurCase($(".case" + (indice + largeur - 1)))
        couleurCase($(".case" + (indice + largeur + 1)))
    } else if (indice > ((largeur * longueur) - largeur)) {
        couleurCase($(".case" + (indice - 1)))
        couleurCase($(".case" + (indice + 1)))
        couleurCase($(".case" + (indice - largeur)))
        couleurCase($(".case" + (indice - largeur - 1)))
        couleurCase($(".case" + (indice - largeur + 1)))
    } else if (indice % largeur == 0) {
        couleurCase($(".case" + (indice - 1)))
        couleurCase($(".case" + (indice - largeur - 1)))
        couleurCase($(".case" + (indice + largeur)))
        couleurCase($(".case" + (indice + largeur - 1)))
        couleurCase($(".case" + (indice - largeur)))
    } else if ((indice - 1) % largeur == 0) {
        couleurCase($(".case" + (indice - largeur + 1)))
        couleurCase($(".case" + (indice + 1)))
        couleurCase($(".case" + (indice + largeur)))
        couleurCase($(".case" + (indice + largeur + 1)))
        couleurCase($(".case" + (indice - largeur)))
    } else {
        couleurCase($(".case" + (indice - largeur + 1)))
        couleurCase($(".case" + (indice + 1)))
        couleurCase($(".case" + (indice + largeur)))
        couleurCase($(".case" + (indice + largeur + 1)))
        couleurCase($(".case" + (indice - largeur)))
        couleurCase($(".case" + (indice - 1)))
        couleurCase($(".case" + (indice - largeur - 1)))
        couleurCase($(".case" + (indice + largeur - 1)))
    }
}

//creation des div/lignes dans le html
function creationDiv(longueur) {
    for (i = 0; i < longueur; i++) {
        $(".jeu").append("<div class='ligne" + i + "'></div>")
    }
}

//creation de la matrice du jeu
function creationMat(longueur, largeur) {
    var mineurs = new Array(longueur) //longueur de la matrice
    for (i = 0; i < longueur; i++) {
        mineurs[i] = new Array(largeur) //largeur de la matrice
        for (j = 0; j < longueur; j++) {
            mineurs[i][j] = 0;
        }
    }
    return mineurs
}

// mise en place des valeurs de la matrice dans le html
function afficheMat(tab) {
    k = 1
    for (i = 0; i < tab.length; i++) {
        for (j = 0; j < tab[i].length; j++) {
            $(".ligne" + i).append("<div class='case" + k + "'>" + mineurs[i][j] + "</div>")
            k++
        }
    }
}

function creationListeEntiere(longueur, largeur) {
    var caseNonBombee = new Array(longueur * largeur) //longueur de la matrice
    var indexMatI = 0
    var indexMatJ = 0
    for (indexListeI = 0; indexListeI < longueur * largeur; indexListeI++) {
        if (indexListeI % longueur == 0 && indexListeI != 0) {
            indexMatI++
            indexMatJ = 0
        }
        caseNonBombee[indexListeI] = new Array(2) //largeur de la matrice
        caseNonBombee[indexListeI][0] = indexMatI;
        caseNonBombee[indexListeI][1] = indexMatJ;
        indexMatJ++
    }
    console.log("Liste entiere = ")
    console.log(caseNonBombee)
    return caseNonBombee
}

function bombesAleatoiresMaisMieux(liste, nbBombe) {
    listeBombee = liste
    for (i = 0; i < nbBombe; i++) {
        indexListeRd = (Math.floor(Math.random() * listeBombee.length))
        bombeI = listeBombee[indexListeRd][0]
        bombeJ = listeBombee[indexListeRd][1]
        listeBombee.splice(indexListeRd, 1)
        mineurs[bombeI][bombeJ] = 'X'
    }
}

function indications(matrice) {
    for (i = 0; i < matrice.length - 1; i++) {
        for (j = 0; j < matrice[i].length; j++) {
            bombeAround = 0
            if (matrice[i][j] != 'X') {

                if (i - 1 >= 0 && j - 1 >= 0 && matrice[i - 1][j - 1] == 'X') {
                    bombeAround++
                }
                if (i - 1 >= 0 && matrice[i - 1][j] == 'X') {
                    bombeAround++
                }
                if (i - 1 >= 0 && matrice[i - 1][j + 1] != undefined && matrice[i - 1][j + 1] == 'X') {
                    bombeAround++
                }
                if (j - 1 >= 0 && matrice[i][j - 1] == 'X') {
                    bombeAround++
                }
                if (matrice[i][j + 1] != undefined && matrice[i][j + 1] == 'X') {
                    bombeAround++
                }
                if (j - 1 >= 0 && matrice[i + 1][j - 1] == 'X') {
                    bombeAround++
                }
                if (matrice[i + 1][j] == 'X') {
                    bombeAround++
                }
                if (matrice[i + 1][j + 1] == 'X') {
                    bombeAround++
                }
                matrice[i][j] = bombeAround
            }
        }
    }
    for (j = 0, i = 9; j < matrice[i].length; j++) {
        bombeAround = 0
        if (matrice[i][j] != 'X') {
            if (i - 1 >= 0 && j - 1 >= 0 && matrice[i - 1][j - 1] == 'X') {
                bombeAround++
            }
            if (i - 1 >= 0 && matrice[i - 1][j] == 'X') {
                bombeAround++
            }
            if (i - 1 >= 0 && matrice[i - 1][j + 1] != undefined && matrice[i - 1][j + 1] == 'X') {
                bombeAround++
            }
            if (j - 1 >= 0 && matrice[i][j - 1] == 'X') {
                bombeAround++
            }
            if (matrice[i][j + 1] != undefined && matrice[i][j + 1] == 'X') {
                bombeAround++
            }
            matrice[i][j] = bombeAround
        }
    }
}

