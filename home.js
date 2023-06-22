if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
        console.log('Service Worker is registered', registration);
      }, function(err) {
        console.error('Registration failed:', err);
      });
    });
};
console.log("Não instalou o PWA");
document.title = "Serralheria Amaral - Passos e região";        
document.getElementById("style").innerHTML = `
    bd-placeholder-img {
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
    <!-- Marketing messaging and featurettes
    ================================================== -->
    <!-- Wrap the rest of the page in another container to center all the content. -->

    <div class="container marketing">
        <!-- Three columns of text below the carousel -->
        <div class="row">
            <div class="col-lg-4">
                <img src="img/artistica.jpg" alt="serralheria artistica" class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Serralheria Artística</title><rect width="100%" height="100%" fill="#777"/></img>

                <h2>Serralheria Artística</h2>
                <p>Profissionais experiêntes em Serralheria Artística, conseguimos fazer esse trabalho padronizado com perfeição e de acordo com a necessidade do cliente.</p>
                <p><a class="btn btn-secondary" href="portoes.html" role="button">Mais detalhes &raquo;</a></p>
            </div><!-- /.col-lg-4 -->
            <div class="col-lg-4">
                <img src="img/solda.jpg" alt="solda" class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Serviços</title><rect width="100%" height="100%" fill="#777"/></img>

                <h2>Serviços</h2>
                <p>Prestamos serviço de solda, ajustes, resformas, serralheria em geral.</p>
                <p><a class="btn btn-secondary" href="https://wa.me/message/SV54FWACYIYHP1" role="button">Mais detalhes &raquo;</a></p>
            </div><!-- /.col-lg-4 -->
            <div class="col-lg-4">
                <img src="img/automa.jfif" alt="automa" class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Automação</title><rect width="100%" height="100%" fill="#777"/></img>

                <h2>Automação</h2>
                <p>Oferecemos a melhor solução de automação de portões com as melhores marcas do mercado, solicite uma avaliação.</p>
                <p><a class="btn btn-secondary" href="automacao.html" role="button">Mais detalhes &raquo;</a></p>
            </div><!-- /.col-lg-4 -->
        </div><!-- /.row -->


    <!-- START THE FEATURETTES -->

        <hr class="featurette-divider">

        <div class="row featurette">
            <div class="col-md-7">
            <h2 class="featurette-heading">Portões basculantes: <span class="text-muted">Conforto, segurança e confiabilidade</span></h2>
            <p class="lead">Ao logo dos anos aprimoramos e buscamos sempre melhorar o mecanismo de funcionamento dos nossos portões e hoje somos uma referência em toda região pelo perfeito acabamento e baixo custo de manutenção.</p>
            </div>
            <div class="col-md-5">
            <img src="img/port.jpg" alt="basculante" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Portão</title><rect width="100%" height="100%" fill="#eee"/></img>

            </div>
        </div>

        <hr class="featurette-divider">

        <div class="row featurette">
            <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">Playground: <span class="text-muted">Diversão sob medida</span></h2>
            <p class="lead">Fabricamos Playground e brinquedos para parque de diversões sob medida de acordo com a necessidade do cliente.</p>
            </div>
            <div class="col-md-5 order-md-1">
            <img src="img/play1.jpg" alt="brinquedo" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Playground</title><rect width="100%" height="100%" fill="#eee"/></img>
        </div>
    </div>

    <hr class="featurette-divider">

    <div class="row featurette" id="container">
        <div class="col-md-7">
            <h2 class="featurette-heading">Container. <span class="text-muted">Venda e locação</span></h2>
            <p class="lead">Venda e locação de containers, sistema exclusivo de fechamento, ótimo custo benefício para armazenamento de materiais e ferramentas.</p>
            <p><a class="btn btn-secondary" href="https://wa.me/message/SV54FWACYIYHP1" role="button">Alugue agora &raquo;</a></p>
        </div>
        <div class="col-md-5">
            <img src="img/container.jpg" alt="container" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Container</title><rect width="100%" height="100%" fill="#eee"/></img>

        </div>
    </div>

    <hr class="featurette-divider">
        <a href="https://wa.me/message/SV54FWACYIYHP1" style="position: fixed; right: 0%; bottom: 7%;"><img src="img/waicon.png" alt="WhatsApp" style="width: 70px;"></a>
        <!-- /END THE FEATURETTES -->
    </div>
`;
fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('navbar').innerHTML = data;
    })
    .catch(error => {
    console.error('Erro ao carregar o arquivo:', error);
    });
fetch('carousel.html')
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