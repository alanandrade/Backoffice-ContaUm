import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import { Row, Input } from 'react-materialize';

import './nova-imagem.css';

//Componentes
import { TitlesBox, TitlePrimario } from '../../../../utilities/titles/titles';
import { BtnDefault, BtnSecondary, BtnClean } from '../../../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../../../utilities/actionHeader/actionHeader';

export default class NovaImagem extends Component {
    render() {
        return (
            <div className="novaImagem">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Cadastrar Nova Imagem</TitlePrimario>
                    </TitlesBox>
                    <ActionHeader>
                        <Link to="/Imagens">
                            <BtnSecondary><Icon name="reply" /> Voltar</BtnSecondary>
                        </Link>

                        <div className="clearfix"></div>
                    </ActionHeader>
                </ActionHeaderBox>

                <div className="clearfix"></div>

                <div className="content">
                    <form>
                        <Row>
                            <Input s={12} m={6} type='select' label="Selecione um Canal" defaultValue='Todos'>
                                <option value='Todos'>Todos</option>
                                <option value='B2C'>B2C</option>
                                <option value='B2B Enterplay'>B2B Enterplay</option>
                                <option value='B2C Flavia Pavanelli'>B2C Flavia Pavanelli</option>
                                <option value='B2B B2C CufaCard'>B2B B2C CufaCard</option>
                            </Input>
                            <Input s={12} m={6} label="Titulo da Imagem" />
                            <Input s={12} m={6} label="Descrição da Imagem" />
                            <Input s={12} m={6} type="file" label="Upload da imagem"></Input>

                            <Input s={12} type='checkbox' label='Esta imagem está ativa?' defaultChecked='checked' />
                        </Row>

                        <BtnDefault>Salvar Imagem</BtnDefault>
                        <BtnClean>Limpar</BtnClean>
                        <div className="clearfix"></div>
                    </form>
                </div>
            </div>
        );
    }
}