import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import { Row, Input } from 'react-materialize';

import './usuarios.css';

//Componentes
import { TitlesBox, TitlePrimario, Subtitle } from '../../utilities/titles/titles';
import { BtnDefault, BtnSecondary, BtnClean } from '../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../utilities/actionHeader/actionHeader';

export default class Usuarios extends Component {
    render() {
        return (
            <div className="usuarios">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Usuários</TitlePrimario>
                        <Subtitle>Lista de Usuários do sistema</Subtitle>
                    </TitlesBox>
                    <ActionHeader>
                        <Link to="/Home">
                            <BtnSecondary><Icon name="reply" /> Voltar</BtnSecondary>
                        </Link>
                        <Link to="/Novo-usuario">
                            <BtnSecondary><Icon name="plus" /> Novo Uusário</BtnSecondary>
                        </Link>
                        
                        <div className="clearfix"></div>
                    </ActionHeader>
                </ActionHeaderBox>

                <div className="clearfix"></div>

                <div className="content">
                    <form>
                        <Row>
                            <Input s={12} m={6} label="Busque pelo nome ou CPF/CNPJ do usuário" validate />

                            <Input s={12} m={6} type='select' label="Selecione a empresa" defaultValue='Todas'>
                                <option value='Todas'>Todas</option>
                                <option value='Conta Um'>Conta Um</option>
                                <option value='Enterplay'>Enterplay</option>
                                <option value='Cufa'>Cufa</option>
                                <option value='Flavia Pavanelli'>Flávia Pavanelli</option>
                            </Input>

                            <Input s={12} m={6} type='select' label="Selecione o perfil" defaultValue='Todos'>
                                <option value='Todos'>Todos</option>
                                <option value='Admin'>Admin</option>
                                <option value='Revendedor'>Revendedor</option>
                            </Input>
                        </Row>

                        <BtnDefault>Buscar</BtnDefault>
                        <BtnClean>Limpar</BtnClean>
                        <div className="clearfix"></div>
                    </form>

                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>CPF/CNPJ</th>
                                <th>O usuário está ativo?</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>José da Silva</td>
                                <td>328.899.477-12</td>
                                <td>Sim</td>
                                <td><BtnDefault><Icon name="pencil" /> Editar Usuário</BtnDefault></td>
                                <td><BtnDefault><Icon name="user" /> Perfil do Grupo</BtnDefault></td>
                            </tr>
                            <tr>
                                <td>Maria da Silva</td>
                                <td>218.211.477-20</td>
                                <td>Sim</td>
                                <td><BtnDefault><Icon name="pencil" /> Editar Usuário</BtnDefault></td>
                                <td><BtnDefault><Icon name="user" /> Perfil do Grupo</BtnDefault></td>
                            </tr>
                            <tr>
                                <td>Antonio Silveira Santos</td>
                                <td>187.899.999-12</td>
                                <td>Não</td>
                                <td><BtnDefault><Icon name="pencil" /> Editar Usuário</BtnDefault></td>
                                <td><BtnDefault><Icon name="user" /> Perfil do Grupo</BtnDefault></td>
                            </tr>
                            <tr>
                                <td>Alice dos Santos</td>
                                <td>408.899.400-12</td>
                                <td>Sim</td>
                                <td><BtnDefault><Icon name="pencil" /> Editar Usuário</BtnDefault></td>
                                <td><BtnDefault><Icon name="user" /> Perfil do Grupo</BtnDefault></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}