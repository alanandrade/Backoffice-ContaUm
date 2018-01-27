import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import { Row, Input } from 'react-materialize';

import './templates.css';

//Componentes
import { TitlesBox, TitlePrimario, Subtitle } from '../../../utilities/titles/titles';
import { BtnDefault, BtnSecondary } from '../../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../../utilities/actionHeader/actionHeader';

export default class Templates extends Component {
    render() {
        return (
            <div className="templates">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Templates de e-mail</TitlePrimario>
                        <Subtitle>Lista dos modelos de envio de e-mail</Subtitle>
                    </TitlesBox>
                    <ActionHeader>
                        <Link to="/Home">
                            <BtnSecondary><Icon name="reply" /> Voltar</BtnSecondary>
                        </Link>

                        <Link to="/Novo-template">
                            <BtnSecondary><Icon name="plus" /> Novo template</BtnSecondary>
                        </Link>
                        <div className="clearfix"></div>
                    </ActionHeader>
                </ActionHeaderBox>

                <div className="clearfix"></div>

                <div className="content">
                    <form>
                        <Row>
                            <Input s={12} m={6} type='select' label="Selecione o canal" defaultValue='Todos'>
                                <option value='Todos'>Todos</option>
                                <option value='Conta Um'>Conta Um</option>
                                <option value='Enterplay'>Enterplay</option>
                                <option value='Flavia Pavanelli'>Flávia Pavanelli</option>
                                <option value='CufaCard'>CufaCard</option>
                            </Input>
                        
                            <Input s={12} m={6} type='select' label="Selecione um tipo de template" defaultValue='Todos'>
                                <option value='Todos'>Todos</option>
                                <option value='Pedido de Compra'>Pedido de Compra</option>
                                <option value='Pagamento Negado'>Pagamento Negado</option>
                                <option value='Pagamaneto Aprovado'>Pagamaneto Aprovado</option>
                                <option value='Cancelamento de Pagamento'>Cancelamento de Pagamento</option>
                                <option value='Captura de Pagamento'>Captura de Pagamento</option>
                                <option value='Criação Cliente'>Criação Cliente</option>
                                <option value='Boleto Emitido'>Boleto Emitido</option>
                                <option value='Revendedor-Cadastro'>Revendedor-Cadastro</option>
                            </Input>
                        </Row>

                        <BtnDefault>Pesquisar</BtnDefault>
                        <BtnDefault>Limpar</BtnDefault>
                        <div className="clearfix"></div>
                    </form>

                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>Canal</th>
                                <th>Tipo de Template</th>
                                <th>O template está ativo?</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>CufaCard</td>
                                <td>Pedido de Compra</td>
                                <td>Sim</td>
                                <td><BtnDefault><Icon name="pencil" /> Editar</BtnDefault></td>
                                <td><BtnDefault><Icon name="envelope-o" /> Enviar e-mail de Teste</BtnDefault></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}