import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import { Row, Input } from 'react-materialize';

import './clientes-estado.css';

//Componentes
import { TitlesBox, TitlePrimario, Subtitle } from '../../../utilities/titles/titles';
import { BtnDefault, BtnSecondary, BtnClean } from '../../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../../utilities/actionHeader/actionHeader';

export default class ClientesEstado extends Component {
    render() {
        return (
            <div className="clientesEstado">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Clientes por estado</TitlePrimario>
                        <Subtitle>Relatório de clientes por estado</Subtitle>
                    </TitlesBox>
                    <ActionHeader>
                        <Link to="/Home">
                            <BtnSecondary><Icon name="reply" /> Voltar</BtnSecondary>
                        </Link>
                        <Link to="/">
                            <BtnSecondary><Icon name="external-link" /> Exportar para Excel</BtnSecondary>
                        </Link>
                        <div className="clearfix"></div>
                    </ActionHeader>
                </ActionHeaderBox>

                <div className="clearfix"></div>

                <div className="content">
                    <form>
                        <Row>
                            <Input s={12} m={6} type='select' label="Canais" defaultValue='Todos'>
                                <option value='Todos'>Todos</option>
                                <option value='Conta um'>Conta um</option>
                                <option value='Enterplay'>Enterplay</option>
                                <option value='Flavia Pavanelli'>Flávia Pavanelli</option>
                                <option value='CufaCard'>Cufa Card</option>
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