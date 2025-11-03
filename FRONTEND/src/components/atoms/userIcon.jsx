import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function UserIcon() {
  return (
    <Link to={'/login'}>
      <FaUserCircle className="text-orange-400 hover:scale-110" size={25} />
    </Link>
    
  );    
}
export { UserIcon };
