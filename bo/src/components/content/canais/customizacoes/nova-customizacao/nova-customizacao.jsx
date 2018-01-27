import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import { Row, Input } from 'react-materialize';

import './nova-customizacao.css';

//Componentes
import { TitlesBox, TitlePrimario } from '../../../../utilities/titles/titles';
import { BtnDefault, BtnSecondary, BtnClean } from '../../../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../../../utilities/actionHeader/actionHeader';

export default class NovaCustomizacao extends Component {
    render() {
        return (
            <div className="novaCustomizacao">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Cadastrar Nova Customização</TitlePrimario>
                    </TitlesBox>
                    <ActionHeader>
                        <Link to="/Customizacoes">
                            <BtnSecondary><Icon name="reply" /> Voltar</BtnSecondary>
                        </Link>

                        <div className="clearfix"></div>
                    </ActionHeader>
                </ActionHeaderBox>

                <div className="clearfix"></div>

                <div className="content">
                    <form>
                        <Row>
                            <Input s={12} type='select' label="Selecione um Canal">
                                <option value='Conta Um'>Conta Um</option>
                                <option value='Enterplay'>Enterplay</option>
                                <option value='Flavia Pavanelli'>Flavia Pavanelli</option>
                                <option value='CufaCard'>CufaCard</option>
                            </Input>

                            <Input s={6} m={4} label="Cor do Button" />
                            <Input s={6} m={4} label="Tab Color" />
                            <Input s={6} m={4} label="Tab Active Color" />

                            <Input s={6} m={4} label="Color Primary" />
                            <Input s={6} m={4} label="Color Accent" />
                            <Input s={6} m={4} label="Color Ligher" />

                            <Input s={6} m={4} label="Color Border" />
                            <Input s={6} m={4} label="Color Background" />
                            <Input s={6} m={4} label="Color Background Inverter" />

                            <Input s={6} m={4} label="Color Text" />
                            <Input s={6} m={4} label="Color Text Weak" />
                            <Input s={6} m={4} label="Color Heading" />

                            <Input s={6} m={4} label="Color Link" />
                            <Input s={6} m={4} label="Color Join" />
                            <Input s={6} m={4} label="Color Input" />

                            <Input s={6} m={4} label="Color Clean" />
                            <Input s={6} m={4} label="Color Success" />
                            <Input s={6} m={4} label="Color Success Light" />

                            <Input s={6} m={4} label="Color Important" />
                            <Input s={6} m={4} label="Colo Important Light" />
                            <Input s={6} m={4} label="Color Opaque" />

                            <Input s={6} m={4} label="Color Opaque Text" />

                            <Input s={12} type="file" label="Upload do Logo"></Input>
                        </Row>

                        <BtnDefault>Salvar Customização</BtnDefault>
                        <BtnClean>Limpar</BtnClean>
                        <div className="clearfix"></div>
                    </form>
                </div>
            </div>
        );
    }
}