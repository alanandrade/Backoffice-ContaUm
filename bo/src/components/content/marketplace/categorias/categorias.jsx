import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import { Row, Input } from 'react-materialize';

import './categorias.css';

//Componentes
import { TitlesBox, TitlePrimario, Subtitle } from '../../../utilities/titles/titles';
import { BtnDefault, BtnSecondary, BtnClean } from '../../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../../utilities/actionHeader/actionHeader';

export default class Categorias extends Component {
    render() {
        return (
            <div className="categorias">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Categorias</TitlePrimario>
                        <Subtitle>Lista de categorias do Marketplace</Subtitle>
                    </TitlesBox>
                    <ActionHeader>
                        <Link to="/Home">
                            <BtnSecondary><Icon name="reply" /> Voltar</BtnSecondary>
                        </Link>

                        <Link to="/Nova-categoria">
                            <BtnSecondary><Icon name="plus" /> Nova Categoria</BtnSecondary>
                            </Link>
                        
                        <div className="clearfix"></div>
                    </ActionHeader>
                </ActionHeaderBox>

                <div className="clearfix"></div>

                <div className="content">
                    <form>
                        <Row>
                            <Input s={12} m={6} label="Busque pela nome da categoria" validate />

                            <Input s={12} m={6} type='select' label="Selecione o Canal" defaultValue='Todos'>
                                <option value='Todos'>Todos</option>
                                <option value='B2C'>B2C</option>
                                <option value='B2C Enterplay'>B2C Enterplay</option>
                                <option value='B2C Flavia Pavanelli'>B2C Flávia Pavanelli</option>
                                <option value='B2C CufaCard'>B2C CufaCard</option>
                            </Input>
                        </Row>

                        <BtnDefault>Buscar</BtnDefault>
                        <BtnClean>Limpar</BtnClean>
                        <div className="clearfix"></div>
                    </form>

                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>Categoria</th>
                                <th>Subcategoria</th>
                                <th>Canal</th>
                                <th>A categoria está ativa?</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Acessórios</td>
                                <td>Acessórios</td>
                                <td>B2C</td>
                                <td>Sim</td>
                                <td><BtnDefault><Icon name="eye"/> Visualizar</BtnDefault></td>
                                <td><BtnDefault><Icon name="pencil"/> Editar</BtnDefault></td>
                            </tr>
                       </tbody>
                    </table>
                </div>
            </div>
        );
    }
}