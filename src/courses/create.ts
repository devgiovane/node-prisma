import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const result = await prisma.courses.create({
		data: {
			name: 'Node Course',
			description: 'Node Course',
			duration: 300,
			teacher: {
				connect: {
					id: '20e924c7-8820-40a2-aefd-d935dabe65cc'
				}
			},
			book: {
				connect: {
					id: 'da78501f-0dee-4dea-9dbf-fa24d27b722a'
				}
			}
		}
	});
	console.log(result);
}

(async () => await main())();
