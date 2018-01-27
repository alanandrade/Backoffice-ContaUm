import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import { Row, Input } from 'react-materialize';

import './nova-tarifa.css';

//Componentes
import { TitlesBox, TitlePrimario } from '../../../../utilities/titles/titles';
import { BtnDefault, BtnSecondary, BtnClean } from '../../../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../../../utilities/actionHeader/actionHeader';

export default class NovaTarifa extends Component {
    render() {
        return (
            <div className="novaTarifa">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Cadastrar Nova Tarifa</TitlePrimario>
                    </TitlesBox>
                    <ActionHeader>
                        <Link to="/Tarifas">
                            <BtnSecondary><Icon name="reply" /> Voltar</BtnSecondary>
                        </Link>

                        <div className="clearfix"></div>
                    </ActionHeader>
                </ActionHeaderBox>

                <div className="clearfix"></div>

                <div className="content">
                    <form>
                        <Row>
                            <Input s={12} m={6} type='select' label="Selecione o tipo de Cartão" defaultValue='Todos'>
                                <option value='Todos'>Todos</option>
                                <option value='B2C'>Cartão</option>
                                <option value='B2B Enterplay'>Cartão Flávia Pavanelli</option>
                                <option value='B2C Flavia Pavanelli'>Conta Um Corporativo</option>
                                <option value='B2B B2C CufaCard'>Conta Um Folha</option>
                                <option value='B2B B2C CufaCard'>Conta Um Incentivo</option>
                                <option value='B2B B2C CufaCard'>Cartão Conta Comigo</option>
                                <option value='B2B B2C CufaCard'>Conta Um</option>
                                <option value='B2B B2C CufaCard'>Cufa Card</option>
                                <option value='B2B B2C CufaCard'>Cufa Card Web</option>
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

                            <Input s={12} m={6} type="number" label="Valor da Tarifa" />
                            <Input s={12} m={6} type="number" label="Valor mínimo" />
                            <Input s={12} m={6} type="number" label="Valor máximo" />

                            <Input s={12} m={4} type='checkbox' label='É quantidade?' />
                            <Input s={12} m={4} type='checkbox' label='Sim ou Não?'/>
                            <Input s={12} m={4} type='checkbox' label='Está tarifa está ativa?' defaultChecked='checked' />
                        </Row>

                        <BtnDefault>Salvar Tarifa</BtnDefault>
                        <BtnClean>Limpar</BtnClean>
                        <div className="clearfix"></div>
                    </form>
                </div>
            </div>
        );
    }
}