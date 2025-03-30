async function getData() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/about-us`,
      {
        signal: controller.signal,
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status}`);
    }

    const jsonData = await res.json();
    return jsonData.data || [];
  } catch (error) {
    console.error('Error fetching about-us data:', error);
    return { attributes: { heading: '', body: 'Content unavailable' } };
  }
}

export default async function Page() {
  const data = await getData();
  const { heading = '', body = [] } = data || {};

  return (
    <main className={`container w-9/12 mx-auto p-9 text-black h-full`}>
      <h1>{heading}</h1>
      {body &&
        body?.map((markup, idx) => {
          return <p>{markup?.children[0]?.text}</p>;
        })}
    </main>
  );
}
