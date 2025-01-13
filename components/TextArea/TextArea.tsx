"use client";
import { type ChangeEvent, createContext, useContext, useState } from "react";

import {
  type TextAreaContentProps,
  type TextAreaData,
  type TextAreaErrorsProps,
  type TextAreaInputProps,
  type TextAreaLabelProps,
  type TextAreaRootProps,
} from "./types";
import { cn } from "@/lib/utils";
import { Text } from "../Text/Text";

const TextAreaContext = createContext<TextAreaData>({} as TextAreaData);

function TextAreaRoot({ children, width, className }: TextAreaRootProps) {
  const [value, setValue] = useState("");
  return (
    <TextAreaContext.Provider value={{ setValue, value }}>
      <div
        className={cn("flex flex-col gap-1", className)}
        style={width ? { width } : {}}
      >
        {children}
      </div>
    </TextAreaContext.Provider>
  );
}

TextAreaRoot.displayName = "TextArea.Root";

function TextAreaLabel({
  description,
  className,
  children,
}: TextAreaLabelProps) {
  return (
    <label className={cn("w-full", className)}>
      <Text size="sm">{description}</Text>
      {children}
    </label>
  );
}

TextAreaLabel.displayName = "TextArea.Label";

function TextAreaError({ isInvalid, description }: TextAreaErrorsProps) {
  if (!isInvalid) {
    return null;
  }

  return <span className="ml-0.5 text-2xs text-red-500">{description}</span>;
}

TextAreaError.displayName = "TextArea.Error";

function TextAreaContent({ className, children }: TextAreaContentProps) {
  return (
    <div
      className={cn(
        "textarea-theme rounded-md duration-200 hover:ring-2 focus:ring-2",
        className
      )}
    >
      {children}
    </div>
  );
}

TextAreaContent.displayName = "TextArea.Content";

function TextAreaInput({ className, register, ...rest }: TextAreaInputProps) {
  const { setValue } = useContext(TextAreaContext);
  return (
    <>
      {register ? (
        <textarea
          className={cn("textarea", className)}
          {...(register.action(register.name),
          {
            onChange: (event: ChangeEvent<HTMLTextAreaElement>) => {
              setValue(event.target.value);
              if (rest.onChange) {
                rest.onChange(event);
              }
            },
          })}
          {...rest}
        />
      ) : (
        <textarea className={cn("textarea", className)} {...rest} />
      )}
    </>
  );
}

TextAreaInput.displayName = "TextArea.Input";

export const TextArea = {
  Root: TextAreaRoot,
  Label: TextAreaLabel,
  Error: TextAreaError,
  Content: TextAreaContent,
  Input: TextAreaInput,
};
