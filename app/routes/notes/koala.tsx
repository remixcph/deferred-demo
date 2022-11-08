import { defer } from "@remix-run/node";
import { Await, useCatch, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import { getKoalas } from "~/models/koala.server";

export async function loader() {
  return defer({ koala: getKoalas() });
}

export default function KoalaPage() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <Suspense
        fallback={<h3 className="text-2xl font-bold">Loading data...</h3>}
      >
        <Await
          resolve={data.koala}
          errorElement={<p>Error loading package location!</p>}
        >
          {(koala) => (
            <>
              <h3 className="text-2xl font-bold">{koala.name}</h3>
              <p className="py-6">Delay: {koala.delay} ms</p>
              <hr className="my-4" />
              <img src={koala.img} alt={`${koala.name} the koala`} />
            </>
          )}
        </Await>
      </Suspense>
    </div>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return <div>An unexpected error occurred: {error.message}</div>;
}

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return <div>Note not found</div>;
  }

  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}
