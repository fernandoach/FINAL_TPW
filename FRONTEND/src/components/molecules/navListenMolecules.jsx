import { LinkAtom } from "../atoms/linkAtom";   
import { ListenAtom } from "../atoms/listenAtom";
import { UserIcon } from "../atoms/userIcon";

export function NavListMolecule({ options, roles }) {
  return (
    <ul className="flex gap-5 justify-center items-center">
      {options.map((option, index) => (
        <ListenAtom key={index}>
          <LinkAtom to={option.path}>{option.text}</LinkAtom>
        </ListenAtom>
      ))}

      {roles.map((role, index) => (
        <ListenAtom key={index}>
          <LinkAtom
            to={role.path}
            className="bg-orange-400 px-3 rounded-2xl hover:shadow-lg transition-all duration-200"
          >
            {role.text}
          </LinkAtom>
        </ListenAtom>
      ))}

      <UserIcon />
    </ul>
  );
}
