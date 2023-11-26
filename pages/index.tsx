import Main from '@/components/main/Main';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { BeersArray } from '@/types/types';

export const getServerSideProps = (async () => {
  const res = await fetch(
    'https://api.punkapi.com/v2/beers?page=2&per_page=80'
  );
  const data = await res.json();
  
  return { props: { data } };
}) satisfies GetServerSideProps<{
  data: BeersArray;
}>;

export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(data);
  return <Main data={data} />;
}
