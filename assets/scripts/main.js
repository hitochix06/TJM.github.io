function TJM() {
  //recuperer l'élement bouton
  let boutonvalide = document.querySelector("#boutonValide");
  //recuperer l'élement impute
  let inputsalaire = document.querySelector("#inputSalaire")
  let inputimport = document.querySelector("#inputImpots");
  let inputCoutsSuppl = document.querySelector("#coutSuppl");
  let inputBaseJour = document.querySelector("#baseJour");


  let tbody = document.querySelector(".afficheResulta");

  boutonvalide.addEventListener("click", function () {
    // Stocker la valeur des inputs dans une variable
    let inputsalaireValue = Number(inputsalaire.value);
    let inputimportValue = Number(inputimport.value);
    let inputCoutsSupplValue = Number(inputCoutsSuppl.value);
    let inputBaseJourValue = Number(inputBaseJour.value);

    let calcul = (inputCoutsSupplValue + inputsalaireValue + inputimportValue) / inputBaseJourValue;

    showTJM(calcul, tbody);

    // vide imput 
    inputsalaire.value = "";
    inputimport.value = "";
    inputCoutsSuppl.value = "";
    inputBaseJour.value = "";
  });
}

// Fnction pour afficher les TJM

function showTJM(calcul, tbody) {
  tbody.innerHTML = calcul + "€";
}

// Appel de ma fonction TJM
TJM();