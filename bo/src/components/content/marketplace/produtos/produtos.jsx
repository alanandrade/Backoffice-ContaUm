import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import { Row, Input } from 'react-materialize';

import './produtos.css';

//Componentes
import { TitlesBox, TitlePrimario, Subtitle } from '../../../utilities/titles/titles';
import { BtnDefault, BtnSecondary, BtnClean } from '../../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../../utilities/actionHeader/actionHeader';

export default class Produtos extends Component {
    render() {
        return (
            <div className="produtos">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Produtos</TitlePrimario>
                        <Subtitle>Lista de produtos no Marketplace</Subtitle>
                    </TitlesBox>
                    <ActionHeader>
                        <Link to="/Home">
                            <BtnSecondary><Icon name="reply" /> Voltar</BtnSecondary>
                        </Link>

                        <Link to="/Novo-produto">
                            <BtnSecondary><Icon name="plus" /> Novo Produto</BtnSecondary>
                        </Link>
                        
                        <div className="clearfix"></div>
                    </ActionHeader>
                </ActionHeaderBox>

                <div className="clearfix"></div>

                <div className="content">
                    <form>
                        <Row>
                            <Input s={12} m={6} label="Nome do produto" validate />

                            <Input s={12} m={6} type='select' label="Selecione o Anúncio" defaultValue='Todas'>
                                <option value='Todas'>Todas</option>
                                <option value='FP Acessories'>FP Acessories</option>
                                <option value='Cartão Flavia Pavanelli'>Cartão Flavia Pavanelli</option>
                                <option value='L.B.A by Flávia Pavanelli'>L.B.A by Flávia Pavanelli</option>
                            </Input>

                            <Input s={12} m={6} type='select' label="Selecione o Canal" defaultValue='Todos'>
                                <option value='Todos'>Todos</option>
                                <option value='Conta um'>Conta um</option>
                                <option value='Flavia Pavanelli'>Flavia Pavanelli</option>
                                <option value='Cufa'>Cufa</option>
                            </Input>

                            <Input s={12} m={6} type='select' label="Selecione a Categoria" defaultValue='Todas'>
                                <option value='Todas'>Todas</option>
                                <option value='Nome Categoria'>Nome Categoria</option>
                                <option value='Nome Categoria'>Nome Categoria</option>
                            </Input>
                        </Row>

                        <BtnDefault>Buscar</BtnDefault>
                        <BtnClean>Limpar</BtnClean>
                        <div className="clearfix"></div>
                    </form>

                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>Produto</th>
                                <th>O produto está ativo?</th>
                                <th>Canal</th>
                                <th>Categoria</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Nome do Produto</td>
                                <td>Sim</td>
                                <td>Conta Um</td>
                                <td>Destaque</td>
                                <td><BtnDefault><Icon name="pencil" /> Editar</BtnDefault></td>
                            </tr>
                       </tbody>
                    </table>
                </div>
            </div>
        );
    }
}