import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

const NavItem = (props: NavItemProps) => {
  return (
    <Link
      onClick={() => props.setOpen(false)}
      className={`${
        props.active ? 'text-zinc-800 text-xl font-semibold leading-6 underline' : 'text-slate-500 text-xl font-semibold leading-6 whitespace-nowrap'
      }`}
      href={props.href}
    >
      {props.text}
    </Link>
  );
};

export default NavItem;

interface NavItemProps {  
    text: string;  
    href: string;  
    active: boolean;  
    setOpen: Dispatch<SetStateAction<boolean | null>>;  
  } 
