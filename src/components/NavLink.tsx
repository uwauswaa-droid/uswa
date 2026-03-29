import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  (
    {
      className = "",
      activeClassName = "text-white",
      pendingClassName = "opacity-50",
      to,
      ...props
    },
    ref
  ) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(
            // BASE STYLE (biar konsisten sama navbar kamu)
            "relative font-medium transition-all duration-300",
            "text-gray-400 hover:text-white",

            // CUSTOM CLASS
            className,

            // ACTIVE STATE
            isActive &&
              cn(
                activeClassName,
                "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full",
                "after:bg-gradient-to-r after:from-pink-400 after:to-purple-400"
              ),

            // PENDING STATE
            isPending && pendingClassName
          )
        }
        {...props}
      />
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };