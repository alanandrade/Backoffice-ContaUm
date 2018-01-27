import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import { Row, Input } from 'react-materialize';

import './novo-grupo.css';

//Componentes
import { TitlesBox, TitlePrimario } from '../../../utilities/titles/titles';
import { BtnDefault, BtnSecondary, BtnClean } from '../../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../../utilities/actionHeader/actionHeader';

export default class NovoGrupo extends Component {
    render() {
        return (
            <div className="novoGrupo">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Cadastrar Novo Grupo</TitlePrimario>
                    </TitlesBox>
                    <ActionHeader>
                        <Link to="/Grupos">
                            <BtnSecondary><Icon name="reply" /> Voltar</BtnSecondary>
                        </Link>

                        <div className="clearfix"></div>
                    </ActionHeader>
                </ActionHeaderBox>

                <div className="clearfix"></div>

                <div className="content">
                    <form>
                        <Row>
                            <Input s={12} m={6} label="Nome do grupo" />

                            <Input s={12} m={6} type='select' label="Qual o Sistema?">
                                <option value='Backoffice'>Backoffice</option>
                            </Input>

                            <Input s={12} m={6} type='checkbox' label='O Grupo está ativo?' defaultChecked='checked' />
                            <Input s={12} m={6} type='checkbox' label='Este grupo possui perfil administrador?' />
                        </Row>

                        <BtnDefault>Salvar Novo Grupo</BtnDefault>
                        <BtnClean>Limpar</BtnClean>
                        <div className="clearfix"></div>
                    </form>
                </div>
            </div>
        );
    }
}