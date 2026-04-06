export async function getHero() {
  const res = await fetch(`${process.env.STRAPI_URL}/api/hero`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error('Не удалось получить hero из Strapi');
  }

  const json = await res.json();
  return json.data;
}