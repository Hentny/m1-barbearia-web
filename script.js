const barbearia = {
  cortes: [
    { id: 1, tipo: "Militar", valor: 20 },
    { id: 2, tipo: "Samurai", valor: 35 },
    { id: 3, tipo: "Pompadour", valor: 20 },
    { id: 4, tipo: "Moicano", valor: 10 },
    { id: 5, tipo: "Razor part", valor: 5 },
  ],
  barbas: [
    { id: 1, tipo: "Capitão Jack", valor: 20 },
    { id: 2, tipo: "Van Dyke", valor: 20 },
    { id: 3, tipo: "Barba Média", valor: 20 },
    { id: 4, tipo: "Barba Baixa", valor: 20 },
    { id: 5, tipo: "Barba Zero", valor: 15 },
  ],
  estaAberto: true,
}

function buscaCortePorId(id) {
  const corteEncontrado = barbearia.cortes.find((corte) => corte.id === id);
  return corteEncontrado || ("Corte não encontrado")
}

function buscaBarbaPorId(id) {
  const barbaEncontrada = barbearia.barbas.find((barba) => barba.id === id);
  return barbaEncontrada || ("Barba não encontrada")
}

function verificaStatusBarbearia() {
  return barbearia.estaAberto ? "Estamos abertos": "Estamos fechados";
}

function retornaTodosCortes() {
  return barbearia.cortes;
}

function retornaTodasBarbas() {
  return barbearia.barbas;
}

function criaPedido(nomeCliente, corteId, barbaId) {
  const pedidoCorte = buscaCortePorId(corteId);
  const pedidoBarba = buscaBarbaPorId(barbaId);

  return {
    nome: nomeCliente,
    pedidoCorte: pedidoCorte.tipo,
    pedidoCortePreco: pedidoCorte.valor,
    pedidoBarba: pedidoBarba.tipo,
    pedidoBarbaPreco: pedidoBarba.valor,
  };
}

function atualizarServico(lista, id, novoTipo, novoValor) {
  const listaAtualizada = [...lista]; 
  const itemIndex = listaAtualizada.findIndex((item) => item.id === id);
  if (itemIndex !== -1) {
    listaAtualizada[itemIndex].tipo = novoTipo;
    listaAtualizada[itemIndex].valor = novoValor;
  }
  return listaAtualizada;
}



function calculaTotal(pedido) {
  return pedido.pedidoCortePreco + pedido.pedidoBarbaPreco;
}


const pedidoExemplo = criaPedido("João", 2, 3);
console.log(pedidoExemplo);
console.log(calculaTotal(pedidoExemplo));
