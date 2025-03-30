import styles from './about-us.module.scss';

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/about-us`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const jsonData = await res.json();
  return jsonData.data || [];
}

export default async function Page() {
  const data = await getData();
  const { heading, body } = data.attributes;
  const markup = { __html: body };

  return (
    <main className={`container w-9/12 mx-auto p-9 text-black h-full`}>
      <div
        className={styles['body']}
        dangerouslySetInnerHTML={markup}
      />
    </main>
  );
}
