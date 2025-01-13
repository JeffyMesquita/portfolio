import React from 'react';

import { Close, Eye, EyeOff, Loader } from './svg/';
import { type Props } from './types';

function GetIconByProp(prop: string) {
	const componentMap: {
		[key: string]: React.FC;
	} = {
		close: Close,
		eye: Eye,
		eyeOff: EyeOff,
		loader: Loader,
	};

	return componentMap[prop];
}

export function DynamicIcon({ icon }: Props) {
	const Component = GetIconByProp(icon);

	if (!Component) {
		return null;
	}

	return <Component />;
}
