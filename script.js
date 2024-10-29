// Adiciona um evento ao formulário quando ele é enviado
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Exibe um alerta ao usuário informando que a mensagem foi enviada
    alert('Obrigado pelo seu interesse! Entraremos em contato em breve.');
});