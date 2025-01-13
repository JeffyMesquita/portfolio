'use client';

import { cn } from '@/lib/utils';
import { NumberFormatBase } from 'react-number-format';

import {
  createContext,
  forwardRef,
  useContext,
  useImperativeHandle,
  useRef,
  useState,
  type ChangeEvent,
} from 'react';

import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';
import {
  type CurrencyInputProps,
  type TextInputContentProps,
  type TextInputData,
  type TextInputErrorsProps,
  type TextInputIconProps,
  type TextInputInputProps,
  type TextInputLabelProps,
  type TextInputRootProps,
} from './types';

const TextInputContext = createContext<TextInputData>({} as TextInputData);

function TextInputRoot({ children, className }: TextInputRootProps) {
  const [value, setValue] = useState('');

  return (
    <TextInputContext.Provider value={{ setValue, value }}>
      <div className={cn('flex flex-col gap-1', className)}>{children}</div>
    </TextInputContext.Provider>
  );
}

function TextInputLabel({
  description,
  className,
  children,
}: TextInputLabelProps) {
  return (
    <label className={cn('w-full', className)}>
      <Text size="sm" className="mb-1">
        {description}
      </Text>
      {children}
    </label>
  );
}

function TextInputError({ isInvalid, description }: TextInputErrorsProps) {
  if (!isInvalid) {
    return null;
  }

  return <span className="ml-0.5 text-2xs text-red-500">{description}</span>;
}

function TextInputContent({ className, children }: TextInputContentProps) {
  return (
    <div
      className={cn(
        'input-theme flex h-12 w-full items-center gap-3 rounded-md px-4 duration-200 focus-within:ring-2 hover:ring-2',
        className,
      )}
    >
      {children}
    </div>
  );
}

TextInputRoot.displayName = 'TextInput.Root';

const TextInputIcon = forwardRef<HTMLDivElement, TextInputIconProps>(
  ({ ...props }, forwardedRef) => {
    const innerRef = useRef<any>(null);

    useImperativeHandle(forwardedRef, () => innerRef.current);

    return (
      <span
        {...props}
        className="flex items-center justify-center text-blue-600"
        ref={innerRef}
      >
        {props.children}
      </span>
    );
  },
);

TextInputIcon.displayName = 'TextInput.Icon';

function TextInputInput({ register, type, ...rest }: TextInputInputProps) {
  const [typeInput, setTypeInput] = useState(type);

  const { setValue } = useContext(TextInputContext);

  return (
    <>
      {register ? (
        <input
          className="input"
          type={type === 'password' ? typeInput : type}
          {...register.action(register.name, {
            onChange: (event: ChangeEvent<HTMLInputElement>) => {
              setValue(event.target.value);
              if (rest.onChange) {
                rest.onChange(event);
              }
            },
          })}
          {...rest}
        />
      ) : (
        <input
          className="input"
          type={type === 'password' ? typeInput : type}
          {...rest}
        />
      )}
      {type === 'password' && (
        <TextInputIcon>
          {typeInput !== 'password' ? (
            <Icon
              icon="eyeOff"
              size="6"
              className="cursor-pointer fill-stone-400"
              onClick={() => {
                setTypeInput('password');
              }}
            />
          ) : (
            <Icon
              icon="eye"
              size="6"
              className="cursor-pointer fill-transparent stroke-stone-400"
              onClick={() => {
                setTypeInput('text');
              }}
            />
          )}
        </TextInputIcon>
      )}
    </>
  );
}

TextInputInput.displayName = 'TextInput.Input';

const TextInputCurrency = forwardRef<HTMLInputElement, CurrencyInputProps>(
  ({
    className,
    type = 'text',
    name,
    disabled = false,
    onChangeInput,
    currentValue,
    placeholder,
    ...rest
  }) => {
    const error = rest['aria-invalid'];
    const id = name || type;

    const formatCurrencyByEnd = (value: string): string => {
      if (!Number(value)) return '';

      const amount = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
      }).format(parseFloat(value) / 100);

      return `${amount}`;
    };

    return (
      <NumberFormatBase
        format={formatCurrencyByEnd}
        placeholder={placeholder}
        inputMode="numeric"
        displayType="input"
        value={
          !currentValue || !Number(currentValue)
            ? ''
            : Number(currentValue) * 100
        }
        isAllowed={(values) => {
          const { formattedValue, floatValue } = values;
          const isOK =
            formattedValue === '' ||
            (floatValue && floatValue / 100 <= 10000000000);
          return !!isOK;
        }}
        onValueChange={(values) => {
          onChangeInput((parseFloat(values.value) / 100).toFixed(2));
        }}
        disabled={disabled}
        name={name}
        id={id}
        aria-invalid={error}
        className={cn('input', className)}
      />
    );
  },
);

TextInputCurrency.displayName = 'TextInput.Currency';

export const TextInput = {
  Root: TextInputRoot,
  Content: TextInputContent,
  Label: TextInputLabel,
  Input: TextInputInput,
  InputCurrency: TextInputCurrency,
  Icon: TextInputIcon,
  Errors: TextInputError,
};
