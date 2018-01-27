import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import { Row, Input } from 'react-materialize';

import './divisao-tarifas.css';

//Componentes
import { TitlesBox, TitlePrimario, Subtitle } from '../../../utilities/titles/titles';
import { BtnDefault, BtnSecondary, BtnClean } from '../../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../../utilities/actionHeader/actionHeader';

export default class DivisaoTarifas extends Component {
    render() {
        return (
            <div className="divisaoTarifas">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Divisão de Tarifas</TitlePrimario>
                        <Subtitle>Lista de divisões de tarifas (Split)</Subtitle>
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
                            <Input s={12} m={6} type='select' label="Canal de venda" defaultValue='Todos'>
                                <option value='Todos'>Todos</option>
                                <option value='Conta um'>Conta um</option>
                                <option value='Exacor'>Exacor</option>
                                <option value='Wallet'>Wallet</option>
                                <option value='FacebookBot'>FacebookBot</option>
                                <option value='Enterplay'>Enterplay</option>
                                <option value='Habitacional'>Habitacional</option>
                                <option value='Conta um Folha'>Conta um Folha</option>
                                <option value='>Edificio Malzoni'>Edificio Malzoni</option>
                                <option value='SEED SD Consultoria em Gestao'>SEED SD Consultoria em Gestao</option>
                                <option value='Panna Cotta Gastronomia'>Panna Cotta Gastronomia</option>
                                <option value='Dotan Telecomunicacoes Ltda'>Dotan Telecomunicações Ltda</option>
                            </Input>

                            <Input s={12} m={6} type='select' label="Forma de pagamento" defaultValue='Todos'>
                                <option value='Todos'>Todos</option>
                                <option value='Cartão de crédito'>Cartão de crédito</option>
                                <option value='Boleto Bancário'>Boleto Bancário</option>
                                <option value='Transferência bancária'>Transferência bancária</option>
                                <option value='Faturado'>Faturado</option>
                                <option value='Depósito'>Depósito</option>
                                <option value='Dinheiro'>Dinheiro</option>
                                <option value='Conta Um'>Conta Um</option>
                            </Input>

                            <Input s={12} m={6} type='select' label="Parceiro recebedor" defaultValue='Valor'>
                                <option value='Valor'>Valor</option>
                                <option value='Percentual'>Percentual</option>
                            </Input>

                            <Input s={12} m={6} type='select' label="Valor ou Percentual" defaultValue='Valor'>
                                <option value='Valor'>Izie Pay</option>
                                <option value='Super agendador'>Super agendador</option>
                                <option value='Enterplay'>Enterplay</option>
                                <option value='Conta Um Pay'>Conta Um Pay</option>
                                <option value='CufaCard'>CufaCard</option>
                            </Input>

                            <Input s={12} m={6} type='date' onChange={function (e, value) { }} label="Pesquisar a partir da Data" />

                            <Input s={12} m={6} type='date' onChange={function (e, value) { }} label="Pesquisar até a Data" />
                        </Row>

                        <BtnDefault>Buscar</BtnDefault>
                        <BtnClean>Limpar</BtnClean>
                        <div className="clearfix"></div>
                    </form>
                </div>
            </div>
        );
    }
}