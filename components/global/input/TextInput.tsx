import classNames from "classnames";
import { FC, InputHTMLAttributes, ReactNode } from "react";
import { getValidStyle } from "@/utils/isValid";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  /** Title of the input. Used as label */
  label?: string | ReactNode;
  /** Custom class name for textarea element. */
  otherClasses?: string;
  /**
   * Used to control the styling of the field and surrounding elements.
   * Set this value to `false` to show invalid styling.
   * Set this value to `true` to show valid styling.
   */
  isValid?: boolean;
}

export const TextInput: FC<Props> = ({
  label,
  otherClasses,
  isValid,
  ...rest
}) => {
  return (
    <div className="mx-auto flex w-full flex-col">
      {label && <p className="text-lg">{label}</p>}
      <input
        className={classNames("input", getValidStyle(isValid), otherClasses)}
        {...rest}
      />
    </div>
  );
};
