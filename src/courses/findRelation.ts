import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const course = await prisma.courses.findMany({
		include: {
			book: true,
			teacher: true,
			modules: true
		}
	});
	console.log(course);
}

(async () => await main())();
