import { prisma } from "@/lib/prisma";

const getUserByEmail = async (email: string) => {
    try {
        const user = await prisma.user.findUnique({
            where: { email },
        });

        return user;
    } catch {
        return null;
    }
};

const getUserById = async (id: string) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id },
        });

        return user;
    } catch {
        return null;
    }
};

export { getUserByEmail, getUserById };
