import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const result = await prisma.books.create({
		data: {
			name: 'Domain Driven-Design'
		}
	});
	console.log(result);
}

(async () => await main())();
