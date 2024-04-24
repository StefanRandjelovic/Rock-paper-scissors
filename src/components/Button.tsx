// STYLES
import "@styles/Button.scss";

type Func = {
  theme: string;
  funcParam: () => void;
};

const Button = ({ theme, funcParam }: Func): React.JSX.Element => {
  return (
    <button className={theme} onClick={funcParam}>
      Reset score
    </button>
  );
};

export default Button;
