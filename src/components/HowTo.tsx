// STYLES
import "@styles/HowTo.scss";

type Title = {
  theme: string;
  title: string;
  func: () => void;
};

const HowTo = ({ theme, title, func }: Title): React.JSX.Element => {
  return (
    <div className={`howTo ${theme}`} title={title} onClick={func}>
      <p>?</p>
    </div>
  );
};

export default HowTo;
