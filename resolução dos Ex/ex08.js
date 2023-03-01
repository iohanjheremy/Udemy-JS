let stringPontuacao = "10, 20, 20, 8, 25, 3, 0, 30, 1";

const avaliaPontucao = (stringPontucao) => {
  let pontuacao = stringPontucao.split(", ");
  let qtdQuebreRecordes = 0;
  let piorJogo = 1;
  let maiorPontuacao = pontuacao[0];
  let menorPontuacao = pontuacao[0];

  for (let i = 0; i < pontuacao.length; i++) {
    if (pontuacao > maiorPontuacao) {
      maiorPontuacao = pontuacao[i];
      qtdQuebreRecordes++;
    } else if (pontuacao < menorPontuacao) {
      menorPontuacao = pontuacao[i];
      piorJogo = i + 1;
    }
  }
  return [qtdQuebreRecordes, piorJogo];
};

console.log(avaliaPontucao(stringPontuacao));
