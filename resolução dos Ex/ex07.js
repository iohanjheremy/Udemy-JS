function bhaskara(ax2, bx, c) {
  var delta = bx * bx - 4 * ax2 * c;
  if (delta < 0) {
    console.log("Delta é Negativo");
  } else {
    const x1 = -bx + Math.sqrt(delta) / (2 * ax2);
    const x2 = -bx - Math.sqrt(delta) / (2 * ax2);

    console.log(`Delta vale = ${delta}`);
    console.log("X1 = " + x1);
    console.log("X2 = " + x2);
  }
  return "Fim da Conta!";
}
console.log(bhaskara(3, -5, 12));
