import Layout from '@/components/Layout/Layout';
import Quest from '@/components/Quest';
import { getAllQuests } from '@/lib/questutils';
import { useQuery } from '@tanstack/react-query';

interface PropsType {
	quests: any
}

export default function Home(props: PropsType) {
	const { quests } = props;
	// const { data } = useQuery('quests', getAllQuests, {initialData: quests})

	return (
		<>
			<Layout>
				<Quest quests={quests} />
			</Layout>
		</>
	);
}

export async function getStaticProps() {
	// const questList = await getAllQuests()

	// const getRes = await fetch(`https://dummyjson.com/products?offset=0&limit=10`, {
	// 		method: 'GET',
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		}
	// 	})
	// 		.then((response) => response.json())
	// 		.then((data) => data.products);

	// 	if (getRes.code) {
	// 		throw new Error('An error occurred while fetching the data');
	// 	}

	// 	console.log("questlist=>", getRes)

	// 	const formattedToQuests = getRes.map((quest: any) => {
	// 		return {
	// 			id: quest.id,
	// 			skillTree: quest.category.replace('-', ' '), // 'home-decoration' => 'home decoration'
	// 			skill: quest.brand,
	// 			title: quest.title,
	// 			difficulty: Math.floor(quest.rating),
	// 			experience: quest.stock * 100,
	// 			gold: quest.price,
	// 			type: '-',
	// 			cover: quest.thumbnail
	// 		};
	// 	});

	const questList = [
		{ id : 1, skillTree: 'Solidity', skill: 'Security', title: 'DELLEGATE CALL DETECTION', difficulty: 2, experience: 1200, gold: 6, type: 'build', cover: '/image/cover.png', description: 'Commencing October 1st', reward: { experience: 1200, gold: 6} },
		{ id : 2, skillTree: 'Solidity', skill: 'Security', title: 'DELLEGATE CALL DETECTION', difficulty: 2, experience: 1200, gold: 6, type: 'build', cover: '/image/cover.png', description: 'Commencing October 1st', reward: { experience: 1200, gold: 6} },
		{ id : 3, skillTree: 'Solidity', skill: 'Security', title: 'DELLEGATE CALL DETECTION', difficulty: 2, experience: 1200, gold: 6, type: 'build', cover: '/image/cover.png', description: 'Commencing October 1st', reward: { experience: 1200, gold: 6} },
		{ id : 4, skillTree: 'Solidity', skill: 'Security', title: 'DELLEGATE CALL DETECTION', difficulty: 2, experience: 1200, gold: 6, type: 'build', cover: '/image/cover.png', description: 'Commencing October 1st', reward: { experience: 1200, gold: 6} },
		{ id : 5, skillTree: 'Solidity', skill: 'Security', title: 'DELLEGATE CALL DETECTION', difficulty: 2, experience: 1200, gold: 6, type: 'build', cover: '/image/cover.png', description: 'Commencing October 1st', reward: { experience: 1200, gold: 6} },
		{ id : 6, skillTree: 'Solidity', skill: 'Security', title: 'DELLEGATE CALL DETECTION', difficulty: 2, experience: 1200, gold: 6, type: 'build', cover: '/image/cover.png', description: 'Commencing October 1st', reward: { experience: 1200, gold: 6} }
	]

	return {
		props: {
			quests: questList
		}
	}
}