import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const result = await prisma.courses.update({
		where: { id: '44923401-3482-42ba-97a4-71f7b8080a92' },
		data: {
			duration: 120
		}
	});
	console.log(result);
}

(async () => await main())();

