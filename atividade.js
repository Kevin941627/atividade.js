// Lista de contatos (array de objetos)
const contatos = [
  {
    nome: "Alice Silva",
    telefone: "(11) 91234-5678",
    email: "alice.silva@example.com",
  },
  {
    nome: "Bruno Costa",
    telefone: "(21) 99876-5432",
    email: "bruno.costa@example.com",
  },
  {
    nome: "Carla Pereira",
    telefone: "(31) 98765-4321",
    email: "carla.pereira@example.com",
  },
];

// Adiciona novo contato usando método de array apropriado
contatos.push({
  nome: "Maisie Haley",
  telefone: "0913 531 3030",
  email: "risus.Quisque@urna.ca",
});

// Exibe o primeiro e o último contato no formato: nome / telefone / e-mail
const primeiroContato = contatos[0];
const ultimoContato = contatos[contatos.length - 1];

console.log(`${primeiroContato.nome} / ${primeiroContato.telefone} / ${primeiroContato.email}`);
console.log(`${ultimoContato.nome} / ${ultimoContato.telefone} / ${ultimoContato.email}`);

function formatarContato(contato) {
  return `${contato.nome} / ${contato.telefone} / ${contato.email}`;
}

function renderizarContatos() {
  const container = document.getElementById("contacts");
  const footer = document.getElementById("footer");
  if (!container || !footer) return;

  container.innerHTML = "";

  contatos.forEach((contato, index) => {
    const item = document.createElement("div");
    item.className = "contact";

    const info = document.createElement("div");
    info.className = "contact__info";

    const nome = document.createElement("div");
    nome.className = "contact__name";
    nome.textContent = contato.nome;

    const meta = document.createElement("div");
    meta.className = "contact__meta";
    meta.textContent = `${contato.telefone} · ${contato.email}`;

    info.append(nome, meta);

    const badge = document.createElement("div");
    badge.className = "contact__badge";
    badge.textContent = index === 0 ? "Primeiro" : index === contatos.length - 1 ? "Último" : "";

    item.append(info, badge);
    container.appendChild(item);
  });

  footer.textContent = `Total de contatos: ${contatos.length} — primeiro: ${formatarContato(primeiroContato)} — último: ${formatarContato(ultimoContato)}`;
}

document.addEventListener("DOMContentLoaded", renderizarContatos);
