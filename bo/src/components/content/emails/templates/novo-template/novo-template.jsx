import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import { Row, Input } from 'react-materialize';

import './novo-template.css';

//Componentes
import { TitlesBox, TitlePrimario } from '../../../../utilities/titles/titles';
import { BtnDefault, BtnSecondary, BtnClean } from '../../../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../../../utilities/actionHeader/actionHeader';

export default class NovoTemplate extends Component {
    render() {
        return (
            <div className="novoTemplate">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Cadastrar Novo Template</TitlePrimario>
                    </TitlesBox>
                    <ActionHeader>
                        <Link to="/Templates">
                            <BtnSecondary><Icon name="reply" /> Voltar</BtnSecondary>
                        </Link>

                        <div className="clearfix"></div>
                    </ActionHeader>
                </ActionHeaderBox>

                <div className="clearfix"></div>

                <div className="content">
                    <form>
                        <Row>
                            <Input s={12} m={6} type='select' label="Selecione um Canal">
                                <option value='Conta Um'>Conta Um</option>
                                <option value='Enterplay'>Enterplay</option>
                                <option value='Flavia Pavanelli'>Flavia Pavanelli</option>
                                <option value='CufaCard'>CufaCard</option>
                            </Input>

                            <Input s={12} m={6} type='select' label="Tipo de Template">
                                <option value='Pedido de Compra'>Pedido de Compra</option>
                                <option value='Pagamento Negado'>Pagamento Negado</option>
                                <option value='Pagamento Aprovado'>Pagamento Aprovado</option>
                                <option value='Cancelamento de Pagamento'>Cancelamento de Pagamento</option>
                                <option value='Captura de Pagamento'>Captura de Pagamento</option>
                                <option value='Criação Cliente'>Criação Cliente</option>
                                <option value='Boleto emitido'>Boleto emitido</option>
                                <option value='Revendedor | Cadastro'>Revendedor | Cadastro</option>
                                <option value='Revendedor | Aguardando Contrato'>Revendedor | Aguardando Contrato</option>
                                <option value='Revendedor | Contrato Enviado'>Revendedor | Contrato Enviado</option>
                                <option value='Revendedor | Aprovação'>Revendedor | Aprovação</option>
                                <option value='Revendedor | Reprovação'>Revendedor | Reprovação</option>
                                <option value='Revendedor | Pedido'>Revendedor | Pedido</option>
                                <option value='Revendedor | Pagamento Aprovado'>Revendedor | Pagamento Aprovado</option>
                                <option value='Revendedor | Pagamento Reprovado'>Revendedor | Pagamento Reprovado</option>
                                <option value='Revendedor | Redefinir Senha'>Revendedor | Redefinir Senha</option>
                                <option value='Revendedor | Lote a caminho'>Revendedor | Lote a caminho</option>
                                <option value='Revendedor | Compre lote'>Revendedor | Compre lote</option>
                                <option value='Revendedor | Falta Documentos'>Revendedor | Falta Documentos</option>
                            </Input>

                            <Input s={12} type="textarea" label="Code HTML Template E-mail"/>

                            <Input s={12} type='checkbox' label='Este template está ativo?'  defaultChecked='checked'/>
                        </Row>

                        <BtnDefault>Salvar Template</BtnDefault>
                        <BtnClean>Limpar</BtnClean>
                        <div className="clearfix"></div>
                    </form>
                </div>
            </div>
        );
    }
}