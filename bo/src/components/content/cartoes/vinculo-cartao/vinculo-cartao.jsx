import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import { Row, Input } from 'react-materialize';

import './vinculo-cartao.css';

//Componentes
import { TitlesBox, TitlePrimario, Subtitle } from '../../../utilities/titles/titles';
import { BtnDefault, BtnSecondary } from '../../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../../utilities/actionHeader/actionHeader';

export default class VinculoCartao extends Component {
    render() {
        return (
            <div className="vinculo-cartao">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Painel de Vínculo de Cartões</TitlePrimario>
                        <Subtitle>Painel para vincular cartões</Subtitle>
                    </TitlesBox>
                    <ActionHeader>
                        <Link to="/Home">
                            <BtnSecondary><Icon name="reply" /> Voltar</BtnSecondary>
                        </Link>

                        <Link to="/Novo-vinculo">
                            <BtnSecondary><Icon name="plus" /> Novo Vínculo</BtnSecondary>
                        </Link>

                        <div className="clearfix"></div>
                    </ActionHeader>
                </ActionHeaderBox>

                <div className="clearfix"></div>

                <div className="content">
                    <form>
                        <Row>
                            <Input s={12} m={6} label="Conta do cartão" validate />

                            <Input s={12} m={6} type='select' label="Selecione o canal">
                                <option value='Conta Um'>Conta Um</option>
                                <option value='Enterplay'>Enterplay</option>
                                <option value='Flavia Pavanelli'>Flávia Pavanelli</option>
                                <option value='CufaCard'>CufaCard</option>
                            </Input>
                        </Row>

                        <BtnDefault>Pesquisar</BtnDefault>
                        <BtnDefault>Limpar</BtnDefault>
                        <div className="clearfix"></div>
                    </form>

                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>Conta do Cartão</th>
                                <th>Canal</th>
                                <th>Vínculo</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>123</td>
                                <td>Conta Um</td>
                                <td>info vinculo</td>
                                <td><BtnDefault><Icon name="pencil" /> Editar</BtnDefault></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}