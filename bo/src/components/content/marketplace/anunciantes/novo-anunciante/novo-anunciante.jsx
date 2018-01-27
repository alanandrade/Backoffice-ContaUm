import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import { Row, Input } from 'react-materialize';

import './novo-anunciante.css';

//Componentes
import { TitlesBox, TitlePrimario } from '../../../../utilities/titles/titles';
import { BtnDefault, BtnSecondary, BtnClean } from '../../../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../../../utilities/actionHeader/actionHeader';

export default class NovoAnunciante extends Component {
    render() {
        return (
            <div className="novoAnunciante">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Cadastrar Novo Anunciante</TitlePrimario>
                    </TitlesBox>
                    <ActionHeader>
                        <Link to="/Anunciantes">
                            <BtnSecondary><Icon name="reply" /> Voltar</BtnSecondary>
                        </Link>

                        <div className="clearfix"></div>
                    </ActionHeader>
                </ActionHeaderBox>

                <div className="clearfix"></div>

                <div className="content">
                    <form>
                        <Row>
                            <Input s={12} label="Nome do Anunciante" />

                            <Input s={12} type='checkbox' label='Este anunciante está ativo?' defaultChecked='checked' />
                        </Row>

                        <BtnDefault>Salvar Anunciante</BtnDefault>
                        <BtnClean>Limpar</BtnClean>
                        <div className="clearfix"></div>
                    </form>
                </div>
            </div>
        );
    }
}