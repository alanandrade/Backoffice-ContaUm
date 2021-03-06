import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import { Row, Input } from 'react-materialize';

import './recarga-cartao-fmg.css';

//Componentes
import { TitlesBox, TitlePrimario, Subtitle } from '../../../utilities/titles/titles';
import { BtnDefault, BtnSecondary } from '../../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../../utilities/actionHeader/actionHeader';

export default class RecargaCartaoFmg extends Component {
    render() {
        return (
            <div className="recarga-cartao-fmg">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Recarga de Cartão FMG</TitlePrimario>
                        <Subtitle>Lista de recargas de Cartões FMG</Subtitle>
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
                            <Input s={12} m={6} label="ID da Solicitação" validate />

                            <Input s={12} m={6} type='select' label="Selecione o canal" defaultValue='Todos'>
                                <option value='Todos'>Todos</option>
                                <option value='Conta Um'>Conta Um</option>
                                <option value='Enterplay'>Enterplay</option>
                                <option value='Flavia Pavanelli'>Flávia Pavanelli</option>
                                <option value='CufaCard'>CufaCard</option>
                            </Input>

                            <Input s={12} m={6} type='date' onChange={function(e, value) {}} label="Pesquisar a partir da Data" />
                    
                            <Input s={12} m={6} type='date' onChange={function(e, value) {}} label="Pesquisar até a Data" />
                        
                            <Input s={12} m={6} type='select' label="Status" defaultValue='Todos'>
                                <option value='Todos'>Todos</option>
                                <option value='Criado'>Criado</option>
                                <option value='Validado'>Validado</option>
                                <option value='Enviado'>Enviado</option>
                            </Input>
                        </Row>

                        <BtnDefault>Pesquisar</BtnDefault>
                        <BtnDefault>Limpar</BtnDefault>
                        <div className="clearfix"></div>
                    </form>

                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>ID da recarga</th>
                                <th>Canal</th>
                                <th>Data</th>
                                <th>Status</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>CufaCard</td>
                                <td>01/11/2017</td>
                                <td>Criado</td>
                                <td><BtnDefault><Icon name="eye" /> Visualizar</BtnDefault></td>
                                <td><BtnDefault><Icon name="search" /> Historico</BtnDefault></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}