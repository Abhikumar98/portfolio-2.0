export interface ITheme {
	primaryColor: string;
	secondaryColor: string;
	backgroundColor: string;
	link: string;
}

export const appTheme: { light: ITheme; dark: ITheme } = {
	light: {
		primaryColor: '#23477d',
		secondaryColor: '#38578A',
		backgroundColor: '#ffffff',
		link: '#37465f',
	},
	dark: {
		primaryColor: '#fffffe',
		secondaryColor: '#b8c1ec',
		backgroundColor: '#232946',
		link: '#ffffff',
	},
};

export const Theme = ({ theme }: { theme: Partial<ITheme> }) => {
	const customTheme = `
	:root{
		--primaryColor: ${theme['primaryColor']};
		--secondaryColor: ${theme['secondaryColor']};
		--backgroundColor: ${theme['backgroundColor']};
		--link: ${theme['link']};
	}
	`;

	return <style>{customTheme}</style>;
};

export const applyTheme = (theme: ITheme) => {
	Object.entries(theme).forEach(([key, value]) => {
		(document.querySelector(':root') as any)?.style?.setProperty(
			`--${key}`,
			value
		);
	});
};
