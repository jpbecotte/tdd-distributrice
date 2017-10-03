let allDenominations = [10, 5, 2, 1, 0.25, 0.10, 0.05];

function z(cout, recu) {
  /* Validations */
  if (typeof cout !== 'number' || typeof recu !== 'number')
    throw new TypeError('Not numbers');
  if(Number.isNaN(cout) || Number.isNaN(recu))
    throw new TypeError('Not a Number!!!');
  if(cout > recu){
    throw  new TypeError('Recu should be equal or higher than cout');
  }
  if(cout < 0){
    throw  new TypeError('Montant should higher or equal to 0');
  }

  /* Calcul */
  let montant_a_Remettre = Math.round((recu - cout) * 100) / 100;
  let obj = {};

  for(let i = 0; i < allDenominations.length && montant_a_Remettre>0; i++){
    let denomination = allDenominations[i];
    let numberOfdenomination = Math.floor(montant_a_Remettre /  denomination);
    montant_a_Remettre = montant_a_Remettre - (numberOfdenomination * denomination);
    montant_a_Remettre = Math.round(montant_a_Remettre * 100) / 100;
    if (numberOfdenomination > 0)
      obj[denomination] = numberOfdenomination;
  }

  return obj;

}

module.exports = z;
