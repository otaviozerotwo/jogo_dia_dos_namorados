function login() {
  const senha = document.getElementById('password').value;

  if (senha === '23012021') {
    alert('Vivaaaaa!');
    location.href = "/games/firstGame/firstGame.html";
  } else {
    alert('Como assim ? Tenta de novo');

    senha.reset();
  }
}