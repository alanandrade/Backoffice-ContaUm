import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import { Row, Input } from 'react-materialize';

import './imagens.css';

//Componentes
import { TitlesBox, TitlePrimario, Subtitle } from '../../../utilities/titles/titles';
import { BtnDefault, BtnSecondary, BtnClean } from '../../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../../utilities/actionHeader/actionHeader';

export default class Imagens extends Component {
    render() {
        return (
            <div className="imagens">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Imagens</TitlePrimario>
                        <Subtitle>Lista de imagens no Marketplace</Subtitle>
                    </TitlesBox>
                    <ActionHeader>
                        <Link to="/Home">
                            <BtnSecondary><Icon name="reply" /> Voltar</BtnSecondary>
                        </Link>

                        <Link to="Nova-imagem">
                            <BtnSecondary><Icon name="plus" /> Nova Imagem</BtnSecondary>
                        </Link>

                        <div className="clearfix"></div>
                    </ActionHeader>
                </ActionHeaderBox>

                <div className="clearfix"></div>

                <div className="content">
                    <form>
                        <Row>
                            <Input s={12} m={6} label="Busque pelo titulo ou descrião da imagem" validate />

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
                                <th>Canal</th>
                                <th>A imagem está ativa?</th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Nome da Imagem</td>
                                <td>Conta Um</td>
                                <td>Sim</td>
                                <td><BtnDefault><Icon name="eye" /> Visualizar</BtnDefault></td>
                                <td><BtnDefault><Icon name="pencil" /> Editar</BtnDefault></td>
                                <td><BtnDefault><Icon name="times" /> Excluir</BtnDefault></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}