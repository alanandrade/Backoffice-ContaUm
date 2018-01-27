import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import { Row, Input } from 'react-materialize';

import './finalizarPedidosLote.css';

//Componentes
import { TitlesBox, TitlePrimario, Subtitle } from '../../../utilities/titles/titles';
import { BtnDefault, BtnSecondary, BtnClean } from '../../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../../utilities/actionHeader/actionHeader';

export default class finalizarPedidosLote extends Component {
    render() {
        return (
            <div className="finalizarPedidosLote">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Finalizar Pedidos em Lote</TitlePrimario>
                        <Subtitle>Finalizar pedidos do Marketplace em lote</Subtitle>
                    </TitlesBox>
                    <ActionHeader>
                        <Link to="/Home">
                            <BtnSecondary><Icon name="reply" /> Voltar</BtnSecondary>
                        </Link>
                        <BtnSecondary><Icon name="plus" /> Novo Produto</BtnSecondary>
                        <div className="clearfix"></div>
                    </ActionHeader>
                </ActionHeaderBox>

                <div className="clearfix"></div>

                <div className="content">
                    <form>
                        <Row>
                            
                            <Input s={12} m={6} type='date' onChange={function(e, value) {}} label="Pesquisar a partir da Data" />
                    
                            <Input s={12} m={6} type='date' onChange={function(e, value) {}} label="Pesquisar até a Data" />

                        </Row>

                        <BtnDefault>Buscar</BtnDefault>
                        <BtnClean>Limpar</BtnClean>
                        <div className="clearfix"></div>
                    </form>
                </div>
            </div>
        );
    }
}