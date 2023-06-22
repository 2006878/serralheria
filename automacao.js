if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('service-worker.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
// Verificar se o navegador suporta a instalação do PWA
if ('serviceWorker' in navigator && 'PushManager' in window) {
  window.addEventListener('load', function() {
    // Registrar o Service Worker e manipular a lógica de instalação do PWA
    navigator.serviceWorker.register('service-worker.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);

      // Verificar se o PWA já está instalado
      if (registration.installing || registration.waiting || registration.active) {
        return;
      }

      // Prompt para instalação do PWA
      let installPrompt;

      window.addEventListener('beforeinstallprompt', function(event) {
        // Impedir o prompt de instalação automática
        event.preventDefault();
        // Armazenar o evento do prompt para uso posterior
        installPrompt = event;
        // Exibir o botão ou ação para o usuário instalar o PWA
        showInstallButton();
      });

      // Função para exibir o botão ou ação de instalação do PWA
      function showInstallButton() {
        // Exibir o botão ou ação de instalação
        // Por exemplo, você pode criar um botão "Instalar" e vincular o evento de clique a esta função
        // O código abaixo é apenas um exemplo de como exibir o prompt de instalação quando o botão é clicado
        const installButton = document.getElementById('install-button');

        installButton.addEventListener('click', function() {
          if (installPrompt) {
            installPrompt.prompt();

            installPrompt.userChoice.then(function(choiceResult) {
              if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the installation');
              } else {
                console.log('User dismissed the installation');
              }

              // Limpar a referência do prompt de instalação
              installPrompt = null;
            });
          }
        });

        installButton.style.display = 'block';
      }
    }).catch(function(error) {
      console.log('ServiceWorker registration failed: ', error);
    });
  });
}
document.title = "Serralheria Amaral - Passos e região";        
document.getElementById("style").innerHTML = `
    .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

`;
document.getElementById("custom_style").innerHTML = `
    <!-- Custom styles for this template -->
    <link href="carousel.css" rel="stylesheet">
`;
document.getElementById("content").innerHTML = `
  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light"><b>Portões automáticos e acessórios</b></h1>
        <p class="lead text-muted">Oferecemos nossos portões já automatizados, garantindo um perfeito funcionamento, saindo com todos os suportes originais na fabricação do seu portão, garantindo a satisfação do cliente com o perfeito funcionamento do conjunto.</p>
        <p class="lead text-muted">Temos fechaduras tetra-chave para maior segurança, puxadores em inox polido ou escovado, olho mágico, trava eletromagnética, tudo para maior segurança e conforto dos nossos clientes.</p>
          <a href="https://wa.me/message/SV54FWACYIYHP1" class="btn btn-primary my-2">Solicite um orçamento</a>
          
        </p>
      </div>
    </div>
  </section>

  <div class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
            <img src="img/puxador.jpg" alt="puxa" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Portão trabalhado</title><rect width="100%" height="100%" fill="#55595c"/></img>

            <div class="card-body">
              <p class="card-text"><b>Puxadores de inox de vários tamanhos e modelos, consulte disponibilidade.</b></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img src="img/fechelsys.jfif" alt="fechadura elsys" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Portão trabalhado</title><rect width="100%" height="100%" fill="#55595c"/></img>

            <div class="card-body">
              <p class="card-text"><b>Fechadura Elsys, inovação e segurança, funcionamento silencioso, 2 anos de garantia.</b></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img src="img/tetrastam.png" alt="tetra 1001" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Portão trabalhado</title><rect width="100%" height="100%" fill="#55595c"/></img>

            <div class="card-body">
              <p class="card-text"><b>Segurança redobrada na sua porta ou portão.</b></p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <img src="img/ppajet.jfif" alt="ppajet" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Portão trabalhado</title><rect width="100%" height="100%" fill="#55595c"/></img>

            <div class="card-body">
              <p class="card-text"><b>PPA Jet Flex, acionamento super rápido para quem busca agilidade.</b></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img src="img/rossinano.jfif" alt="rossi nano" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Portão trabalhado</title><rect width="100%" height="100%" fill="#55595c"/></img>

            <div class="card-body">
              <p class="card-text"><b>Motor Rossi convencional, Robustez e praticidade em um único produto.</b></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img src="img/travaipec.jfif" alt="trava ipec" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Portão trabalhado</title><rect width="100%" height="100%" fill="#55595c"/></img>

            <div class="card-body">
              <p class="card-text"><b>Segurança do mais alto nível para seu portão basculante.</b></p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <img src="img/elsyswifi.png" alt="interfone elsys" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Portão trabalhado</title><rect width="100%" height="100%" fill="#55595c"/></img>

            <div class="card-body">
              <p class="card-text"><b>Video porteiro com acesso pelo celular, atenda e acione a fechadura do portão de onde estiver com esse produto inovador.</b></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img src="img/interhdl.jfif" alt="interfone hdl" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Portão trabalhado</title><rect width="100%" height="100%" fill="#55595c"/></img>

            <div class="card-body">
              <p class="card-text"><b>Interfones HDL, tradição e ótimo custo benefício.</b></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img src="img/fechhdl.jfif" alt="fechadura hdl" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Portão trabalhado</title><rect width="100%" height="100%" fill="#55595c"/></img>

            <div class="card-body">
              <p class="card-text"><b>Fechadura HDL C-90. Confiabilidade e segurança de sempre.</b></p>
            </div>
          </div>
        </div>
        
    </div>
  </div>
  <a href="https://wa.me/message/SV54FWACYIYHP1" style="position: fixed; right: 0%; bottom: 7%;"><img src="img/waicon.png" alt="WhatsApp"  style="width: 70px;"></a> 
`;
fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('navbar').innerHTML = data;
    })
    .catch(error => {
    console.error('Erro ao carregar o arquivo:', error);
    });
fetch('carousel_automacao.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('carousel').innerHTML = data;
    })
    .catch(error => {
    console.error('Erro ao carregar o arquivo:', error);
    });
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('footer').innerHTML = data;
    })
    .catch(error => {
    console.error('Erro ao carregar o arquivo:', error);
    });