import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import { Row, Input } from 'react-materialize';

import './campanhas.css';

//Componentes
import { TitlesBox, TitlePrimario, Subtitle } from '../../../utilities/titles/titles';
import { BtnDefault, BtnSecondary, BtnClean } from '../../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../../utilities/actionHeader/actionHeader';

export default class Campanhas extends Component {
    render() {
        return (
            <div className="campanhas">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Campanhas</TitlePrimario>
                        <Subtitle>Campanhas no Marketplace</Subtitle>
                    </TitlesBox>
                    <ActionHeader>
                        <Link to="/Home">
                            <BtnSecondary><Icon name="reply" /> Voltar</BtnSecondary>
                        </Link>
                        
                        <Link to="/Nova-campanha">
                            <BtnSecondary><Icon name="plus" /> Nova Campanha</BtnSecondary>
                        </Link>
                        
                        <div className="clearfix"></div>
                    </ActionHeader>
                </ActionHeaderBox>

                <div className="clearfix"></div>

                <div className="content">
                    <form>
                        <Row>
                            <Input s={12} m={6} label="Busque pela nome da campanha" validate />

                            <Input s={12} m={6} type='select' label="Selecione um Canal" defaultValue='Todos'>
                                <option value='Todos'>Todos</option>
                                <option value='Conta Um'>Conta Um</option>
                                <option value='Enterplay'>Enterplay</option>
                                <option value='Flavia Pavanelli'>Flávia Pavanelli</option>
                                <option value='CufaCard'>CufaCard</option>
                            </Input>
                        </Row>

                        <BtnDefault>Buscar</BtnDefault>
                        <BtnClean>Limpar</BtnClean>
                        <div className="clearfix"></div>
                    </form>

                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>Campanha</th>
                                <th>Canal</th>
                                <th>Data de Início</th>
                                <th>Data Final</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>LOTE 2 Cartão</td>
                                <td>Flávia Pavanelli</td>
                                <td>03/11/2016</td>
                                <td>30/04/2017</td>
                                <td>Não</td>
                                <td><BtnDefault><Icon name="pencil"/> Editar</BtnDefault></td>
                            </tr>
                       </tbody>
                    </table>
                </div>
            </div>
        );
    }
}