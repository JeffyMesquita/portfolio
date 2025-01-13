import { createMask } from 'imask';

const cpfMask = (value: string): string => {
	const cpfFormat = createMask({ mask: '000.000.000-00' });
	if (cpfFormat.resolve(value)?.length !== 0) return cpfFormat.resolve(value);

	return '';
};

const cnpjMask = (value: string): string => {
	const cnpjFormat = createMask({ mask: '00.000.000/0000-00' });
	if (cnpjFormat.resolve(value)?.length !== 0) return cnpjFormat.resolve(value);

	return '';
};

const phoneMask = (value: string): string => {
	const phoneFormat = createMask({ mask: '(00) 00000-0000' });
	if (phoneFormat.resolve(value)?.length !== 0) {
		return phoneFormat.resolve(value);
	}

	return '';
};

const phoneMaskTwo = (value: string): string => {
	const phoneFormat = createMask({ mask: '(00) 0000-0000' });
	if (phoneFormat.resolve(value)?.length !== 0) {
		return phoneFormat.resolve(value);
	}

	return '';
};

const applyPhoneMask = (value: string) => {
	// Remove caracteres não numéricos
	const cleanValue = value.replace(/\D/g, '');

	// Define o comprimento máximo do número
	const maxLength = 11;

	// Trunca o valor limpo ao comprimento máximo permitido
	const truncatedValue = cleanValue.slice(0, maxLength);

	// Aplica a máscara de acordo com o comprimento do valor truncado
	if (truncatedValue.length > 10) {
		// Formato (00) 00000-0000
		return truncatedValue.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
	} else if (truncatedValue.length > 6) {
		// Formato (00) 0000-0000
		return truncatedValue.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
	} else if (truncatedValue.length > 2) {
		// Formato parcial (00) 0000
		return truncatedValue.replace(/^(\d{2})(\d{0,4})/, '($1) $2');
	} else if (truncatedValue.length > 0) {
		// Formato parcial (00)
		return truncatedValue.replace(/^(\d{0,2})/, '($1');
	} else {
		return '';
	}
};

const unmask = (value: string): string => value.replace(/[^0-9]/g, '');

export const MaskProvider = {
	cpf: cpfMask,
	cnpj: cnpjMask,
	unmask,
	phone: phoneMask,
	phoneTwo: phoneMaskTwo,
	applyPhoneMask,
};
