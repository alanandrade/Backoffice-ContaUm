import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import { SideNav, Collapsible, CollapsibleItem } from 'react-materialize';

//Images
import persona from '../../images/persona.png';
import logo from '../../images/logo.svg';

import './header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="iconMenu">
                    <SideNav trigger={<Icon name="bars" className="bars" />}>
                        <div className="logo">
                            <Link to="/Home"><img src={logo} alt="Logo" /></Link>
                        </div>

                        <li>
                            <Link to="/Home" className="pure-menu-link">
                                <Icon name="home" />Início
                            </Link>
                        </li>

                        <li>
                            <Link to="/Empresa" className="pure-menu-link">
                                <Icon name="briefcase" />Empresas
                            </Link>
                        </li>

                        <li>
                            <Link to="/Usuarios" className="pure-menu-link">
                                <Icon name="user" />Usuarios
                            </Link>
                        </li>

                        <li>
                            <Link to="/Grupos" className="pure-menu-link">
                                <Icon name="users" />Grupos
                            </Link>
                        </li>

                        <Collapsible>
                            <CollapsibleItem header='Marketplace' icon="shopping_cart">
                                <Link to="/Banners">Banners</Link>
                                <Link to="/Anunciantes">Anunciantes</Link>
                                <Link to="/Produtos">Produtos</Link>
                                <Link to="/Categorias">Categorias</Link>
                                <Link to="/Campanhas">Campanhas</Link>
                                <Link to="/finalizar-pedidos-lote">Finalizar pedidos em lote</Link>
                            </CollapsibleItem>
                        </Collapsible>

                        <Collapsible>
                            <CollapsibleItem header='Mídias' icon="notifications_active">
                                <Link to="/Imagens">Imagens</Link>
                                <Link to="/Videos">Vídeos</Link>
                            </CollapsibleItem>
                        </Collapsible>

                        <Collapsible>
                            <CollapsibleItem header='Canais' icon="call_split">
                                <Link to="/Customizacoes">Customizações</Link>
                                <Link to="/Landing-page">Landing Page</Link>
                            </CollapsibleItem>
                        </Collapsible>

                        <Collapsible>
                            <CollapsibleItem header='Cartões' icon="credit_card">
                                <Link to="/Tarifas">Tarifas</Link>
                                <Link to="/Solicitacoes-cartao">Solicitações de Cartões</Link>
                                <Link to="/Recarga-cartao">Recarga de Cartão</Link>
                                <Link to="/Vinculo-cartao">Vínculo de Cartões</Link>
                                <Link to="/Recarga-cartao-fmg">Recarga Cartão FMG</Link>
                            </CollapsibleItem>
                        </Collapsible>

                        <Collapsible>
                            <CollapsibleItem header='Relatórios' icon="trending_up">
                                <Link to="/Pedidos-marketplace">Pedidos Marketplace</Link>
                                <Link to="/Conciliacao-recarga-phone">Conciliação de Recarga</Link>
                                <Link to="/Consolidado-clientes">Consolidado de Clientes</Link>
                                <Link to="/Consolidado-cartoes">Consolidade de Cartões</Link>
                                <Link to="/Consolidado-pedidos">Consolidade de Pedidos</Link>
                                <Link to="/Clientes-estado">Clientes por Estado</Link>
                                <Link to="/Divisao-tarifas">Divisão de Tarifas (Split)</Link>
                                <Link to="/Home">Consolidado de Dados</Link>
                            </CollapsibleItem>
                        </Collapsible>

                        <Collapsible>
                            <CollapsibleItem header='Revendedores' icon="people">
                                <Link to="/Solicitacoes-cartoes">Solicitações de Cartões</Link>
                                <Link to="/Faturamento">Faturamento</Link>
                                <Link to="/Relatorio-vendas">Relatório de Vendas</Link>
                            </CollapsibleItem>
                        </Collapsible>

                        <Collapsible>
                            <CollapsibleItem header='E-mails' icon="email">
                                <Link to="/Templates">Templates</Link>
                            </CollapsibleItem>
                        </Collapsible>

                        <Collapsible>
                            <CollapsibleItem header='Integração' icon="power">
                                <Link to="/Sincronizar-acg">Sincronizar Dados - ACG</Link>
                            </CollapsibleItem>
                        </Collapsible>

                    </SideNav>
                </div>

                <div className="persona">
                    <img src={persona} alt="Persona" />
                    <div id="nomePersona">
                        Yumi da Silva
                    </div>
                    <div id="acessoPersona">
                        Administrador
                    </div>
                </div>

                <div className="infosHeader">
                    <Link to="/">
                        <Icon name="search" className="icon" />
                    </Link>

                    <Link to="/">
                        <Icon name="refresh" className="icon" />
                    </Link>

                    <Link to="/">
                        <Icon name="bell-o" className="icon" />
                    </Link>

                    <Link to="/">
                        <Icon name="power-off" className="icon" />
                    </Link>
                </div>
            </div>
        );
    }
}