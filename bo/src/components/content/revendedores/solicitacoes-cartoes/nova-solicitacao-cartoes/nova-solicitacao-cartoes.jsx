import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import { Row, Input } from 'react-materialize';

import './nova-solicitacao-cartoes.css';

//Componentes
import { TitlesBox, TitlePrimario } from '../../../../utilities/titles/titles';
import { BtnDefault, BtnSecondary, BtnClean } from '../../../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../../../utilities/actionHeader/actionHeader';

export default class novaSolicitacaoCartoes extends Component {
    render() {
        return (
            <div className="novaSolicitacaoCartoes">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Nova Solicitação de Cartões</TitlePrimario>
                    </TitlesBox>
                    <ActionHeader>
                        <Link to="/Solicitacoes-cartoes">
                            <BtnSecondary><Icon name="reply" /> Voltar</BtnSecondary>
                        </Link>

                        <div className="clearfix"></div>
                    </ActionHeader>
                </ActionHeaderBox>

                <div className="clearfix"></div>

                <div className="content">
                    <form>
                        <Row>
                            <p>Dados do Solicitante:</p>
                            <Input s={12} m={6} type="number" label="CPF" validate />

                            <Input s={12} m={6} label="Nome" validate />

                            <Input s={12} type="email" label="E-mail" validate />

                            <Input s={4} m={2} label="DDD" validate />

                            <Input s={8} m={5} label="Telefone" validate />

                            <Input s={12} m={5} type='select' label="Selecione o canal">
                                <option value='Conta Um'>Conta Um</option>
                                <option value='Enterplay'>Enterplay</option>
                                <option value='Flavia Pavanelli'>Flávia Pavanelli</option>
                                <option value='CufaCard'>CufaCard</option>
                            </Input>
                        </Row>

                        <Row>
                            <p>Enviar cartões para:</p>
                            <Input s={12} m={6} type="number" label="CEP do destinatário" validate />

                            <Input s={12} m={6} label="Endereço" validate />

                            <Input s={12} m={6} type="number" label="Número" validate />

                            <Input s={12} m={6} label="Complemento" validate />

                            <Input s={12} m={6} label="Bairro" validate />

                            <Input s={12} m={6} label="Cidade" validate />

                            <Input s={12} type='select' label="Estado">
                                <option value='Acre'>Acre</option>
                                <option value='Alagoas'>Alagoas</option>
                                <option value='Amazonas'>Amazonas</option>
                                <option value='Amapá'>Amapá</option>
                                <option value='Bahia'>Bahia</option>
                                <option value='Ceará'>Ceará</option>
                                <option value='Distrito Federal'>Distrito Federal</option>
                                <option value='Espirito Santo'>Espirito Santo</option>
                                <option value='Goias'>Goias</option>
                                <option value='Maranhao'>Maranhão</option>
                                <option value='Minas Gerais'>Minas Gerais</option>
                                <option value='Mato Grosso do Sul'>Mato Grosso do Sul</option>
                                <option value='Mato Grosso'>Mato Grosso</option>
                                <option value='Para'>Pará</option>
                                <option value='Paraiba'>Paraíba</option>
                                <option value='Pernambuco'>Pernambuco</option>
                                <option value='Piaui'>Piaui</option>
                                <option value='Parana'>Paraná</option>
                                <option value='Rio de Janeiro'>Rio de Janeiro</option>
                                <option value='Rio Grande do Norte'>Rio Grande do Norte</option>
                                <option value='Rondonia'>Rondônia</option>
                                <option value='Roraima'>Roraima</option>
                                <option value='Rio Grande do Sul'>Rio Grande do Sul</option>
                                <option value='Santa Catarina'>Santa Catarina</option>
                                <option value='Sergipe'>Sergipe</option>
                                <option value='São Paulo'>São Paulo</option>
                                <option value='Tocantins'>Tocantins</option>
                            </Input>
                        </Row>

                        <BtnDefault>Solicitar Cartões</BtnDefault>
                        <BtnClean>Limpar</BtnClean>
                        <div className="clearfix"></div>
                    </form>
                </div>
            </div>
        );
    }
}