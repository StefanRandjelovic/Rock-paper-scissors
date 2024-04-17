// STYLES
import "@styles/GameInfo.scss";

type Info = {
  h1: string;
  p: string;
  func: () => void;
  hidShow: boolean;
};

const GameInfo = ({ h1, p, func, hidShow }: Info): React.JSX.Element => {
  return (
    <div className={hidShow ? "InfoOverlay" : "InfoOverlay hidden"}>
      <h1>{h1}</h1>
      <p>{p}</p>
      <p id="close" onClick={func}>
        x
      </p>
    </div>
  );
};

export default GameInfo;
