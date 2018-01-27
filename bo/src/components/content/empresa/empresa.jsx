import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import { Row, Input } from 'react-materialize';

import './empresa.css';

//Componentes
import { TitlesBox, TitlePrimario, Subtitle } from '../../utilities/titles/titles';
import { BtnDefault, BtnSecondary, BtnClean } from '../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../utilities/actionHeader/actionHeader';

export default class Empresa extends Component {
    render() {
        return (
            <div className="empresa">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Empresas</TitlePrimario>
                        <Subtitle>Informações sobre Empresa, Status, CNPJ, etc</Subtitle>
                    </TitlesBox>
                    <ActionHeader>
                        <Link to="/Home">
                            <BtnSecondary><Icon name="reply" /> Voltar</BtnSecondary>
                        </Link>

                        <Link to="/Nova-empresa">
                            <BtnSecondary><Icon name="plus" /> Nova Empresa</BtnSecondary>
                        </Link>

                        <div className="clearfix"></div>
                    </ActionHeader>
                </ActionHeaderBox>

                <div className="clearfix"></div>

                <div className="content">
                    <form>
                        <Row>
                            <Input s={12} m={6} label="Busque pelo nome da empresa" validate />

                            <Input s={12} m={6} type='select' label="Status da empresa" defaultValue='2'>
                                <option value='Todos'>Todos</option>
                                <option value='Ativa'>Ativa</option>
                                <option value='Inativa'>Inativa</option>
                            </Input>
                        </Row>

                        <BtnDefault>Pesquisar</BtnDefault>
                        <BtnClean>Limpar</BtnClean>
                        <div className="clearfix"></div>
                    </form>

                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>Empresa</th>
                                <th>CNPJ</th>
                                <th>A Empresa está ativa?</th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Conta Um</td>
                                <td>71.394.374/0001-87</td>
                                <td>Sim</td>
                                <td><BtnDefault><Icon name="pencil" /> Editar</BtnDefault></td>
                                <td><BtnDefault><Icon name="user" /> Usuarios</BtnDefault></td>
                                <td><BtnDefault><Icon name="cogs" /> Sistemas</BtnDefault></td>
                            </tr>
                            <tr>
                                <td>Cufa</td>
                                <td>75.582.540/0001-20</td>
                                <td>Sim</td>
                                <td><BtnDefault><Icon name="pencil" /> Editar</BtnDefault></td>
                                <td><BtnDefault><Icon name="user" /> Usuarios</BtnDefault></td>
                                <td><BtnDefault><Icon name="cogs" /> Sistemas</BtnDefault></td>
                            </tr>
                            <tr>
                                <td>Enterplay</td>
                                <td>31.314.283/0001-70</td>
                                <td>Sim</td>
                                <td><BtnDefault><Icon name="pencil" /> Editar</BtnDefault></td>
                                <td><BtnDefault><Icon name="user" /> Usuarios</BtnDefault></td>
                                <td><BtnDefault><Icon name="cogs" /> Sistemas</BtnDefault></td>
                            </tr>
                            <tr>
                                <td>Flavia Pavanelli</td>
                                <td>23.312.497/0001-89</td>
                                <td>Sim</td>
                                <td><BtnDefault><Icon name="pencil" /> Editar</BtnDefault></td>
                                <td><BtnDefault><Icon name="user" /> Usuarios</BtnDefault></td>
                                <td><BtnDefault><Icon name="cogs" /> Sistemas</BtnDefault></td>
                            </tr>
                            <tr>
                                <td>Cufa</td>
                                <td>75.582.540/0001-20</td>
                                <td>Sim</td>
                                <td><BtnDefault><Icon name="pencil" /> Editar</BtnDefault></td>
                                <td><BtnDefault><Icon name="user" /> Usuarios</BtnDefault></td>
                                <td><BtnDefault><Icon name="cogs" /> Sistemas</BtnDefault></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}