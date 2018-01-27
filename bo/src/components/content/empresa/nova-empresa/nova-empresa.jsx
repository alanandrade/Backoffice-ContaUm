import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import { Row, Input } from 'react-materialize';

import './nova-empresa.css';

//Componentes
import { TitlesBox, TitlePrimario } from '../../../utilities/titles/titles';
import { BtnDefault, BtnSecondary, BtnClean } from '../../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../../utilities/actionHeader/actionHeader';

export default class NovaEmpresa extends Component {
    render() {
        return (
            <div className="novaEmpresa">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Cadastrar Nova Empresa</TitlePrimario>
                    </TitlesBox>
                    <ActionHeader>
                        <Link to="/Empresa">
                            <BtnSecondary><Icon name="reply" /> Voltar</BtnSecondary>
                        </Link>

                        <div className="clearfix"></div>
                    </ActionHeader>
                </ActionHeaderBox>

                <div className="clearfix"></div>

                <div className="content">
                    <form>
                        <Row>
                            <Input s={12} m={6} label="Nome da empresa" />
                            <Input s={12} m={6} label="CNPJ da empresa" />
                            <Input s={12} m={6} label="Qual o nome da rua?" />
                            <Input s={6} label="Qual o número?" />
                            <Input s={6} label="Qual o bairro?" />
                            
                            <Input s={12} m={6} type='select' label="Em que estado fica localizado?" defaultValue='Sao Paulo'>
                                <option value='Acre'>Acre</option>
                                <option value='Alagoas'>Alagoas</option>
                                <option value='Amazonas'>Amazonas</option>
                                <option value='Amapá'>Amapá</option>
                                <option value='Bahia'>Bahia</option>
                                <option value='Ceará'>Ceará</option>
                                <option value='Distrito Federal'>Distrito Federal</option>
                                <option value='Espirito Santo'>Espirito Santo</option>
                                <option value='Goias'>Goias</option>
                                <option value='Maranhao'>Maranhão</option>
                                <option value='Minas Gerais'>Minas Gerais</option>
                                <option value='Mato Grosso do Sul'>Mato Grosso do Sul</option>
                                <option value='Mato Grosso'>Mato Grosso</option>
                                <option value='Para'>Pará</option>
                                <option value='Paraiba'>Paraíba</option>
                                <option value='Pernambuco'>Pernambuco</option>
                                <option value='Piaui'>Piaui</option>
                                <option value='Parana'>Paraná</option>
                                <option value='Rio de Janeiro'>Rio de Janeiro</option>
                                <option value='Rio Grande do Norte'>Rio Grande do Norte</option>
                                <option value='Rondonia'>Rondônia</option>
                                <option value='Roraima'>Roraima</option>
                                <option value='Rio Grande do Sul'>Rio Grande do Sul</option>
                                <option value='Santa Catarina'>Santa Catarina</option>
                                <option value='Sergipe'>Sergipe</option>
                                <option value='São Paulo'>São Paulo</option>
                                <option value='Tocantins'>Tocantins</option>
                            </Input>

                            <Input s={12} m={6} label="Qual a cidade está localizada?" />
                            <Input s={12} m={6} label="Qual o CEP do endereço?" />
                            <Input s={12} m={6} label="Qual o nome da rua?" />

                            <Input s={12} m={6} type='select' label="Qual o nome da empresa matriz?" defaultValue='Contaum'>
                                <option value='Contaum'>Conta Um</option>
                                <option value='Enterplay'>Enterplay</option>
                                <option value='Renascer'>Amazonas</option>
                                <option value='Cufa'>Cufa</option>
                            </Input>

                            <Input s={12} m={6} type='checkbox' label='Está empresa está ativa?' defaultChecked='checked' />
                            <Input s={12} m={6} type='checkbox' label='Pode visualizar os dados de outra pessoa?' />
                        </Row>

                        <BtnDefault>Salvar nova empresa</BtnDefault>
                        <BtnClean>Limpar</BtnClean>
                        <div className="clearfix"></div>
                    </form>
                </div>
            </div>
        );
    }
}