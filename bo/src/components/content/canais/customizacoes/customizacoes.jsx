import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import './customizacoes.css';

//Componentes
import { TitlesBox, TitlePrimario, Subtitle } from '../../../utilities/titles/titles';
import { BtnDefault, BtnSecondary } from '../../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../../utilities/actionHeader/actionHeader';

export default class Customizacoes extends Component {
    render() {
        return (
            <div className="customizacoes">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Customizações</TitlePrimario>
                        <Subtitle>Personalizando o Marketplace</Subtitle>
                    </TitlesBox>
                    <ActionHeader>
                        <Link to="/Home">
                            <BtnSecondary><Icon name="reply" /> Voltar</BtnSecondary>
                        </Link>

                        <Link to="/Nova-customizacao">
                            <BtnSecondary><Icon name="plus" /> Nova Customização</BtnSecondary>
                        </Link>

                        <div className="clearfix"></div>
                    </ActionHeader>
                </ActionHeaderBox>

                <div className="clearfix"></div>

                <div className="content">
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>Canal</th>
                                <th>Cor Primária</th>
                                <th>Cor de Botão</th>
                                <th>Cor da Tab</th>
                                <th>Cor de Tab Ativa</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Conta Um</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><BtnDefault><Icon name="eye" /> Visualizar Logo</BtnDefault></td>
                                <td><BtnDefault><Icon name="pencil" /> Editar</BtnDefault></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}