import { json } from "@remix-run/node";
import { getKoalas } from "~/models/koala.server";

export async function loader() {
  const koala = await getKoalas();

  return json({ koala });
}

export type loaderType = typeof loader;
