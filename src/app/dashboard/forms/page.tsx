import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import FormList from "./create/_components/form-list";

const Forms = async () => {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();

  const forms = await prisma.form.findMany({
    where: {
      userId,
    },
    include: {
      _count: {
        select: {
          responses: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3 font-bold">My Forms</h1>
        <p className="text-gray-500 mt-1">Create and manage your forms</p>
      </div>
      <FormList forms={forms} />
    </div>
  );
};

export default Forms;
