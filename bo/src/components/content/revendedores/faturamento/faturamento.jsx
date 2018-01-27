import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import { Row, Input } from 'react-materialize';

import './faturamento.css';

//Componentes
import { TitlesBox, TitlePrimario, Subtitle } from '../../../utilities/titles/titles';
import { BtnDefault, BtnSecondary, BtnClean } from '../../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../../utilities/actionHeader/actionHeader';

export default class Faturamento extends Component {
    render() {
        return (
            <div className="faturamento">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Faturamento</TitlePrimario>
                        <Subtitle>Lista de faturamento de revendedores</Subtitle>
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
                            <Input s={12} m={6} type='date' onChange={function (e, value) { }} label="Faturamento a partir da Data" />

                            <Input s={12} m={6} type='date' onChange={function (e, value) { }} label="Faturamento    até a Data" />
                        </Row>

                        <BtnDefault>Buscar</BtnDefault>
                        <BtnClean>Limpar</BtnClean>
                        <div className="clearfix"></div>
                    </form>

                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>Representante</th>
                                <th>Qtde de Vendas</th>
                                <th>Valor das Vendas</th>
                                <th>Valor a receber</th>
                                <th>Valor a pagar</th>
                                <th>Saldo</th>
                                <th>Situação</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>João Silva</td>
                                <td>58</td>
                                <td>R$ 501,25</td>
                                <td>R$ 250,00</td>
                                <td>R$ 251,25</td>
                                <td>R$ 00,00</td>
                                <td>Aguardando</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}