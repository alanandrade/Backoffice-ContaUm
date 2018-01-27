import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import './landing-page.css';

//Componentes
import { TitlesBox, TitlePrimario, Subtitle } from '../../../utilities/titles/titles';
import { BtnDefault, BtnSecondary } from '../../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../../utilities/actionHeader/actionHeader';

export default class landingPage extends Component {
    render() {
        return (
            <div className="landingPage">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Landing Page</TitlePrimario>
                        <Subtitle>Informações sobre as Landing Pages</Subtitle>
                    </TitlesBox>
                    <ActionHeader>
                        <Link to="/Home">
                            <BtnSecondary><Icon name="reply" /> Voltar</BtnSecondary>
                        </Link>

                        <Link to="/Nova-Landing-Page">
                            <BtnSecondary><Icon name="plus" /> Nova Landing Page</BtnSecondary>
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
                                <th>Hosts</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Gideão</td>
                                <td>dev.cartaogideao.com.br</td>
                                <td>Ativo</td>
                                <td><BtnDefault><Icon name="pencil" /> Editar</BtnDefault></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}