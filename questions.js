var CreationTableauLangages = function () {
  var langages = ["Html", "CSS", "Java", "PHP"]; //Créer un tableau "langages" contenant "Html", "CSS", "Java", "PHP"
  return langages;
}

var CreationTableauNombres = function () {
  var nombres = [0, 1, 2, 3, 4, 5];// Créer un tableau "nombres" contenant les nombres de 0 à 5
  return nombres;
}

var RemplacementElement = function (langages) {
  langages[2] = "Javascript";// Remplacer le troisième élément du tableau par "Javascript"
  return langages;
}

var AjoutElementLangages = function (langages) {
  langages.push("Ruby", "Python");// Ajouter "Ruby" et "Python" à la fin du tableau
  return langages;
}

var AjoutElementNombres = function (nombres) {
  nombres.unshift(-2, -1);//Ajouter "-2" et "-1" au début du tableau nombres
  return nombres;
}

var SuppressionPremierElement = function (langages) {
  langages.splice(0, 1); //ou langages.shift(); Supprimer le premier élément du tableau langages
  return langages;
}

var SuppressionDernierElement = function (langages) {
  langages.pop();//Supprimer le dernier élément du tableau langages
  return langages;
}

var ConversionChaineTableau = function (reseaux_sociaux_chaine) {
  return reseaux_sociaux_chaine.split(','); // Faire de la chaîne "reseaux_sociaux_chaine" un tableau "reseaux_sociaux"
}

var ConversionTableauChaine = function (langages) {
  //Faire du tableau "langages" une chaîne "langages_chaine". Séparer les langages par une virgule
  return langages.join(',');
}

var TriTableau = function (reseaux_sociaux) {
  //Trier le tableau "reseaux_sociaux"
  return reseaux_sociaux.sort();
}

var InversionTableau = function (reseaux_sociaux){
  //Inverser le tableau "reseaux_sociaux"
  return reseaux_sociaux.reverse();
}
