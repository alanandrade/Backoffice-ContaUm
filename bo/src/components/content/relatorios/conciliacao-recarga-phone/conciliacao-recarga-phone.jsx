import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import { Row, Input } from 'react-materialize';

import './conciliacao-recarga-phone.css';

//Componentes
import { TitlesBox, TitlePrimario, Subtitle } from '../../../utilities/titles/titles';
import { BtnDefault, BtnSecondary, BtnClean } from '../../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../../utilities/actionHeader/actionHeader';

export default class ConciliacaoRecargaPhone extends Component {
    render() {
        return (
            <div className="conciliacaoRecargaPhone">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Relatório de conciliação de recarga de celular</TitlePrimario>
                        <Subtitle>Lista de recargas de celular</Subtitle>
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
                            <Input s={12} m={6} type='select' label="Selecione um Parceiro" defaultValue='Todos'>
                                <option value='Todos'>Todos</option>
                                <option value='RV Recargas'>RV Recargas</option>
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