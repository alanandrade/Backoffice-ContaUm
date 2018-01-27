import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import { Row, Input } from 'react-materialize';

import './nova-categoria.css';

//Componentes
import { TitlesBox, TitlePrimario } from '../../../../utilities/titles/titles';
import { BtnDefault, BtnSecondary, BtnClean } from '../../../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../../../utilities/actionHeader/actionHeader';

export default class NovoProduto extends Component {
    render() {
        return (
            <div className="novaCategoria">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Cadastrar Nova Categoria</TitlePrimario>
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

                            <Input s={12} m={6} type='select' label="Selecione a categoria principal" defaultValue='Todos'>
                                <option value='Todos'>Todos</option>
                                <option value='Acessórios'>B2C Flavia Pavanelli > Acessórios</option>
                                <option value='Flavia Pavanelli'>B2C Flavia Pavanelli > Flávia Pavanelli</option>
                                <option value='L.B.A'>B2C Flavia Pavanelli > L.B.A</option>
                            </Input>

                            <Input s={12} m={6} type='select' label="Selecione um canal" defaultValue='Todos'>
                                <option value='Todos'>Todos</option>
                                <option value='B2C'>B2C</option>
                                <option value='B2B Enterplay'>B2B Enterplay</option>
                                <option value='B2C Flavia Pavanelli'>B2C Flavia Pavanelli</option>
                                <option value='B2B B2C CufaCard'>B2B B2C CufaCard</option>
                            </Input>

                            <Input s={12} m={6} label="Nome da categoria" />
                            <Input s={12} type='checkbox' label='Está categoria está ativa?' />
                            
                            <Input s={12} m={6} type="file" label="Upload da imagem"></Input>
                        </Row>

                        <BtnDefault>Salvar Categoria</BtnDefault>
                        <BtnClean>Limpar</BtnClean>
                        <div className="clearfix"></div>
                    </form>
                </div>
            </div>
        );
    }
}