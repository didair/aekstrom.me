import { createElement, ElementProps } from "moonly";

/**
 * TYPE: CUSTOM
 * Description: Creates an HTML header element
 */
export const Header = (props: ElementProps) => {
	return createElement({
		tag: 'header',
		...props,
	});
};
