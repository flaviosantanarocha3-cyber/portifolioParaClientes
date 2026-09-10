
$(document).ready(function() {
    const secoes = $('.projetos-section, .contato-section, .header');
    const itensNavegacao = $('.menu-link');

    $(window).on('scroll', function() {
        const cabecalho = $('.menu');
        const posicaoScroll = $(window).scrollTop() - cabecalho.outerHeight();
        let indiceSecaoAtiva = 0;

        if (posicaoScroll <= 0) {
            cabecalho.css('box-shadow', 'none');
        } else {
            cabecalho.css('box-shadow', 'rgba(17, 16, 16, 0.1) 0px 4px 12px');

            secoes.each(function(i) {
                const secao = $(this);
                const topoSecao = secao.offset().top - cabecalho.outerHeight();
                const fundoSecao = topoSecao + secao.outerHeight();

                if (posicaoScroll >= topoSecao && posicaoScroll < fundoSecao) {
                    indiceSecaoAtiva = i;
                    return false;
                }
            });

            itensNavegacao.css('color', '#ffffff');
            $(itensNavegacao[indiceSecaoAtiva]).css('color', '#d4d4d4');
        }
    });

    // =========================
    // SCROLLREVEAL - ANIMAÇÕES
    // =========================
    
    // Animação das seções principais
    ScrollReveal().reveal('header', {
        duration: 2000,          // Duração da animação em ms
        distance: '20%',         // Distância do deslocamento
        origin: 'left',          // Direção da animação
        reset: false,            // Não repete a animação ao rolar de volta
        opacity: 0,              // Começa invisível
        delay: 200,              // Pequeno delay antes de começar
        easing: 'ease-in-out'    // Tipo de curva de animação
    });

    // Animação das seções principais
    ScrollReveal().reveal('section', {
        duration: 2000,          // Duração da animação em ms
        distance: '20%',         // Distância do deslocamento
        origin: 'left',          // Direção da animação
        reset: false,            // Não repete a animação ao rolar de volta
        opacity: 0,              // Começa invisível
        delay: 200,              // Pequeno delay antes de começar
        easing: 'ease-in-out'    // Tipo de curva de animação
    });

    // Animação dos títulos
    ScrollReveal().reveal('.section-titulo', {
        duration: 1500,
        distance: '20%',
        origin: 'bottom',
        delay: 300
    });

    // Animação das descrições
    ScrollReveal().reveal('.projeto-descricao', {
        duration: 1500,
        distance: '20%',
        origin: 'right',
        delay: 500
    });

    // Animação dos cards de projetos
    ScrollReveal().reveal('.card', {
        duration: 1800,
        distance: '20%',
        origin: 'bottom',
        delay: 400,
        interval: 200
    });

    // =========================
    // CHATBOT
    // =========================
    const chatbotBtn = document.querySelector('#chatbot-btn');
    const chatbotWindow = document.querySelector('#chatbot-window');
    const chatbotClose = document.querySelector('#chatbot-close');
    const chatbotMinimize = document.querySelector('#chatbot-minimize');

    chatbotBtn.addEventListener('click', () => {
        chatbotWindow.style.display = 'block';
    });

    chatbotClose.addEventListener('click', () => {
        chatbotWindow.style.display = 'none';
    });

    chatbotMinimize.addEventListener('click', () => {
        if (chatbotWindow.style.height === '65px') {
            chatbotWindow.style.height = '500px';
            chatbotWindow.querySelector('iframe').style.display = 'block';
        } else {
            chatbotWindow.style.height = '65px';
            chatbotWindow.querySelector('iframe').style.display = 'none';
        }
    });
});