function extensa(a, b, c) {
  // Se asume que esta funci�n realizar�a alguna tarea
  // prolongada y compleja.

  // Cuando termine, invoca la funci�n c(), comunicando
  // el resultado.
  c(a+b);
}

extensa(4,5, function(x) {
  console.log("El resultado de 'extensa' "
  + "ha sido: " + x);
})

console.log("Terminamos");