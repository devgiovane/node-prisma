import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const result = await prisma.modules.create({
		data: {
			name: 'API Restfull',
			description: 'API Restfull with express',
			courses: {
				create: {
					course: {
						connect: {
							id: '578f5390-77df-47c9-a2cb-3da31e5140f0'
						}
					}
				}
			}
		}
	});
	console.log(result);
}

(async () => await main())();
