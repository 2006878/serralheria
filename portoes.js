if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('service-worker.js').then(function(registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        console.log('ServiceWorker registration failed: ', err);
      });
    });
};
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
  };  
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
        <h1 class="fw-light"><b>Serralheria Amaral</b></h1>
        <p class="lead text-muted">Desde o início dos trabalhos em 1992, buscamos entregar a melhor experiência para nosso amigo cliente, buscando aperfeiçoamento constante de mecanismos, acabamento e novas tecnologias.</p>
        <p>
        <a href="https://wa.me/message/SV54FWACYIYHP1" class="btn btn-primary my-2">Solicite um orçamento</a>
        <a href="automacao.html" class="btn btn-secondary my-2">Conheça tambem nossa linha de acessórios e automação</a>
        </p>
    </div>
    </div>
    </section>

    <div class="album py-5 bg-light">
    <div class="container">

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
        <div class="card shadow-sm">
            <img src="img/port1.jpg" alt="portão" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Portão trabalhado</title><rect width="100%" height="100%" fill="#55595c"/></img>

            <div class="card-body">
            <p class="card-text"><b>Modelo 1</b></p>
            </div>
        </div>
        </div>
        <div class="col">
        <div class="card shadow-sm">
            <img src="img/porta2.jpg" alt="portão" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Portão trabalhado</title><rect width="100%" height="100%" fill="#55595c"/></img>

            <div class="card-body">
            <p class="card-text"><b>Modelo 2</b></p>
            </div>
        </div>
        </div>
        <div class="col">
        <div class="card shadow-sm">
            <img src="img/port3.jfif" alt="portão" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Portão trabalhado</title><rect width="100%" height="100%" fill="#55595c"/></img>

            <div class="card-body">
            <p class="card-text"><b>Modelo 3</b></p>
            </div>
        </div>
        </div>

        <div class="col">
        <div class="card shadow-sm">
            <img src="img/port4.jpg" alt="portão" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Portão trabalhado</title><rect width="100%" height="100%" fill="#55595c"/></img>

            <div class="card-body">
            <p class="card-text"><b>Modelo 4</b></p>
            </div>
        </div>
        </div>
        <div class="col">
        <div class="card shadow-sm">
            <img src="img/port5.jpg" alt="portão" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Portão trabalhado</title><rect width="100%" height="100%" fill="#55595c"/></img>

            <div class="card-body">
            <p class="card-text"><b>Modelo 5</b></p>
            </div>
        </div>
        </div>
        <div class="col">
        <div class="card shadow-sm">
            <img src="img/port6.jpg" alt="portão" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Portão trabalhado</title><rect width="100%" height="100%" fill="#55595c"/></img>

            <div class="card-body">
            <p class="card-text"><b>Modelo 6</b></p>
            </div>
        </div>
        </div>

        <div class="col">
        <div class="card shadow-sm">
            <img src="img/port7.jpg" alt="portão" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Portão trabalhado</title><rect width="100%" height="100%" fill="#55595c"/></img>

            <div class="card-body">
            <p class="card-text"><b>Modelo 7</b></p>
            </div>
        </div>
        </div>
        <div class="col">
        <div class="card shadow-sm">
            <img src="img/port8.jpg" alt="portão" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Portão trabalhado</title><rect width="100%" height="100%" fill="#55595c"/></img>

            <div class="card-body">
            <p class="card-text"><b>Modelo 8</b></p>
            </div>
        </div>
        </div>
        <div class="col">
        <div class="card shadow-sm">
            <img src="img/port9.jpg" alt="portão" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Portão trabalhado</title><rect width="100%" height="100%" fill="#55595c"/></img>

            <div class="card-body">
            <p class="card-text"><b>Modelo 9</b></p>
            </div>
        </div>
        </div>

        <div class="col">
        <div class="card shadow-sm">
            <img src="img/port10.jpg" alt="portão" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Portão trabalhado</title><rect width="100%" height="100%" fill="#55595c"/></img>

            <div class="card-body">
            <p class="card-text"><b>Modelo 10</b></p>
            </div>
        </div>
        </div>
        <div class="col">
        <div class="card shadow-sm">
            <img src="img/port11.jpg" alt="portão" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Portão trabalhado</title><rect width="100%" height="100%" fill="#55595c"/></img>

            <div class="card-body">
            <p class="card-text"><b>Modelo 11</b></p>
            </div>
        </div>
        </div>
        <div class="col">
        <div class="card shadow-sm">
            <img src="img/port12.JPG" alt="portão" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Portão trabalhado</title><rect width="100%" height="100%" fill="#55595c"/></img>

            <div class="card-body">
            <p class="card-text"><b>Modelo 12</b></p>
            </div>
        </div>
        </div>

        <div class="col">
        <div class="card shadow-sm">
            <img src="img/port13.jpg" alt="portão" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Portão trabalhado</title><rect width="100%" height="100%" fill="#55595c"/></img>

            <div class="card-body">
            <p class="card-text"><b>Modelo 13</b></p>
            </div>
        </div>
        </div>
        <div class="col">
        <div class="card shadow-sm">
            <img src="img/container.jpg" alt="container" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Portão trabalhado</title><rect width="100%" height="100%" fill="#55595c"/></img>

            <div class="card-body">
            <p class="card-text"><b>Modelo 14</b></p>
            </div>
        </div>
        </div>
        <div class="col">
        <div class="card shadow-sm">
            <img src="img/port15.jpg" alt="portão" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Portão trabalhado</title><rect width="100%" height="100%" fill="#55595c"/></img>

            <div class="card-body">
            <p class="card-text"><b>Modelo 15</b></p>
            </div>
        </div>
        </div>

        <div class="col">
        <div class="card shadow-sm">
            <img src="img/port16.jpg" alt="portão" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Portão trabalhado</title><rect width="100%" height="100%" fill="#55595c"/></img>

            <div class="card-body">
            <p class="card-text"><b>Modelo 16</b></p>
            </div>
        </div>
        </div>
        <div class="col">
        <div class="card shadow-sm">
            <img src="img/port17.jpg" alt="portão" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Portão trabalhado</title><rect width="100%" height="100%" fill="#55595c"/></img>

            <div class="card-body">
            <p class="card-text"><b>Modelo 17</b></p>
            </div>
        </div>
        </div>
        <div class="col">
        <div class="card shadow-sm">
            <img src="img/port18.jpg" alt="portão" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Portão trabalhado</title><rect width="100%" height="100%" fill="#55595c"/></img>

            <div class="card-body">
            <p class="card-text"><b>Modelo 18</b></p>
            </div>
        </div>
        </div>
        
    </div>
    </div>
    <a href="https://wa.me/message/SV54FWACYIYHP1" style="position: fixed; right: 0%; bottom: 7%;"><img src="img/waicon.png" alt="WhatsApp" style="width: 70px;"></a>
`;
fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('navbar').innerHTML = data;
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