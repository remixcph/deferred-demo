import { useCatch, useFetcher } from "@remix-run/react";
import { useEffect } from "react";
import type { loaderType } from "../api/koala";

export default function KoalaPage() {
  const fetcher = useFetcher<loaderType>();

  useEffect(() => {
    if (fetcher.state === "idle" && !fetcher.data) {
      fetcher.load("/api/koala");
    }
  }, [fetcher.state, fetcher.data, fetcher]);

  if (fetcher.data) {
    const koala = fetcher.data.koala;

    return (
      <div>
        <h3 className="text-2xl font-bold">{koala.name}</h3>
        <p className="py-6">Delay: {koala.delay} ms</p>
        <hr className="my-4" />
        <img src={koala.img} alt={`${koala.name} the koala`} />
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-2xl font-bold">Loading...</h3>
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
