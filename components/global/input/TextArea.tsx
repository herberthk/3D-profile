import classNames from "classnames";
import { FC, ReactNode, TextareaHTMLAttributes } from "react";
import { getValidStyle } from "@/utils/isValid";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Title of textarea. Used as label */
  label?: ReactNode;
  /** Description block shown below the textarea. */
  message?: ReactNode;
  /** Custom class name for root label element. */
  className?: string;
  /**
   * Used to control the styling of the field and surrounding elements.
   * Set this value to `false` to show invalid styling.
   * Set this value to `true` to show valid styling.
   */
  isValid?: boolean;
  /** Disable textarea behavior */
  disabled?: boolean;
  /**
   * Allow resizing
   *
   * @default true
   */
  resizeable?: boolean;
  /** Custom class name for textarea element. */
  inputClassName?: string;
}

const TextArea: FC<TextAreaProps> = ({
  label,
  inputClassName,
  isValid,
  ...rest
}) => {
  return (
    <div className="mx-auto flex w-full flex-col">
      {label && <p className="text-lg">{label}</p>}
      <textarea
        className={classNames("input", getValidStyle(isValid), inputClassName)}
        {...rest}
      />
    </div>
  );
};

export default TextArea;
