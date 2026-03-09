import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const Button = ({
  primary,
  secondary,
  disabled,
  children,
  className,
  href,
  onClick,
  type = "button",
}) => {
  const buttonClass = classNames(
    "rounded-full font-coinbase-sans px-8 py-4 text-[15px] font-medium  flex items-center justify-center",
    className,
    {
      "bg-(--primary) hover:bg-blue-700 text-white": primary,
      "bg-black hover:bg-black/80 text-white ": secondary,
      "bg-(--coinbase-gray-1) text-black": disabled,
      "pointer-events-none opacity-70": disabled,
    }
  );

  if (href) {
    const isExternal = /^(https?:\/\/|mailto:|tel:)/.test(href);
    if (isExternal) {
      return (
        <a href={href} className={buttonClass} onClick={onClick} aria-label="button">
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={buttonClass} onClick={onClick} aria-label="button">
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={buttonClass} onClick={onClick} aria-label="button" disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
