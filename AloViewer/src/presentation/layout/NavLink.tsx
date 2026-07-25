import { Link } from "react-router";

interface Props {
  icon?: React.ReactNode; //aqui ya se que mando un componente
  text?: string;
  active?: boolean;
  to: string;
}

export const NavLink = ({ icon, text, active = false, to }: Props) => {
  return (
    <Link
      to={to}
      className={`flex items-center px-3 py-2 rounded-md text-sm
                ${
                  active
                    ? " text-white"
                    : "text-purple-200 hover:bg-purple-500"
                }`}
    >
        {icon} <span>{text}</span>
    </Link>
  );
};
