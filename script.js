// Dados dos voluntários
const voluntarios = {
  "VOL-2025-IVFS-0001": {
    nome: "Ana Luiza Barbosa",
    projetovoluntario: "Ação Saúde e Comunidade",
    cargahoraria: "5h",
  },
  "VOL-2025-IVFS-0002": {
    nome: "Mark Twain Duarte Siqueira",
    projetovoluntario: "Ação Saúde e Comunidade",
    cargahoraria: "5h",
  },
  "VOL-2025-IVFS-0003": {
    nome: "Anna Victória Almeida Fernandes",
    projetovoluntario: "Ação Saúde e Comunidade",
    cargahoraria: "5h",
  },
  "VOL-2025-IVFS-0004": {
    nome: "Djulia de Gois Alves Pereira",
    projetovoluntario: "Ação Saúde e Comunidade",
    cargahoraria: "5h",
  },
  "VOL-2025-IVFS-0005": {
    nome: "Samuel Fonseca Melo",
    projetovoluntario: "Ação Saúde e Comunidade",
    cargahoraria: "5h",
  },
  "VOL-2025-IVFS-0006": {
    nome: "Ana Dávila Laurindo Rabelo",
    projetovoluntario: "Ação Saúde e Comunidade",
    cargahoraria: "5h",
  },
  "VOL-2025-IVFS-0007": {
    nome: "MARIA JULIA DA MATA CAMPOS COSTA",
    projetovoluntario: "Ação Saúde e Comunidade",
    cargahoraria: "5h",
  },
  "VOL-2025-IVFS-0008": {
    nome: "Gabriella Borges Sidião",
    projetovoluntario: "Ação Saúde e Comunidade",
    cargahoraria: "5h",
  },
  "VOL-2025-IVFS-0009": {
    nome: "Hugo Cordeiro da Silva",
    projetovoluntario: "Ação Saúde e Comunidade",
    cargahoraria: "5h",
  },
  "VOL-2025-IVFS-0010": {
    nome: "Anderson Porto Frattane Filho",
    projetovoluntario: "Ação Saúde e Comunidade",
    cargahoraria: "5h",
  },
  "VOL-2025-IVFS-0030": {
    nome: "Jéssica Marques Ferro",
    projetovoluntario: "Ação Saúde e Comunidade",
    cargahoraria: "5h",
  },
  "VOL-2025-IVFS-0031": {
    nome: "Dalciane Rodrigues de Souza",
    projetovoluntario: "Ação Saúde e Comunidade",
    cargahoraria: "5h",
  },
};

// Configurações
const pastaCertificados = "certificados/";

// Formulário
document
  .getElementById("formCertificado")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const codigo = document.getElementById("codigo").value.trim();
    const resultadoDiv = document.getElementById("resultado");

    // Verifica se o código existe
    if (voluntarios[codigo]) {
      const voluntario = voluntarios[codigo];
      const arquivo = pastaCertificados + codigo + ".pdf";

      // Cria o conteúdo HTML para exibir
      resultadoDiv.innerHTML = `
          <div class="certificado-encontrado">
              <h2>Certificado Encontrado</h2>
              <p><strong>Nome:</strong> ${escapeHtml(voluntario.nome)}</p>
              <p><strong>Projeto Voluntário:</strong> ${escapeHtml(
                voluntario.projetovoluntario
              )}</p>
              <p><strong>Carga Horária:</strong> ${escapeHtml(
                voluntario.cargahoraria
              )}</p>
              <p><strong>Código:</strong> ${escapeHtml(codigo)}</p>
              <a href="${arquivo}" download class="btn-download">Baixar Certificado</a>
          </div>
      `;
    } else {
      resultadoDiv.innerHTML =
        '<div class="erro">Certificado não encontrado. Verifique o código e tente novamente.</div>';
    }
  });

// Função para segurança básica contra XSS
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
