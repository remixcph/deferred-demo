import { json } from "@remix-run/node";
import { useCatch, useLoaderData } from "@remix-run/react";
import { getKoalas } from "~/models/koala.server";

export async function loader() {
  const koala = await getKoalas();

  return json(
    { koala },
    {
      headers: {
        // max-age controls the browser cache
        // s-maxage controls a CDN cache
        "Cache-Control": "public, max-age=30, s-maxage=86400",
      },
    }
  );
}

export default function KoalaPage() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <h3 className="text-2xl font-bold">{data.koala.name}</h3>
      <p className="py-6">Delay: {data.koala.delay} ms</p>
      <hr className="my-4" />
      <img src={data.koala.img} alt={`${data.koala.name} the koala`} />
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
