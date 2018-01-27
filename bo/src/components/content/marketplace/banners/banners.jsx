import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import { Row, Input } from 'react-materialize';

import './banners.css';

//Componentes
import { TitlesBox, TitlePrimario, Subtitle } from '../../../utilities/titles/titles';
import { BtnDefault, BtnSecondary, BtnClean } from '../../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../../utilities/actionHeader/actionHeader';

export default class Banners extends Component {
    render() {
        return (
            <div className="banners">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Banners</TitlePrimario>
                        <Subtitle>Lista de Banners do marketplace</Subtitle>
                    </TitlesBox>
                    <ActionHeader>
                        <Link to="/Home">
                            <BtnSecondary><Icon name="reply" /> Voltar</BtnSecondary>
                        </Link>

                        <Link to="/Novo-banner">
                            <BtnSecondary><Icon name="plus" /> Novo Banner</BtnSecondary>
                        </Link>

                        <div className="clearfix"></div>
                    </ActionHeader>
                </ActionHeaderBox>

                <div className="clearfix"></div>

                <div className="content">
                    <form>
                        <Row>
                            <Input s={12} m={6} type='date' onChange={function(e, value) {}} label="Pesquisar a partir da Data" />
                    
                            <Input s={12} m={6} type='date' onChange={function(e, value) {}} label="Pesquisar até a Data" />

                            <Input s={12} m={6} label="Busque pelo titulo do Banner" validate />

                            <Input s={12} m={6} type='select' label="Selecione o Canal" defaultValue='Todas'>
                                <option value='Todas'>Todas</option>
                                <option value='Conta Um'>Conta Um</option>
                                <option value='Enterplay'>Enterplay</option>
                                <option value='Cufa'>Cufa</option>
                                <option value='Flavia Pavanelli'>Flávia Pavanelli</option>
                            </Input>
                        </Row>

                        <BtnDefault>Buscar</BtnDefault>
                        <BtnClean>Limpar</BtnClean>
                        <div className="clearfix"></div>
                    </form>

                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>Titulo</th>
                                <th>Canal / Grupo</th>
                                <th>Data Início</th>
                                <th>Data Final</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Título Banner</td>
                                <td>Conta Um</td>
                                <td>10/11/2017</td>
                                <td>01/01/2017</td>
                                <td><BtnDefault><Icon name="pencil" /> Editar</BtnDefault></td>
                            </tr>
                       </tbody>
                    </table>
                </div>
            </div>
        );
    }
}