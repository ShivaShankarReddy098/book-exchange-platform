"use client";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Dashboard() {
  const { user } = useUser();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Welcome, {user?.fullName}!</h1>
        <UserButton />
      </div>
    </div>
  );
}
