# README - Landing Page do Banco de Dados de Soluções de Agricultura Sustentável

## Visão Geral

Bem-vindo ao repositório da **Landing Page do Banco de Dados de Soluções de Agricultura Sustentável**! 🌱 Esta página foi criada para apresentar o projeto de forma clara e atraente, ajudando a comunicar a importância da agricultura sustentável. Aqui você encontrará todos os detalhes sobre como a página foi construída e como você pode utilizá-la.

## Estrutura do Projeto

O projeto é composto por três arquivos principais:

1. **HTML (index.html)**: A estrutura da página.
2. **CSS (styles.css)**: O estilo visual da página.
3. **JavaScript (script.js)**: A interatividade da página.

### HTML - Estrutura Básica

O arquivo HTML é o esqueleto da nossa página. Aqui está como ele funciona:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    ...
</head>
<body>
    <header>
        ...
    </header>

    <section id="sobre" class="centralizado">
        ...
    </section>

    <section id="beneficios" class="centralizado">
        ...
    </section>

    <section id="como-funciona" class="centralizado">
        ...
    </section>

    <footer class="centralizado">
        ...
    </footer>

    <script src="script.js"></script> <!-- Link para o JavaScript -->
</body>
</html>
```

- **Cabeçalho (`<header>`)**: Apresenta o título do projeto e um botão para saber mais.
- **Seções (`<section>`)**: Cada seção contém informações sobre o projeto, benefícios e como funciona.
- **Rodapé (`<footer>`)**: Um formulário para capturar emails dos visitantes.

### CSS - Estilo e Aparência

O arquivo CSS dá vida à nossa página, tornando-a visualmente agradável:

```css
body {
    font-family: 'Roboto', sans-serif; /* Aplica a fonte Roboto ao corpo da página */
    background-image: url('sua-imagem-de-fundo.jpg'); /* Imagem de fundo */
}

header {
    background-color: rgba(76, 175, 80, 0.8); /* Verde com transparência */
}

.btn {
    background-color: white; /* Botões brancos */
}
```

- **Fonte**: Usamos a fonte "Roboto" para uma aparência limpa e moderna.
- **Fundo**: A imagem de fundo dá um toque natural à página.
- **Estilo dos Botões**: Os botões têm um design simples com bordas arredondadas.

### JavaScript - Interatividade

O JavaScript adiciona uma camada de interatividade à nossa página:

```javascript
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    alert('Obrigado pelo seu interesse! Entraremos em contato em breve.'); // Mensagem de agradecimento
});
```

- **Evento de Envio**: Quando o formulário é enviado, mostramos um alerta ao usuário sem recarregar a página.

## Como Usar

1. **Clone o repositório** ou baixe os arquivos.
2. **Substitua `'sua-imagem-de-fundo.jpg'`** no CSS pelo caminho da sua imagem favorita.
3. **Abra `index.html` em um navegador** para visualizar a landing page.

## Conclusão

A landing page foi projetada para ser simples, clara e informativa, com foco na promoção da agricultura sustentável. Com uma interface amigável e informações acessíveis, esperamos contribuir para um futuro agrícola mais verde e resiliente! 🌍

Se você tiver alguma dúvida ou sugestão, fique à vontade para contribuir! Vamos juntos fazer a diferença na agricultura sustentável!
