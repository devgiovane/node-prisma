import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const result = await prisma.coursesModules.delete({
		where: {
			id: 'd0c6253d-59c1-48eb-8957-096992451117'
		}
	});
	console.log(result);
}

(async () => await main())();
