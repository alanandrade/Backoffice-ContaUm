import React, { Component } from 'react';

import './home.css';

//Utilities
import { CardBlue, CardOrange, CardPurple , CardBlueDark} from '../../utilities/cards/cards';

export default class Home extends Component {
    render() {
        const addInfoCardBlue = {
            titleCard: 'Cartões ativos',
            descCard: '321',
          };

          const addInfoCardOrange = {
            titleCard: 'Depósitos',
            descCard: 'R$ 518.731,33',
          };

          const addInfoCardPurple = {
            titleCard: 'Compras Realizadas',
            descCard: 'R$ 254.155,29',
          };

          const addInfoCardBlueCard = {
            titleCard: 'Tarifas',
            descCard: 'R$ 7.061,52',
          };

        return (
            <div className="home">
                <div className="content">
                    <div className="cardsHeader">
                        <CardBlue titleCard={addInfoCardBlue.titleCard} descCard={addInfoCardBlue.descCard}/>
                        <CardOrange titleCard={addInfoCardOrange.titleCard} descCard={addInfoCardOrange.descCard}/>
                        <CardPurple titleCard={addInfoCardPurple.titleCard} descCard={addInfoCardPurple.descCard}/>
                        <CardBlueDark titleCard={addInfoCardBlueCard.titleCard} descCard={addInfoCardBlueCard.descCard}/>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        );
    }
}