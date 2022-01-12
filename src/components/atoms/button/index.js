import { forwardRef } from "react";
import Ripples from "react-ripples";
import PropTypes from "prop-types";
import Link from "next/link";

const Button = forwardRef(
  (
    {
      color,
      variant,
      size,
      circular,
      iconOnly,
      children,
      type,
      className,
      href,
      filename,
      ...rest
    },
    ref
  ) => {
    switch (color) {
      case "white":
        color = "bg-gray-50 focus:bg-gray-100";
        break;
      case "primary":
        color = "bg-primary-600 focus:bg-opacity-90 focus:outline-0 hover:bg-opacity-90";
        break;
      case "secondary":
        color = "bg-teal-500";
        break;
      case "info":
        color = "bg-sky-500";
        break;
      case "success":
        color = "bg-teal-500";
        break;
      case "warning":
        color = "bg-amber-500";
        break;
      case "error":
        color = "bg-red-500";
        break;
      case "light":
        color = "bg-gray-100";
        break;
      case "dark":
        color = "bg-gray-900";
        break;
      default:
        color = "bg-primary-500";
        break;
    }

    const stackedClassName = `${color} ${variant} ${circular && "rounded-lg"} 
      ${iconOnly} py-2 px-4 text-white w-full text-center text-base font-semibold ${className}`;

    return (
      <Ripples className="w-full shadow-3xl">
        {type === "download" ? (
          <a target="_blank" href={href} {...rest} ref={ref} className={stackedClassName}>
            {children}
          </a>
        ) : type === "link" ? (
          <Link href={href} className={stackedClassName}>
            <a>{children}</a>
          </Link>
        ) : (
          <button {...rest} type={type} ref={ref} className={stackedClassName}>
            {children}
          </button>
        )}
      </Ripples>
    );
  }
);

// Setting default values for the props of MDButton
Button.defaultProps = {
  size: "medium",
  variant: "contained",
  color: "white",
  circular: false,
  iconOnly: false,
};

// Typechecking props for the MDButton
Button.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["text", "contained", "outlined", "gradient"]),
  color: PropTypes.oneOf([
    "white",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  circular: PropTypes.bool,
  iconOnly: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
