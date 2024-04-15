// STYLES
import "@styles/Button.scss";

type Func = {
  funcParam: ()=>void;
};

const Button = ({ funcParam }: Func): React.JSX.Element => {
  return <button onClick={funcParam}>Reset score</button>;
};

export default Button;
