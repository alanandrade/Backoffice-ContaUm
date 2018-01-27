import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import { Row, Input } from 'react-materialize';

import './novo-usuario.css';

//Componentes
import { TitlesBox, TitlePrimario } from '../../../utilities/titles/titles';
import { BtnDefault, BtnSecondary, BtnClean } from '../../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../../utilities/actionHeader/actionHeader';

export default class NovoUsuario extends Component {
    render() {
        return (
            <div className="novoUsuario">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Cadastrar Novo Usuário</TitlePrimario>
                    </TitlesBox>
                    <ActionHeader>
                        <Link to="/Usuarios">
                            <BtnSecondary><Icon name="reply" /> Voltar</BtnSecondary>
                        </Link>

                        <div className="clearfix"></div>
                    </ActionHeader>
                </ActionHeaderBox>

                <div className="clearfix"></div>

                <div className="content">
                    <form>
                        <Row>
                            <Input s={12} m={6} label="Nome do usuário" />
                            <Input s={12} m={6} label="CPF/CNPJ do usuário" />
                            <Input s={12} m={6} label="E-mail do usuário" />
                            <Input s={12} m={6} label="Telefone do usuário" />
                            <Input s={12} m={6} label="Qual a pergunta secreta?" />
                            <Input s={12} m={6} label="Qual a resposta da pergunta secreta?" />
                            <Input s={12} m={6} type='checkbox' label='O usuário está ativo?' defaultChecked='checked' />
                        </Row>

                        <BtnDefault>Salvar Usuário</BtnDefault>
                        <BtnClean>Limpar</BtnClean>
                        <div className="clearfix"></div>
                    </form>
                </div>
            </div>
        );
    }
}