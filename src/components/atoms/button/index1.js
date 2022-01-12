// import { forwardRef } from "react";
// import PropTypes from "prop-types";
// import ButtonRoot from "components/atoms/button/buttonRoot.js";

// // Material Dashboard 2 PRO React contexts
// import { useMaterialUIController } from "context";

// const Button = forwardRef(
//   ({ color, variant, size, circular, iconOnly, children, ...rest }, ref) => {
//     const [controller] = useMaterialUIController();
//     const { darkMode } = controller;

//     return (
//       <ButtonRoot
//         {...rest}
//         ref={ref}
//         color="primary"
//         variant={variant === "gradient" ? "contained" : variant}
//         size={size}
//         ownerState={{ color, variant, size, circular, iconOnly, darkMode }}
//       >
//         {children}
//       </ButtonRoot>
//     );
//   }
// );

// // Setting default values for the props of MDButton
// Button.defaultProps = {
//   size: "medium",
//   variant: "contained",
//   color: "white",
//   circular: false,
//   iconOnly: false,
// };

// // Typechecking props for the MDButton
// Button.propTypes = {
//   size: PropTypes.oneOf(["small", "medium", "large"]),
//   variant: PropTypes.oneOf(["text", "contained", "outlined", "gradient"]),
//   color: PropTypes.oneOf([
//     "white",
//     "primary",
//     "secondary",
//     "info",
//     "success",
//     "warning",
//     "error",
//     "light",
//     "dark",
//   ]),
//   circular: PropTypes.bool,
//   iconOnly: PropTypes.bool,
//   children: PropTypes.node.isRequired,
// };

// export default MDButton;
