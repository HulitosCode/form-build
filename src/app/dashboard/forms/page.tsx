import { auth } from "@clerk/nextjs/server";

const Forms = async () => {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3 font-bold">My Forms</h1>
        <p className="text-gray-500 mt-1">Create and manage your forms</p>
      </div>
      {/* FormList */}
    </div>
  );
};

export default Forms;
