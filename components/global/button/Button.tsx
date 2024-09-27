import { ForwardReferenceComponent } from "@/types";
import classNames from "classnames";
import React, { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Text value of the button
   */
  text: string;
  /**
   *  Custom text color of the button default `white`
   */
  textColor?: string;
  /**
   *  Whether the button is rounded default `true`
   */
  rounded?: boolean;
  /**
   * background color of button `required`
   */
  backgroundColor: string;
  /**
   * whether text is uppercase default `false`
   */
  uppercase?: boolean;
  /**
   * Other custom classes
   */
  otherClasses?: string;
  /**
   * Icon on the left of the button
   */
  prefixIcon?: React.ReactNode;
  /**
   * Icon on the right of the button
   */
  suffixIcon?: React.ReactNode;
  /**
   * Styles for padding left and right
   */
  paddingX?: string;
  /**
   * Styles for padding top and bottom
   */
  paddingY?: string;

  fontSize?: string;

  bold?: boolean;
}

const CustomButton = forwardRef(function CustomButton(
  {
    backgroundColor,
    textColor = "text-white",
    uppercase = false,
    rounded = true,
    text,
    otherClasses,
    prefixIcon,
    suffixIcon,
    bold = false,
    fontSize = "text-[16px]",
    paddingX = "px-[2rem]",
    paddingY = "py-[0.6rem]",
    as: Component = "button",
    ...rest
  },
  ref,
) {
  return (
    <Component
      className={classNames(
        "custom-button",
        backgroundColor,
        paddingX,
        paddingY,
        fontSize,
        textColor,
        otherClasses,
        {
          uppercase: uppercase,
          "rounded-full": rounded,
          "rounded-lg": !rounded,
          "font-bold": bold,
        },
      )}
      {...rest}
      ref={ref}>
      {prefixIcon ? prefixIcon : null} <span>{text}</span>
      {suffixIcon ? suffixIcon : null}
    </Component>
  );
}) as ForwardReferenceComponent<"button", ButtonProps>;

export default CustomButton;
