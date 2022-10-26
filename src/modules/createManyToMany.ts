import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const result = await prisma.coursesModules.create({
		data: {
			course_id: '578f5390-77df-47c9-a2cb-3da31e5140f0',
			module_id: '75cd7820-1f1c-4893-b492-6750b3fbcbd9',
		}
	});
	console.log(result);
}

(async () => await main())();
