// STYLES
import "@styles/GameInfo.scss";

type Info = {
  theme: string;
  h1: string;
  p: string;
  func: () => void;
  hidShow: boolean;
};

const GameInfo = ({ theme, h1, p, func, hidShow }: Info): React.JSX.Element => {
  return (
    <div
      className={hidShow ? "InfoOverlay" : "InfoOverlay hidden"}
      id={`${theme}`}
    >
      <h1>{h1}</h1>
      <p>{p}</p>
      <p id="close" className={`${theme}`} onClick={func}>
        x
      </p>
    </div>
  );
};

export default GameInfo;
