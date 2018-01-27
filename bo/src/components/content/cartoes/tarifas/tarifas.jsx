import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import { Row, Input } from 'react-materialize';

import './tarifas.css';

//Componentes
import { TitlesBox, TitlePrimario, Subtitle } from '../../../utilities/titles/titles';
import { BtnDefault, BtnSecondary } from '../../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../../utilities/actionHeader/actionHeader';

export default class Tarifas extends Component {
    render() {
        return (
            <div className="tarifas">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Tarifas</TitlePrimario>
                        <Subtitle>Nossas tarifas de cartões</Subtitle>
                    </TitlesBox>
                    <ActionHeader>
                        <Link to="/Home">
                            <BtnSecondary><Icon name="reply" /> Voltar</BtnSecondary>
                        </Link>

                        <Link to="/Nova-tarifa">
                            <BtnSecondary><Icon name="plus" /> Nova Tarifa</BtnSecondary>
                        </Link>

                        <div className="clearfix"></div>
                    </ActionHeader>
                </ActionHeaderBox>

                <div className="clearfix"></div>

                <div className="content">
                    <form>
                        <Row>
                            <Input s={12} m={6} type='select' label="Selecione o tipo de cartão" defaultValue='Todos'>
                                <option value='Todos'>Todos</option>
                                <option value='Cartao'>Cartão</option>
                                <option value='Cartao Flavia Pavanelli'>Cartão Flávia Pavanelli</option>
                                <option value='Conta Um Corporativo'>Conta Um Corporativo</option>
                                <option value='Conta Um Folha'>Conta Um Folha</option>
                                <option value='Conta Um Incentivo'>Conta Um Incentivo</option>
                                <option value='Cartao Conta Comigo'>Cartão Conta Comigo</option>
                                <option value='Conta Um'>Conta Um</option>
                                <option value='Cufa Card'>Cufa Card</option>
                                <option value='Cufa Card Web'>Cufa Card Web</option>
                            </Input>

                            <Input s={12} m={6} type='select' label="Selecione o tipo de tarifa" defaultValue='Todas'>
                                <option value='Todas'>Todas</option>
                                <option value=''>Valor mínimo para realizar crédito via boleto</option>
                                <option value=''>Valor máximo para realizar crédito via boleto</option>
                                <option value=''>Taxa de recarga via POS</option>
                                <option value=''>Taxa de recarga via boleto</option>
                                <option value=''>Taxa de racarga via ShopLine</option>
                                <option value=''>Valor minimo para realizar transferencia de crédito</option>
                                <option value=''>Valor maximo para realizar transferencia de crédito</option>
                                <option value=''>Taxa de transferencias entre contas (P2P)</option>
                            </Input>

                            <Input s={12} m={6} type='select' label="Selecione o canal" defaultValue='Todos'>
                                <option value='Todos'>Todos</option>
                                <option value='Conta Um'>Conta Um</option>
                                <option value='Enterplay'>Enterplay</option>
                                <option value='Flavia Pavanelli'>Flávia Pavanelli</option>
                                <option value='CufaCard'>CufaCard</option>                                
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
                                <th>Tipo de cartão</th>
                                <th>Tipo de tarifa</th>
                                <th>Valor</th>
                                <th>A tarifa está Ativa?</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Enterplay</td>
                                <td>Cartão</td>
                                <td>Taxa de recarga via Boleto</td>
                                <td>R$ 4,00</td>
                                <td>Sim</td>
                                <td><BtnDefault><Icon name="pencil" /> Editar</BtnDefault></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}