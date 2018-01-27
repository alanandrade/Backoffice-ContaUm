import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import { Row, Input } from 'react-materialize';

import './nova-landing-page.css';

//Componentes
import { TitlesBox, TitlePrimario } from '../../../../utilities/titles/titles';
import { BtnDefault, BtnSecondary, BtnClean } from '../../../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../../../utilities/actionHeader/actionHeader';

export default class NovaLandingPage extends Component {
    render() {
        return (
            <div className="novaLandingPage">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Cadastrar Nova Landing Page</TitlePrimario>
                    </TitlesBox>
                    <ActionHeader>
                        <Link to="/Landing-Page">
                            <BtnSecondary><Icon name="reply" /> Voltar</BtnSecondary>
                        </Link>

                        <div className="clearfix"></div>
                    </ActionHeader>
                </ActionHeaderBox>

                <div className="clearfix"></div>

                <div className="content">
                    <form>
                        <Row>
                            <Input s={12} type='select' label="Selecione um Canal">
                                <option value='Conta Um'>Conta Um</option>
                                <option value='Enterplay'>Enterplay</option>
                                <option value='Flavia Pavanelli'>Flavia Pavanelli</option>
                                <option value='CufaCard'>CufaCard</option>
                            </Input>

                            <Input s={12} type="textarea" label="Code HTML Landing Page"/>

                            <Input s={12} type='checkbox' label='Está página está ativa?' />

                        </Row>

                        <BtnDefault>Salvar Nova Landing Page</BtnDefault>
                        <BtnClean>Limpar</BtnClean>
                        <div className="clearfix"></div>
                    </form>
                </div>
            </div>
        );
    }
}