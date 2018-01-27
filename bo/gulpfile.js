var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat');

// Global
gulp.task('App', function () {
    return gulp.src('src/App.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('App.css'))
        .pipe(gulp.dest('src/'))
});

// Estrutura
gulp.task('header', function () {
    return gulp.src('src/components/header/header.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('header.css'))
        .pipe(gulp.dest('src/components/header/'))
});

gulp.task('menu', function () {
    return gulp.src('src/components/menu/menu.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('menu.css'))
        .pipe(gulp.dest('src/components/menu/'))
});

gulp.task('footer', function () {
    return gulp.src('src/components/footer/footer.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('footer.css'))
        .pipe(gulp.dest('src/components/footer/'))
});

gulp.task('home', function () {
    return gulp.src('src/components/content/home/home.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('home.css'))
        .pipe(gulp.dest('src/components/content/home'))
});

//Utilities
gulp.task('forms', function () {
    return gulp.src('src/components/utilities/formulario/forms.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('forms.css'))
        .pipe(gulp.dest('src/components/utilities/formulario/'))
});

gulp.task('titles', function () {
    return gulp.src('src/components/utilities/titles/titles.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('titles.css'))
        .pipe(gulp.dest('src/components/utilities/titles/'))
});

gulp.task('actionHeader', function () {
    return gulp.src('src/components/utilities/actionHeader/actionHeader.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('actionHeader.css'))
        .pipe(gulp.dest('src/components/utilities/actionHeader/'))
});

gulp.task('buttons', function () {
    return gulp.src('src/components/utilities/buttons/buttons.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('buttons.css'))
        .pipe(gulp.dest('src/components/utilities/buttons/'))
});

gulp.task('cards', function () {
    return gulp.src('src/components/utilities/cards/cards.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('cards.css'))
        .pipe(gulp.dest('src/components/utilities/cards/'))
});

// -------------- Pages --------------
gulp.task('usuarios', function () {
    return gulp.src('src/components/content/usuarios/usuarios.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('usuarios.css'))
        .pipe(gulp.dest('src/components/content/usuarios'))
});

gulp.task('novo-usuario', function () {
    return gulp.src('src/components/content/usuarios/novo-usuario/novo-usuario.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('novo-usuario.css'))
        .pipe(gulp.dest('src/components/content/usuarios/novo-usuario'))
});

//Empresa
gulp.task('empresa', function () {
    return gulp.src('src/components/content/empresa/empresa.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('empresa.css'))
        .pipe(gulp.dest('src/components/content/empresa'))
});

gulp.task('nova-empresa', function () {
    return gulp.src('src/components/content/empresa/nova-empresa/nova-empresa.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('nova-empresa.css'))
        .pipe(gulp.dest('src/components/content/empresa/nova-empresa'))
});

//Grupos

gulp.task('grupos', function () {
    return gulp.src('src/components/content/grupos/grupos.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('grupos.css'))
        .pipe(gulp.dest('src/components/content/grupos'))
});

gulp.task('novo-grupo', function () {
    return gulp.src('src/components/content/grupos/novo-grupo/novo-grupo.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('novo-grupo.css'))
        .pipe(gulp.dest('src/components/content/grupos/novo-grupo'))
});

//Grupo Marketplace

//Grupo Banners
gulp.task('banners', function () {
    return gulp.src('src/components/content/marketplace/banners/banners.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('banners.css'))
        .pipe(gulp.dest('src/components/content/marketplace/banners'))
});

gulp.task('novo-banner', function () {
    return gulp.src('src/components/content/marketplace/banners/novo-banner/novo-banner.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('novo-banner.css'))
        .pipe(gulp.dest('src/components/content/marketplace/banners/novo-banner'))
});

//Grupo Anunciantes
gulp.task('anunciantes', function () {
    return gulp.src('src/components/content/marketplace/anunciantes/anunciantes.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('anunciantes.css'))
        .pipe(gulp.dest('src/components/content/marketplace/anunciantes'))
});

gulp.task('novo-anunciante', function () {
    return gulp.src('src/components/content/marketplace/anunciantes/novo-anunciante/novo-anunciante.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('novo-anunciante.css'))
        .pipe(gulp.dest('src/components/content/marketplace/anunciantes/novo-anunciante'))
});

//Grupo Produtos
gulp.task('produtos', function () {
    return gulp.src('src/components/content/marketplace/produtos/produtos.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('produtos.css'))
        .pipe(gulp.dest('src/components/content/marketplace/produtos'))
});

gulp.task('novo-produto', function () {
    return gulp.src('src/components/content/marketplace/produtos/novo-produto/novo-produto.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('novo-produto.css'))
        .pipe(gulp.dest('src/components/content/marketplace/produtos/novo-produto'))
});

//Grupo Categorias
gulp.task('categorias', function () {
    return gulp.src('src/components/content/marketplace/categorias/categorias.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('categorias.css'))
        .pipe(gulp.dest('src/components/content/marketplace/categorias'))
});

gulp.task('nova-categoria', function () {
    return gulp.src('src/components/content/marketplace/categorias/nova-categoria/nova-categoria.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('nova-categoria.css'))
        .pipe(gulp.dest('src/components/content/marketplace/categorias/nova-categoria'))
});

//Grupo Campanhas
gulp.task('campanhas', function () {
    return gulp.src('src/components/content/marketplace/campanhas/campanhas.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('campanhas.css'))
        .pipe(gulp.dest('src/components/content/marketplace/campanhas'))
});

gulp.task('nova-campanha', function () {
    return gulp.src('src/components/content/marketplace/campanhas/nova-campanha/nova-campanha.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('nova-campanha.css'))
        .pipe(gulp.dest('src/components/content/marketplace/campanhas/nova-campanha'))
});

//Page Finalizar Pedidos Lote
gulp.task('finalizarPedidosLote', function () {
    return gulp.src('src/components/content/marketplace/finalizar-pedidos-lote/finalizarPedidosLote.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('finalizarPedidosLote.css'))
        .pipe(gulp.dest('src/components/content/marketplace/finalizar-pedidos-lote'))
});

//Grupo Mídias
gulp.task('pageImagens', function () {
    return gulp.src('src/components/content/midias/imagens/imagens.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('imagens.css'))
        .pipe(gulp.dest('src/components/content/midias/imagens'))
});

gulp.task('nova-imagem', function () {
    return gulp.src('src/components/content/midias/imagens/nova-imagem/nova-imagem.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('nova-imagem.css'))
        .pipe(gulp.dest('src/components/content/midias/imagens/nova-imagem'))
});

gulp.task('pageVideos', function () {
    return gulp.src('src/components/content/midias/videos/videos.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('videos.css'))
        .pipe(gulp.dest('src/components/content/midias/videos'))
});

gulp.task('novo-video', function () {
    return gulp.src('src/components/content/midias/videos/novo-video/novo-video.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('novo-video.css'))
        .pipe(gulp.dest('src/components/content/midias/videos/novo-video'))
});

//Grupo Canais
gulp.task('customizacoes', function () {
    return gulp.src('src/components/content/canais/customizacoes/customizacoes.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('customizacoes.css'))
        .pipe(gulp.dest('src/components/content/canais/customizacoes'))
});

gulp.task('nova-customizacao', function () {
    return gulp.src('src/components/content/canais/customizacoes/nova-customizacao/nova-customizacao.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('nova-customizacao.css'))
        .pipe(gulp.dest('src/components/content/canais/customizacoes/nova-customizacao'))
});

gulp.task('landingPage', function () {
    return gulp.src('src/components/content/canais/landing-page/landing-page.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('landing-page.css'))
        .pipe(gulp.dest('src/components/content/canais/landing-page'))
});

gulp.task('nova-landing-page', function () {
    return gulp.src('src/components/content/canais/landing-page/nova-landing-page/nova-landing-page.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('nova-landing-page.css'))
        .pipe(gulp.dest('src/components/content/canais/landing-page/nova-landing-page'))
});

//Grupo Cartões
gulp.task('tarifas', function () {
    return gulp.src('src/components/content/cartoes/tarifas/tarifas.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('tarifas.css'))
        .pipe(gulp.dest('src/components/content/cartoes/tarifas'))
});

gulp.task('nova-tarifa', function () {
    return gulp.src('src/components/content/cartoes/tarifas/nova-tarifa/nova-tarifa.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('nova-tarifa.css'))
        .pipe(gulp.dest('src/components/content/cartoes/tarifas/nova-tarifa'))
});

gulp.task('solicitacoes-cartao', function () {
    return gulp.src('src/components/content/cartoes/solicitacoes-cartao/solicitacoes-cartao.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('solicitacoes-cartao.css'))
        .pipe(gulp.dest('src/components/content/cartoes/solicitacoes-cartao'))
});

gulp.task('recarga-cartao', function () {
    return gulp.src('src/components/content/cartoes/recarga-cartao/recarga-cartao.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('recarga-cartao.css'))
        .pipe(gulp.dest('src/components/content/cartoes/recarga-cartao'))
});

gulp.task('vinculo-cartao', function () {
    return gulp.src('src/components/content/cartoes/vinculo-cartao/vinculo-cartao.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('vinculo-cartao.css'))
        .pipe(gulp.dest('src/components/content/cartoes/vinculo-cartao'))
});

gulp.task('novo-vinculo', function () {
    return gulp.src('src/components/content/cartoes/vinculo-cartao/novo-vinculo/novo-vinculo.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('novo-vinculo.css'))
        .pipe(gulp.dest('src/components/content/cartoes/vinculo-cartao/novo-vinculo'))
});

gulp.task('recarga-cartao-fmg', function () {
    return gulp.src('src/components/content/cartoes/recarga-cartao-fmg/recarga-cartao-fmg.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('recarga-cartao-fmg.css'))
        .pipe(gulp.dest('src/components/content/cartoes/recarga-cartao-fmg'))
});

//Grupo Relatórios
gulp.task('pedidos-marketplace', function () {
    return gulp.src('src/components/content/relatorios/pedidos-marketplace/pedidos-marketplace.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('pedidos-marketplace.css'))
        .pipe(gulp.dest('src/components/content/relatorios/pedidos-marketplace'))
});

gulp.task('conciliacao-recarga-phone', function () {
    return gulp.src('src/components/content/relatorios/conciliacao-recarga-phone/conciliacao-recarga-phone.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('conciliacao-recarga-phone.css'))
        .pipe(gulp.dest('src/components/content/relatorios/conciliacao-recarga-phone'))
});

gulp.task('consolidado-clientes', function () {
    return gulp.src('src/components/content/relatorios/consolidado-clientes/consolidado-clientes.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('consolidado-clientes.css'))
        .pipe(gulp.dest('src/components/content/relatorios/consolidado-clientes'))
});

gulp.task('consolidado-cartoes', function () {
    return gulp.src('src/components/content/relatorios/consolidado-cartoes/consolidado-cartoes.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('consolidado-cartoes.css'))
        .pipe(gulp.dest('src/components/content/relatorios/consolidado-cartoes'))
});

gulp.task('consolidado-pedidos', function () {
    return gulp.src('src/components/content/relatorios/consolidado-pedidos/consolidado-pedidos.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('consolidado-pedidos.css'))
        .pipe(gulp.dest('src/components/content/relatorios/consolidado-pedidos'))
});

gulp.task('clientes-estado', function () {
    return gulp.src('src/components/content/relatorios/clientes-estado/clientes-estado.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('clientes-estado.css'))
        .pipe(gulp.dest('src/components/content/relatorios/clientes-estado'))
});

gulp.task('divisao-tarifas', function () {
    return gulp.src('src/components/content/relatorios/divisao-tarifas/divisao-tarifas.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('divisao-tarifas.css'))
        .pipe(gulp.dest('src/components/content/relatorios/divisao-tarifas'))
});

//Grupo Revendedores
gulp.task('solicitacoes-cartoes', function () {
    return gulp.src('src/components/content/revendedores/solicitacoes-cartoes/solicitacoes-cartoes.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('solicitacoes-cartoes.css'))
        .pipe(gulp.dest('src/components/content/revendedores/solicitacoes-cartoes'))
});

gulp.task('nova-solicitacao-cartoes', function () {
    return gulp.src('src/components/content/revendedores/solicitacoes-cartoes/nova-solicitacao-cartoes/nova-solicitacao-cartoes.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('nova-solicitacao-cartoes.css'))
        .pipe(gulp.dest('src/components/content/revendedores/solicitacoes-cartoes/nova-solicitacao-cartoes'))
});

gulp.task('faturamento', function () {
    return gulp.src('src/components/content/revendedores/faturamento/faturamento.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('faturamento.css'))
        .pipe(gulp.dest('src/components/content/revendedores/faturamento'))
});

gulp.task('relatorio-vendas-revendedor', function () {
    return gulp.src('src/components/content/revendedores/relatorio-vendas/relatorio-vendas.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('relatorio-vendas.css'))
        .pipe(gulp.dest('src/components/content/revendedores/relatorio-vendas'))
});

//Grupo E-mails
gulp.task('templates', function () {
    return gulp.src('src/components/content/emails/templates/templates.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('templates.css'))
        .pipe(gulp.dest('src/components/content/emails/templates'))
});

gulp.task('novo-template', function () {
    return gulp.src('src/components/content/emails/templates/novo-template/novo-template.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('novo-template.css'))
        .pipe(gulp.dest('src/components/content/emails/templates/novo-template'))
});

//Grupo Integração
gulp.task('sincronizar-acg', function () {
    return gulp.src('src/components/content/integracao/sincronizar-acg/sincronizar-acg.scss')
        .pipe(sass()) .pipe(cleanCSS({ compatibility: 'ie8' })) .pipe(autoprefixer())
        .pipe(concat('sincronizar-acg.css'))
        .pipe(gulp.dest('src/components/content/integracao/sincronizar-acg'))
});


gulp.task('watch', ['App','header','menu','footer','forms','titles','actionHeader','buttons','cards','home','usuarios','empresa','grupos','banners','anunciantes','produtos','categorias','campanhas','finalizarPedidosLote','pageImagens','pageVideos','customizacoes','landingPage','tarifas','solicitacoes-cartao','recarga-cartao','vinculo-cartao','recarga-cartao-fmg','pedidos-marketplace','conciliacao-recarga-phone','consolidado-clientes','consolidado-cartoes','consolidado-pedidos','clientes-estado','divisao-tarifas','solicitacoes-cartoes','templates','sincronizar-acg','faturamento','relatorio-vendas-revendedor','nova-empresa','novo-usuario','novo-grupo','novo-banner','novo-anunciante','novo-produto','nova-categoria','nova-campanha','nova-imagem','novo-video','nova-customizacao','nova-landing-page','nova-tarifa','novo-vinculo','nova-solicitacao-cartoes','novo-template'], function () {
    gulp.watch('src/*.scss', ['App']);
    gulp.watch('src/components/**/*.scss', ['header','menu','footer','forms','titles','actionHeader','buttons','cards','home','usuarios','empresa','grupos','banners','anunciantes','produtos','categorias','campanhas','finalizarPedidosLote','pageImagens','pageVideos','customizacoes','landingPage','tarifas','solicitacoes-cartao','recarga-cartao','vinculo-cartao','recarga-cartao-fmg','pedidos-marketplace','conciliacao-recarga-phone','consolidado-clientes','consolidado-cartoes','consolidado-pedidos','clientes-estado','divisao-tarifas','solicitacoes-cartoes','templates','sincronizar-acg','faturamento','relatorio-vendas-revendedor','nova-empresa','novo-usuario','novo-grupo','novo-banner','novo-anunciante','novo-produto','nova-categoria','nova-campanha','nova-imagem','novo-video','nova-customizacao','nova-landing-page','nova-tarifa','novo-vinculo','nova-solicitacao-cartoes','novo-template']);
});