import type { Metadata } from "next";
import {testDatabaseConnection} from '@/api/ping';


export const metadata: Metadata = {
  title: "fitness | Health Check",
  description: "health check description",
};

export default async function HealthCheckPage() {
  const mongoDBStatus = await testDatabaseConnection();
  return (
    <>
      <h1>Health Check</h1>
      <div>
        <p>MongoDB: { mongoDBStatus ? 'Online' : 'Offline' }</p>
      </div>
    </>
  );
}
