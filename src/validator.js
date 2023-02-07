const validator = {
  isValid: function (tarjeta) {
    //divide el conjunto de numeros y reverso de los numeros 
    const division = tarjeta.split("").reverse();
    const arrayImpares = [];
    const arrayPares = [];
    // identificar pares e impares y multiplicarlos
    for (let i = 0; i < division.length; i++) {
      if (i % 2 === 1) {
        if ((division[i] * 2) > 9) {
          arrayPares.push((division[i] * 2) - 9);

        } else {
          arrayPares.push(division[i] * 2);
        }

      }
      if (i % 2 === 0) {
        arrayImpares.push(Number(division[i]));
      }
    }

    //sumar los array para tener un resultado unico 
    let nuevoArray = []; {
      nuevoArray = arrayImpares.concat(arrayPares);
    }

    //sumar el resultado del arrayNuevo
    let suma = 0;
    for (let i = 0; i < nuevoArray.length; i++) {
      suma += nuevoArray[i];
    }
    const resultado = suma % 10 === 0;
    if (resultado === true) {
      return true
    }
    else {
      return false
    }
  },
  //maskify- funcion que permite enmascarar los numeros con el simbolo #
  maskify: (msk) => {
    const fourSaved = msk.slice(-4);
    //console.log(fourSaved);
    let michi = "";
    for (let i = 0; i < msk.length; i++) {
      michi = michi + "#";
    }
    const forMichi = michi.slice(0, michi.length - 4);
    const result = forMichi + fourSaved;
    return result;
  }
};


export default validator;
