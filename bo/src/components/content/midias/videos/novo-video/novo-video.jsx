import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import { Row, Input } from 'react-materialize';

import './novo-video.css';

//Componentes
import { TitlesBox, TitlePrimario } from '../../../../utilities/titles/titles';
import { BtnDefault, BtnSecondary, BtnClean } from '../../../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../../../utilities/actionHeader/actionHeader';

export default class NovoVideo extends Component {
    render() {
        return (
            <div className="novoVideo">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Cadastrar Novo Vídeo</TitlePrimario>
                    </TitlesBox>
                    <ActionHeader>
                        <Link to="/Videos">
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
                            <Input s={12} m={6} label="Titulo do Vídeo" />
                            <Input s={12} m={6} label="Descrição do Vídeo" />
                            <Input s={12} m={6} label="Código Embed" />

                            <Input s={12} type='checkbox' label='Este Vídeo está ativo?' defaultChecked='checked' />
                        </Row>

                        <BtnDefault>Salvar Vídeo</BtnDefault>
                        <BtnClean>Limpar</BtnClean>
                        <div className="clearfix"></div>
                    </form>
                </div>
            </div>
        );
    }
}