import LinkComp from "./Link";
import "./styles/Button.scss";

export default function Button({ props, className, children, link, url }) {
  // This is a reusable button component
  // It can be used in different parts of the application

  const classes = `btn ${className}`;

  return link ? (
    <LinkComp url={url} className={`${classes} link`} {...props}>
      {children}
    </LinkComp>
  ) : (
    <button {...props} className={classes}>
      {children}
    </button>
  );
}
