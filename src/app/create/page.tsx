import { redirect } from "next/navigation";
import { getServerAuthSession } from "~/server/auth";
import { CreateForm } from "./_components/createForm";

export default async function Home() {
  const session = await getServerAuthSession();
  if (!session) redirect("/api/auth/signin");

  return (
    <CreateForm />
  )
}
