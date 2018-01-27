import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import { Row, Input } from 'react-materialize';

import './anunciantes.css';

//Componentes
import { TitlesBox, TitlePrimario, Subtitle } from '../../../utilities/titles/titles';
import { BtnDefault, BtnSecondary, BtnClean } from '../../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../../utilities/actionHeader/actionHeader';

export default class Anunciantes extends Component {
    render() {
        return (
            <div className="anunciantes">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Anunciantes</TitlePrimario>
                        <Subtitle>Anunciantes de Marketplace</Subtitle>
                    </TitlesBox>
                    <ActionHeader>
                        <Link to="/Home">
                            <BtnSecondary><Icon name="reply" /> Voltar</BtnSecondary>
                        </Link>

                        <Link to="/Novo-anunciante">
                            <BtnSecondary><Icon name="plus" /> Novo Anúncio</BtnSecondary>
                        </Link>

                        <div className="clearfix"></div>
                    </ActionHeader>
                </ActionHeaderBox>

                <div className="clearfix"></div>

                <div className="content">
                    <form>
                        <Row>
                            <Input s={12} label="Busque pelo nome do Anúncio" validate />
                        </Row>

                        <BtnDefault>Buscar</BtnDefault>
                        <BtnClean>Limpar</BtnClean>
                        <div className="clearfix"></div>
                    </form>

                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>Anunciante</th>
                                <th>O anúncio está ativo?</th>
                                <th>Data de criação</th>
                                <th>Desabilitado em:</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>FP Accessories</td>
                                <td>Sim</td>
                                <td>04/11/2017</td>
                                <td></td>
                                <td><BtnDefault><Icon name="pencil" /> Editar</BtnDefault></td>
                            </tr>
                       </tbody>
                    </table>
                </div>
            </div>
        );
    }
}