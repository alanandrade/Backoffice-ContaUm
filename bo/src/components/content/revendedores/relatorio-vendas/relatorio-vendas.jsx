import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import { Row, Input } from 'react-materialize';

import './relatorio-vendas.css';

//Componentes
import { TitlesBox, TitlePrimario, Subtitle } from '../../../utilities/titles/titles';
import { BtnDefault, BtnSecondary, BtnClean } from '../../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../../utilities/actionHeader/actionHeader';

export default class RelatorioVendas extends Component {
    render() {
        return (
            <div className="relatorioVendas">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Relatório Vendas</TitlePrimario>
                        <Subtitle>Relatório de vendas dos revendedores</Subtitle>
                    </TitlesBox>
                    <ActionHeader>
                        <Link to="/Home">
                            <BtnSecondary><Icon name="reply" /> Voltar</BtnSecondary>
                        </Link>

                        <div className="clearfix"></div>
                    </ActionHeader>
                </ActionHeaderBox>

                <div className="clearfix"></div>

                <div className="content">
                    <form>
                        <Row>
                            <Input s={12} m={6} type='select' label="Representantes" defaultValue='Todos'>
                                <option value='Todos'>Todos</option>
                                <option value='Jose Maria'>Jose Maria</option>
                                <option value='Pedro Santos'>Pedro Santos</option>
                                <option value='Weslley Batista'>Weslley Batista</option>
                            </Input>

                            <Input s={12} m={6} type='date' onChange={function (e, value) { }} label="Pesquisar a partir da Data" />

                            <Input s={12} m={6} type='date' onChange={function (e, value) { }} label="Até a Data" />
                        </Row>

                        <BtnDefault>Buscar</BtnDefault>
                        <BtnClean>Limpar</BtnClean>
                        <div className="clearfix"></div>
                    </form>

                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>Representante</th>
                                <th>Produto</th>
                                <th>Numero do Pedido</th>
                                <th>Data do Pedido</th>
                                <th>Valor</th>
                                <th>Cliente</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>José Maria</td>
                                <td>CufaCard</td>
                                <td>256164</td>
                                <td>08/10/2017</td>
                                <td>R$ 251,25</td>
                                <td>Antônia Santos</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}