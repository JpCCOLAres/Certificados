<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Consulta de Certificados</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }

    input, button {
      padding: 8px;
      margin-top: 10px;
      font-size: 16px;
    }

    .btn-download {
      display: inline-block;
      margin-top: 10px;
      padding: 10px 15px;
      background-color: #4caf50;
      color: white;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
    }

    .btn-download:hover {
      background-color: #45a049;
    }
  </style>
</hear
    const dadosPorCodigo = {
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
        cargahoraria: "5h", // Ajustado de 8h para 5h como pedido
      },
      // Adicione os demais aqui, caso queira a lista completa
    };

    function consultarCodigo() {
      const codigo = document
        .getElementById("codigoInput")
        .value.trim()
        .toUpperCase();
      const resultadoDiv = document.getElementById("resultado");

      if (dadosPorCodigo[codigo]) {
        const dados = dadosPorCodigo[codigo];
        resultadoDiv.innerHTML = `
          <p><strong>Nome:</strong> ${dados.nome}</p>
          <p><strong>Projeto voluntário:</strong> ${dados.projetovoluntario}</p>
          <p><strong>Carga Horária:</strong> ${dados.cargahoraria}</p>
          <a href="certificados/${codigo}.pdf" download class="btn-download">
            📄 Baixar Certificado
          </a>
        `;
      } else {
        resultadoDiv.innerHTML = `<p style="color:red;">Código não encontrado.</p>`;
      }
    }
  </script>
</body>
</html>
