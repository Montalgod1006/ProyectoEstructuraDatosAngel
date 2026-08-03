import { Link } from "react-router";

interface Props {
  icon?: React.ReactNode; // el ? es para decir que es opcional
  text?: string;
  active?: boolean;
  to: string;
}

export const MobileNavLink = ({ icon, text, active = false, to }: Props) => {
  return (
    <Link to={to}
        className={`flex items-center gap-1 px-3 py-2 rounded-md 
        ${
             active ? ' text-white' : 'text-blue-100 hover:bg-blue-500'
        }`}>
      {icon} <span> {text}</span>
    </Link>
  );
};
