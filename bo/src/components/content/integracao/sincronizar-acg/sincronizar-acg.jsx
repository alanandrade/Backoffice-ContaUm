import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import './sincronizar-acg.css';

//Componentes
import { TitlesBox, TitlePrimario, Subtitle } from '../../../utilities/titles/titles';
import { BtnSecondary } from '../../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../../utilities/actionHeader/actionHeader';

export default class SincronizarAcg extends Component {
    render() {
        return (
            <div className="sincronizarAcg">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Sincronizar dados com a ACG</TitlePrimario>
                        <Subtitle>Sincronização de dados entre servidores de origem e ContaUm</Subtitle>
                    </TitlesBox>
                    <ActionHeader>
                        <Link to="/Home">
                            <BtnSecondary><Icon name="reply" /> Voltar</BtnSecondary>
                        </Link>

                        <Link to="/">
                            <BtnSecondary><Icon name="refresh" /> Sincronizar</BtnSecondary>
                        </Link>
                        <div className="clearfix"></div>
                    </ActionHeader>
                </ActionHeaderBox>

                <div className="clearfix"></div>

                <div className="content">
                </div>
            </div>
        );
    }
}