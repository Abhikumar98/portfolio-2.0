import { NotionAPI } from 'notion-client';

export const defaultMapImageUrl = (image = '', block: any) => {
	const url = new URL(
		`https://www.notion.so${
			image.startsWith('/image')
				? image
				: `/image/${encodeURIComponent(image)}`
		}`
	);

	if (block) {
		url.searchParams.set('table', 'block');
		url.searchParams.set('id', block.value.id);
		url.searchParams.set('cache', 'v2');
	}

	return url.toString();
};

export const getNotionData = async () => {
	const notion = new NotionAPI();
	const page = await notion.getPage('94a940c66fac40a98a7eda9a93e74e90');

	const properties: Record<string, string> = {
		projectName: '',
		description: '',
		url: '',
		image: '',
		product_hunt: '',
	};

	Object.entries(Object.values(page.collection)[0].value.schema).forEach(
		([key, value]) => {
			properties[value.name] = key;
		}
	);

	const reverseProperties = Object.fromEntries(
		Object.entries(properties).map(([key, value]) => [value, key])
	);

	const formattedData: any[] = [];

	console.log({ reverseProperties });

	Object.values(page.block).forEach((block) => {
		if (!block.value.properties) {
			return;
		}

		formattedData.push(
			Object.entries(block.value.properties).reduce(
				(final, [key, value]) => {
					const [valueArray] = value as any;
					const [data, imageData] = valueArray;

					final = {
						...final,
						[reverseProperties[key]]: data,
					};

					if (
						imageData?.[0]?.[1] &&
						reverseProperties[key] === 'image'
					) {
						const image = defaultMapImageUrl(
							imageData[0][1],
							block
						);
						(final as Record<string, string>)[
							reverseProperties[key]
						] = image ?? null;
					}

					return final;
				},
				{}
			)
		);
	});

	console.log(formattedData.flat());

	return formattedData;
};
