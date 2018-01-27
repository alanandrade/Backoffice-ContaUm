import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import './solicitacoes-cartoes.css';

//Componentes
import { TitlesBox, TitlePrimario, Subtitle } from '../../../utilities/titles/titles';
import { BtnDefault, BtnSecondary } from '../../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../../utilities/actionHeader/actionHeader';

export default class SolicitacoesCartoes extends Component {
    render() {
        return (
            <div className="solicitacoesCartoes">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Solicitações de Cartões</TitlePrimario>
                        <Subtitle>Lista de solicitações de Cartões</Subtitle>
                    </TitlesBox>
                    <ActionHeader>
                        <Link to="/Home">
                            <BtnSecondary><Icon name="reply" /> Voltar</BtnSecondary>
                        </Link>

                        <Link to="/Nova-solicitacao-cartoes">
                            <BtnSecondary><Icon name="plus" /> Nova Solicitação</BtnSecondary>
                        </Link>
                        <div className="clearfix"></div>
                    </ActionHeader>
                </ActionHeaderBox>

                <div className="clearfix"></div>

                <div className="content">
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Data da solicitação</th>
                                <th>Tipo de cartao</th>
                                <th>Quantidade</th>
                                <th>Valor</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>01/11/2017</td>
                                <td>Cufa Web</td>
                                <td>1</td>
                                <td>R$ 1.300,15</td>
                                <td>Aguardando pagamento</td>
                                <td><BtnDefault><Icon name="eye" /> Visualizar</BtnDefault></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}