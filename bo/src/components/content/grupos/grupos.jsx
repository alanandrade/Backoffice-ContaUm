import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import { Row, Input } from 'react-materialize';

import './grupos.css';

//Componentes
import { TitlesBox, TitlePrimario, Subtitle } from '../../utilities/titles/titles';
import { BtnDefault, BtnSecondary, BtnClean } from '../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../utilities/actionHeader/actionHeader';

export default class Grupos extends Component {
    render() {
        return (
            <div className="grupos">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Grupos</TitlePrimario>
                        <Subtitle>Grupos de perfis de usuários</Subtitle>
                    </TitlesBox>
                    <ActionHeader>
                        <Link to="/Home">
                            <BtnSecondary><Icon name="reply" /> Voltar</BtnSecondary>
                        </Link>

                        <Link to="/Novo-grupo">
                            <BtnSecondary><Icon name="plus" /> Novo Grupo</BtnSecondary>
                        </Link>

                        <div className="clearfix"></div>
                    </ActionHeader>
                </ActionHeaderBox>

                <div className="clearfix"></div>

                <div className="content">
                    <form>
                        <Row>
                            <Input s={12} label="Busque pelo nome do grupo" validate />
                        </Row>

                        <BtnDefault>Pesquisar</BtnDefault>
                        <BtnClean>Limpar</BtnClean>
                        <div className="clearfix"></div>
                    </form>

                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>Grupo</th>
                                <th>Sistema</th>
                                <th>O grupo está ativo?</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Admin</td>
                                <td>BackOffice</td>
                                <td>Sim</td>
                                <td><BtnDefault><Icon name="pencil" /> Editar Grupo</BtnDefault></td>
                                <td><BtnDefault><Icon name="lock" /> Permissões</BtnDefault></td>
                            </tr>
                            <tr>
                                <td>Revendedor</td>
                                <td>BackOffice</td>
                                <td>Não</td>
                                <td><BtnDefault><Icon name="pencil" /> Editar Grupo</BtnDefault></td>
                                <td><BtnDefault><Icon name="lock" /> Permissões</BtnDefault></td>
                            </tr>
                            <tr>
                                <td>WhiteLabel</td>
                                <td>BackOffice</td>
                                <td>Sim</td>
                                <td><BtnDefault><Icon name="pencil" /> Editar Grupo</BtnDefault></td>
                                <td><BtnDefault><Icon name="lock" /> Permissões</BtnDefault></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}