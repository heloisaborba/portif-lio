document.addEventListener('DOMContentLoaded', () => {
    const button = document.createElement('button');
    button.innerText = 'Clique aqui para mais informações';
    button.style.marginTop = '20px';
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#ff7f32';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    document.body.appendChild(button);

    button.addEventListener('click', () => {
        alert('Obrigado por visitar meu portfólio!');
    });
});