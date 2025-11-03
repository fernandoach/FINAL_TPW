import { Link } from "react-router-dom";

function LinkAtom({ to, children, className }) {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export { LinkAtom };
    