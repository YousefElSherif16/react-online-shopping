import "./Button.css";

const Button = (props) => {
  let classes = "button ";
  return (
    <button
      className={classes + props.className}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
