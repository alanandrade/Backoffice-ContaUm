import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Pages
import Home from './components/content/home/home';
import Usuarios from './components/content/usuarios/usuarios';
import Empresa from './components/content/empresa/empresa';
import Grupos from './components/content/grupos/grupos';
//Marketplace
import Banners from './components/content/marketplace/banners/banners';
import Anunciantes from './components/content/marketplace/anunciantes/anunciantes';
import Produtos from './components/content/marketplace/produtos/produtos';
import Categorias from './components/content/marketplace/categorias/categorias';
import Campanhas from './components/content/marketplace/campanhas/campanhas';
import finalizarPedidosLote from './components/content/marketplace/finalizar-pedidos-lote/finalizarPedidosLote';
//Mídias
import Imagens from './components/content/midias/imagens/imagens';
import Videos from './components/content/midias/videos/videos';
//Canais
import Customizacoes from './components/content/canais/customizacoes/customizacoes';
import landingPage from './components/content/canais/landing-page/landing-page';
//Cartoes
import Tarifas from './components/content/cartoes/tarifas/tarifas';
import SolicitacoesCartao from './components/content/cartoes/solicitacoes-cartao/solicitacoes-cartao';
import RecargaCartao from './components/content/cartoes/recarga-cartao/recarga-cartao';
import VinculoCartao from './components/content/cartoes/vinculo-cartao/vinculo-cartao';
import RecargaCartaoFmg from './components/content/cartoes/recarga-cartao-fmg/recarga-cartao-fmg';

//Relatório
import PedidosMarketplace from './components/content/relatorios/pedidos-marketplace/pedidos-marketplace';
import ConciliacaoRecargaPhone from './components/content/relatorios/conciliacao-recarga-phone/conciliacao-recarga-phone';
import ConsolidadoClientes from './components/content/relatorios/consolidado-clientes/consolidado-clientes';
import ConsolidadoCartoes from './components/content/relatorios/consolidado-cartoes/consolidado-cartoes';
import ConsolidadoPedidos from './components/content/relatorios/consolidado-pedidos/consolidado-pedidos';
import ClientesEstado from './components/content/relatorios/clientes-estado/clientes-estado';
import DivisaoTarifas from './components/content/relatorios/divisao-tarifas/divisao-tarifas';

//Revendedores
import SolicitacoesCartoes from './components/content/revendedores/solicitacoes-cartoes/solicitacoes-cartoes';
import Faturamento from './components/content/revendedores/faturamento/faturamento';
import RelatorioVendas from './components/content/revendedores/relatorio-vendas/relatorio-vendas';

//E-mails
import Templates from './components/content/emails/templates/templates';

//Integração
import SincronizarAcg from './components/content/integracao/sincronizar-acg/sincronizar-acg';

//Sub-paginas
import NovaEmpresa from './components/content/empresa/nova-empresa/nova-empresa';
import NovoUsuario from './components/content/usuarios/novo-usuario/novo-usuario';
import NovoGrupo from './components/content/grupos/novo-grupo/novo-grupo';
import NovoBanner from './components/content/marketplace/banners/novo-banner/novo-banner';
import NovoAnunciante from './components/content/marketplace/anunciantes/novo-anunciante/novo-anunciante';
import NovoProduto from './components/content/marketplace/produtos/novo-produto/novo-produto';
import NovaCategoria from './components/content/marketplace/categorias/nova-categoria/nova-categoria';
import NovaCampanha from './components/content/marketplace/campanhas/nova-campanha/nova-campanha';
import NovaImagem from './components/content/midias/imagens/nova-imagem/nova-imagem';
import NovoVideo from './components/content/midias/videos/novo-video/novo-video';
import NovaCustomizacao from './components/content/canais/customizacoes/nova-customizacao/nova-customizacao';
import NovaLandingPage from './components/content/canais/landing-page/nova-landing-page/nova-landing-page';
import NovaTarifa from './components/content/cartoes/tarifas/nova-tarifa/nova-tarifa';
import NovoVinculo from './components/content/cartoes/vinculo-cartao/novo-vinculo/novo-vinculo';
import NovaSolicitacaoCartoes from './components/content/revendedores/solicitacoes-cartoes/nova-solicitacao-cartoes/nova-solicitacao-cartoes';
import NovoTemplate from './components/content/emails/templates/novo-template/novo-template';

import {Router,Route,browserHistory} from 'react-router';

ReactDOM.render(
    (<Router history={browserHistory}>
        <Route component={App}> {/*Itens abaixo são filho do component App*/}
             {/* Paginas principais */}
            <Route path="/" component={Home}/>
            <Route path="/home" component={Home}/>
            <Route path="/usuarios" component={Usuarios}/>
            <Route path="/empresa" component={Empresa}/>
            <Route path="/grupos" component={Grupos}/>
            <Route path="/banners" component={Banners}/>
            <Route path="/anunciantes" component={Anunciantes}/>
            <Route path="/produtos" component={Produtos}/>
            <Route path="/categorias" component={Categorias}/>
            <Route path="/campanhas" component={Campanhas}/>
            <Route path="/finalizar-pedidos-lote" component={finalizarPedidosLote}/>
            <Route path="/imagens" component={Imagens}/>
            <Route path="/videos" component={Videos}/>
            <Route path="/customizacoes" component={Customizacoes}/>
            <Route path="/landing-page" component={landingPage}/>
            <Route path="/tarifas" component={Tarifas}/>
            <Route path="/solicitacoes-cartao" component={SolicitacoesCartao}/>
            <Route path="/faturamento" component={Faturamento}/>
            <Route path="/relatorio-vendas" component={RelatorioVendas}/>
            <Route path="/recarga-cartao" component={RecargaCartao}/>
            <Route path="/vinculo-cartao" component={VinculoCartao}/>
            <Route path="/recarga-cartao-fmg" component={RecargaCartaoFmg}/>
            <Route path="/pedidos-marketplace" component={PedidosMarketplace}/>
            <Route path="/conciliacao-recarga-phone" component={ConciliacaoRecargaPhone}/>
            <Route path="/consolidado-clientes" component={ConsolidadoClientes}/>
            <Route path="/consolidado-cartoes" component={ConsolidadoCartoes}/>
            <Route path="/consolidado-pedidos" component={ConsolidadoPedidos}/>
            <Route path="/clientes-estado" component={ClientesEstado}/>
            <Route path="/divisao-tarifas" component={DivisaoTarifas}/>
            <Route path="/solicitacoes-cartoes" component={SolicitacoesCartoes}/>
            <Route path="/templates" component={Templates}/>
            <Route path="/sincronizar-acg" component={SincronizarAcg}/>
            {/* Sub-paginas */}
            <Route path="/nova-empresa" component={NovaEmpresa}/>
            <Route path="/novo-usuario" component={NovoUsuario}/>
            <Route path="/novo-grupo" component={NovoGrupo}/>
            <Route path="/novo-banner" component={NovoBanner}/>
            <Route path="/novo-anunciante" component={NovoAnunciante}/>
            <Route path="/novo-produto" component={NovoProduto}/>
            <Route path="/nova-categoria" component={NovaCategoria}/>
            <Route path="/nova-campanha" component={NovaCampanha}/>
            <Route path="/nova-imagem" component={NovaImagem}/>
            <Route path="/novo-video" component={NovoVideo}/>
            <Route path="/nova-customizacao" component={NovaCustomizacao}/>
            <Route path="/nova-landing-page" component={NovaLandingPage}/>
            <Route path="/nova-tarifa" component={NovaTarifa}/>
            <Route path="/novo-vinculo" component={NovoVinculo}/>
            <Route path="/nova-solicitacao-cartoes" component={NovaSolicitacaoCartoes}/>
            <Route path="/novo-template" component={NovoTemplate}/>

        </Route>
    </Router>),
    document.getElementById('root')
);