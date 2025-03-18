document.addEventListener('DOMContentLoaded', function(){
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste')
    const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
    
    botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)
    let tamanhoAtualFonte = 1;
    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;

    });

    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;

    });
    alternaContraste.addEventListener('click', function(){
        document.body.classList.toggle('alto-contraste')
})

});
