import React from 'react';
import '../../assets/styles/cardPlaceHolder.scss';

interface CardPlaceHolderProps {
    count: number;
}

const CardPlaceHolder: React.FC<CardPlaceHolderProps> = ({ count }) => {
    const renderCards = (count: number) => {
        const cards = [];
        for (let i = 0; i < count; i++) {
            cards.push(
                <div key={i} className="card placeholder-card">
                    <div className="cardTitle">
                        <div className="glow-placeholder"></div>
                    </div>
                    <div className="cardBody">
                        <div className="glow-placeholder long"></div>
                        <div className="glow-placeholder medium"></div>
                        <div className="glow-placeholder short"></div>
                        <div className="glow-placeholder medium"></div>
                        <div className="glow-placeholder long"></div>
                    </div>
                </div>
            );
        }
        return cards;
    };

    return (
        <>
            {renderCards(count)}
        </>
    );
};

export default CardPlaceHolder;
