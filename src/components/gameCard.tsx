// STYLES
import "@styles/gameCard.scss";

type Prop = {
  id: string;
};

const GameCard = ({ id }: Prop): React.JSX.Element => {
  return (
    <div className="card" id={id}>
      <div className="inner"></div>
    </div>
  );
};

export default GameCard;
