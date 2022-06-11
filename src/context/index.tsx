import {
	createContext,
	FC,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';

import { applyTheme, appTheme } from '@/utils';

type Theme = 'light' | 'dark';

interface IContext {
	theme: Theme;
	updateTheme: (theme: Theme) => void;
}

const AppContext = createContext<IContext | null>(null);

export const AppContextWrapper: FC<{
	children: ReactNode;
}> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>('light');

	const updateTheme = (value: Theme) => {
		localStorage.setItem('theme', value);
		setTheme(value);
		applyTheme(appTheme[value]);
	};

	const updateInitialTheme = () => {
		const cachedTheme =
			typeof localStorage !== 'undefined' &&
			localStorage.getItem('theme');
		const isDarkTheme = cachedTheme === 'dark';

		const currentTheme = !cachedTheme
			? typeof window !== 'undefined' &&
			  window.matchMedia &&
			  window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light'
			: isDarkTheme
			? 'dark'
			: 'light';
		setTheme(currentTheme);
	};

	useEffect(() => {
		updateInitialTheme();
	}, []);

	return (
		<AppContext.Provider
			value={{
				updateTheme,
				theme,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppState = () => {
	const context = useContext(AppContext);
	if (context === null) {
		throw new Error('useAppState must be used within a AppContextProvider');
	}
	return context;
};
