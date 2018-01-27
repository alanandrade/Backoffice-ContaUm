import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import { Row, Input } from 'react-materialize';

import './novo-produto.css';

//Componentes
import { TitlesBox, TitlePrimario } from '../../../../utilities/titles/titles';
import { BtnDefault, BtnSecondary, BtnClean } from '../../../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../../../utilities/actionHeader/actionHeader';

export default class NovoProduto extends Component {
    render() {
        return (
            <div className="novoProduto">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Cadastrar Novo Produto</TitlePrimario>
                    </TitlesBox>
                    <ActionHeader>
                        <Link to="/Produtos">
                            <BtnSecondary><Icon name="reply" /> Voltar</BtnSecondary>
                        </Link>

                        <div className="clearfix"></div>
                    </ActionHeader>
                </ActionHeaderBox>

                <div className="clearfix"></div>

                <div className="content">
                    <form>
                        <Row>
                            <Input s={12} m={6} label="Nome do produto" />

                            <Input s={12} m={6} type='select' label="Selecione um anunciante" defaultValue='Todos'>
                                <option value='Todos'>Todos</option>
                                <option value='FP Acessories'>FP Acessories</option>
                                <option value='Cartao Flavia Pavanelli'>Cartão Flavia Pavanelli</option>
                                <option value='L.B.A bt Flavia Pavanelli'>L.B.A bt Flávia Pavanelli</option>
                            </Input>

                            <Input s={12} m={6} type='select' label="Selecione um canal" defaultValue='Todos'>
                                <option value='Todos'>Todos</option>
                                <option value='B2C'>B2C</option>
                                <option value='B2B Enterplay'>B2B Enterplay</option>
                                <option value='B2C Flavia Pavanelli'>B2C Flavia Pavanelli</option>
                                <option value='B2B B2C CufaCard'>B2B B2C CufaCard</option>
                            </Input>

                            <Input s={12} m={6} type='select' label="Selecione a categoria" defaultValue='Todos'>
                                <option value='Todos'>Todos</option>
                                <option value='FP Acessories'>B2C Flavia Pavanelli > Acessórios</option>
                                <option value='Cartao Flavia Pavanelli'>B2C Flavia Pavanelli > Flavia Pavanelli</option>
                                <option value='L.B.A bt Flavia Pavanelli'>B2C Flavia Pavanelli > L.B.A</option>
                            </Input>

                            <Input s={12} label="Descrição" />
                            <Input s={6} m={4} type="number" label="Valor mínimo" />
                            <Input s={6} m={4} type="number" label="Valor Máximo" />
                            <Input s={6} m={4} type="number" label="Valor Cash-Back" />

                            <Input s={6} label="SKU" />
                            <Input s={6} label="URL da Imagem" />
                            <Input s={12} m={6} type="file" label="Upload da imagem"></Input>

                            <Input s={12} m={6} type='checkbox' label='Este produto está ativo?' />
                            <Input s={12} m={6} type='checkbox' label='Este produto possui frete?' />
                        </Row>

                        <BtnDefault>Salvar Produto</BtnDefault>
                        <BtnClean>Limpar</BtnClean>
                        <div className="clearfix"></div>
                    </form>
                </div>
            </div>
        );
    }
}