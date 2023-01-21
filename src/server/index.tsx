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

class ProjectData {
	projectName = '';
	description = '';
	url = '';
	image = '';
	blockId = '';
	tech = '';
}

export const getNotionData = async () => {
	const notion = new NotionAPI();
	const page = await notion.getPage('94a940c66fac40a98a7eda9a93e74e90');

	const properties: Record<string, string> = {
		projectName: '',
		description: '',
		url: '',
		image: '',
		tech: '',
	};

	Object.entries(Object.values(page.collection)[0].value.schema).forEach(
		([key, value]) => {
			(properties as any)[value.name] = key;
		}
	);

	const reverseProperties = Object.fromEntries(
		Object.entries(properties).map(([key, value]) => [value, key])
	);

	console.log(JSON.stringify(properties, null, 4));

	const formattedData: any[] = [];

	Object.values(page.block).forEach((block) => {
		if (!block.value.properties) {
			return;
		}

		console.log({ block: block.value.id });

		const data: ProjectData = Object.entries(block.value.properties).reduce(
			(final, [key, value]) => {
				const [valueArray] = value as any;
				const [data, imageData] = valueArray;

				final = {
					...final,
					[reverseProperties[key]]: data,
				};

				if (imageData?.[0]?.[1] && reverseProperties[key] === 'image') {
					const image = defaultMapImageUrl(imageData[0][1], block);
					(final as unknown as Record<string, string>)[
						reverseProperties[key]
					] = image ?? null;
				}

				return final;
			},
			new ProjectData()
		);

		data.blockId = block.value.id;

		if (data.url) {
			console.log(JSON.stringify(data, null, 4));
			formattedData.push(data);
		}
	});

	return formattedData;
};
