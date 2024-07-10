import { createElement, ElementProps } from "moonly";

/**
 * TYPE: CUSTOM
 * Description: Creates an HTML pre element
 */
export const Pre = (props: ElementProps) => {
	return createElement({
		tag: 'pre',
		...props,
	});
};
