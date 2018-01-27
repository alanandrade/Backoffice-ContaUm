import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import { Row, Input } from 'react-materialize';

import './nova-campanha.css';

//Componentes
import { TitlesBox, TitlePrimario } from '../../../../utilities/titles/titles';
import { BtnDefault, BtnSecondary, BtnClean } from '../../../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../../../utilities/actionHeader/actionHeader';

export default class NovaCampanha extends Component {
    render() {
        return (
            <div className="novaCampanha">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Cadastrar Nova Campanha</TitlePrimario>
                    </TitlesBox>
                    <ActionHeader>
                        <Link to="/Campanhas">
                            <BtnSecondary><Icon name="reply" /> Voltar</BtnSecondary>
                        </Link>

                        <div className="clearfix"></div>
                    </ActionHeader>
                </ActionHeaderBox>

                <div className="clearfix"></div>

                <div className="content">
                    <form>
                        <Row>
                            <Input s={12} m={6} label="Titulo da Campanha" />
                            <Input s={12} m={6} type='select' label="Selecione um Canal" defaultValue='Todos'>
                                <option value='Todos'>Todos</option>
                                <option value='B2C'>B2C</option>
                                <option value='B2B Enterplay'>B2B Enterplay</option>
                                <option value='B2C Flavia Pavanelli'>B2C Flavia Pavanelli</option>
                                <option value='B2B B2C CufaCard'>B2B B2C CufaCard</option>
                            </Input>

                            <Input s={12} m={6} type='select' label="Exibir em" defaultValue='Home'>
                                <option value='Home'>Home</option>
                                <option value='B2C'>Home - Categorias</option>
                                <option value='B2C Flavia Pavanelli'>[B2C Flavia Pavanelli] Acessórios</option>
                                <option value='B2B B2C CufaCard'>[B2B B2C CufaCard] Flavia Pavanelli</option>
                                <option value='B2C Flavia Pavanelli'>[B2C Flavia Pavanelli] L.B.A</option>
                            </Input>

                            <Input s={12} m={6} type='date' onChange={function(e, value) {}} label="Data de inicio da campanha" />
                            <Input s={12} m={6} type='date' onChange={function(e, value) {}} label="Data final da campanha" />

                            <Input s={12} type='checkbox' label='Deseja ativar o campanha?' defaultChecked='checked' />
                        </Row>

                        <BtnDefault>Salvar Campanha</BtnDefault>
                        <BtnClean>Limpar</BtnClean>
                        <div className="clearfix"></div>
                    </form>
                </div>
            </div>
        );
    }
}