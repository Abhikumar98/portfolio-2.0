import { CollectionPropertySchemaMap, ExtendedRecordMap } from 'notion-types';

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

export class ProjectData {
	projectName = '';
	description = '';
	url = '';
	image = '';
	blockId = '';
	tech = '';
	producthunt = '';
	trophy = '';
}

export const getPageProperties = (schema: CollectionPropertySchemaMap) => {
	const properties: Record<string, string> = {
		projectName: '',
		description: '',
		url: '',
		image: '',
		tech: '',
	};

	Object.entries(schema).forEach(([key, value]) => {
		properties[value.name] = key;
	});

	const reverseProperties = Object.fromEntries(
		Object.entries(properties).map(([key, value]) => [value, key])
	);

	return { reverseProperties };
};

export const getNotionData = (
	page: ExtendedRecordMap,
	schema: CollectionPropertySchemaMap,
	blockId?: string
) => {
	const { reverseProperties } = getPageProperties(schema);

	const formattedData: ProjectData[] = [];

	const allBlocks = blockId
		? [page.block[blockId]]
		: Object.values(page.block);

	allBlocks.forEach((block) => {
		if (!block.value.properties) {
			return;
		}

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
			formattedData.push(data);
		}
	});

	return formattedData;
};
