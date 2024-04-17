// STYLES
import "@styles/HowTo.scss";

type Title = {
  title: string;
  func: () => void;
};

const HowTo = ({ title, func }: Title): React.JSX.Element => {
  return (
    <div className="howTo" title={title} onClick={func}>
      <p>?</p>
    </div>
  );
};

export default HowTo;
