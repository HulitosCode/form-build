import React from "react";
import Header from "./_components/header";
import { auth } from "@clerk/nextjs/server";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto p-4">{children}</main>
    </div>
  );
};
export default DashboardLayout;
