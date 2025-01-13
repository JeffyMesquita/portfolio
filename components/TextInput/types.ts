/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from 'react';
import {
	type InputHTMLAttributes,
	type ReactNode,
	type SetStateAction,
} from 'react';
import { type UseFormRegister } from 'react-hook-form';

interface TextInputData {
	setValue: (value: SetStateAction<string>) => void;
	value: string;
}

interface TextInputRootProps {
	children: ReactNode;
	className?: string;
}

interface TextInputLabelProps {
	description: string;
	className?: string;
	children: ReactNode;
}

interface TextInputErrorsProps {
	isInvalid: boolean;
	description?: string;
}

interface TextInputContentProps {
	className?: string;
	children: ReactNode;
}

type TextInputIconProps = React.ComponentPropsWithoutRef<any> & {
	children: ReactNode;
};

interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {
	register?: {
		action: UseFormRegister<any>;
		name: string;
	};
}

interface CurrencyInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	onChangeInput(value: any): void;
	currentValue?: string | number;
	register?: {
		action: UseFormRegister<any>;
		name: string;
	};
}

interface MaskedInputCurrencyFormat
	extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	register?: {
		action: UseFormRegister<any>;
		name: string;
	};
	onChangeInput(value: any): void;
	currentValue?: string | number;
}

export type {
	CurrencyInputProps,
	MaskedInputCurrencyFormat,
	TextInputContentProps,
	TextInputData,
	TextInputErrorsProps,
	TextInputIconProps,
	TextInputInputProps,
	TextInputLabelProps,
	TextInputRootProps,
};
