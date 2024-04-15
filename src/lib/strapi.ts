export async function getData(path: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${path}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    next: { revalidate: 3600 },
  });
  return res.json();
}
