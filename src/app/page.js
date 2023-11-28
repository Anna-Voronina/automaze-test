import { AddToDoForm } from "@/components/AddToDoForm/AddToDoForm";
import { PageWrapper } from "@/components/PageWrapper/PageWrapper";

export default async function Home({ searchParams }) {
  const searchQuery = searchParams?.search || "";
  const sortOrder = searchParams?.sort || "asc";
  const status = searchParams?.status || "all";

  const params = {
    searchQuery,
    sortOrder,
  };

  if (status && status !== "all") {
    const completed = status === "done" ? true : false;
    params.completed = completed;
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center gap-8">
      <AddToDoForm />
      <PageWrapper params={params} />
    </main>
  );
}
