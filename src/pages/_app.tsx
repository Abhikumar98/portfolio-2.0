import { AppProps } from 'next/app';

import '@/styles/globals.css';
import 'react-notion-x/src/styles.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import MetaHead from '@/components/Metahead';
import Wrapper from '@/components/Wrapper';

import { AppContextWrapper } from '@/context';
import { appTheme, Theme } from '@/utils';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AppContextWrapper>
			<Wrapper>
				<MetaHead />
				<Theme theme={appTheme.light} />
				<Component {...pageProps} />
			</Wrapper>
		</AppContextWrapper>
	);
}

export default MyApp;
