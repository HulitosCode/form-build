import { auth, currentUser } from "@clerk/nextjs/server";
import prisma from "./db";

export async function syncUserWithDatabase() {
  try {
    const { userId } = await auth();
    const user = await currentUser();

    if (!userId || !user) {
      console.error("No authenticated user found");
      return null;
    }

    // Upsert user to database
    const dbUser = await prisma.user.upsert({
      where: {
        id: userId,
      },
      update: {
        email: user.emailAddresses[0]?.emailAddress || "",
        username: user.username || user.firstName || "user",
      },
      create: {
        id: userId,
        email: user.emailAddresses[0]?.emailAddress || "",
        username: user.username || user.firstName || "user",
      },
    });
    console.log("user synced with database", dbUser.id);
    return dbUser;
  } catch {
    console.error("Error syncing user with database", error);
    return null;
  }
}
