import { Button } from "@/components/ui/button";
import { syncUserWithDatabase } from "@/lib/clerk-sync";
import Link from "next/link";

const Dashboard = async () => {
  await syncUserWithDatabase();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Welcome Helton</h1>
        <p className="text-gray-500 mt-1">Manage your forms and responses</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="bg-white rounded-lg shadow p-6 border">
          <h2 className="text-xl font-medium">Your Forms</h2>
          <p className="text-3x font-bold mt-2">12</p>
          <Button className="mt-4" asChild>
            <Link href="/dashboard/forms">View All Forms</Link>
          </Button>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border">
          <h2 className="text-xl font-medium">Total Responses</h2>
          <p className="text-3x font-bold mt-2">100</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border">
          <h2 className="text-xl font-medium">Create New</h2>
          <p className="text-gray-500 mt-2">Start Building a new form</p>
          <Button className="mt-4" asChild>
            <Link href="/dashboard/forms/create">Create forms</Link>
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 border">
        <h2 className="text-xl font-medium mb-4">Recent Forms</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b pb-4">
            <div>
              <h3 className="font-medium">This is title</h3>
              <p>Responses . Created on 21 April 2025</p>
            </div>
            <div className="flex gap-2">
              <Button>
                <Link href={`/dashboard/forms/123`}>View</Link>
              </Button>
              <Button>
                <Link href={`/dashboard/forms/123/responses`}>Responses</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
