import '../../assets/styles/cardPlaceHolder.scss';

function CardPlaceHolder () {
    return (
        <div className="card placeholder-card">
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
};

export default CardPlaceHolder;
