function fazerLogin() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  if (user === "admin" && pass === "1234") {
    alert("Login bem-sucedido!");
  } else {
    alert("Usuário ou senha inválidos!");
  }
}

function fazerPedido(nomeRestaurante) {
  alert(`Você iniciou um pedido no restaurante: ${nomeRestaurante}`);
}

function verCardapio(tipo) {
  const cardapio = {
    italiano: [
      "🍝 Spaghetti à Bolonhesa - R$ 25,00",
      "🍕 Pizza Margherita - R$ 30,00",
      "🥗 Salada Caprese - R$ 18,00"
    ],
    japones: [
      "🍣 Combo Sushi (12 peças) - R$ 35,00",
      "🍜 Lamen Tradicional - R$ 28,00",
      "🥟 Guioza - R$ 20,00"
    ],
    hamburguer: [
      "🍔 Cheeseburger Artesanal - R$ 22,00",
      "🍟 Batata Rústica - R$ 10,00",
      "🥤 Refrigerante 350ml - R$ 6,00"
    ],
    vegano: [
      "🥗 Bowl Vegano - R$ 24,00",
      "🌯 Wrap de Grão-de-Bico - R$ 19,00",
      "🍹 Suco Natural - R$ 8,00"
    ]
  };

  const itens = cardapio[tipo] || [];
  const lista = document.getElementById('itens-cardapio');
  lista.innerHTML = "";

  itens.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    lista.appendChild(li);
  });

  document.getElementById('cardapio').classList.remove('hidden');
}

function fecharCardapio() {
  document.getElementById('cardapio').classList.add('hidden');
}
