import Main from '@/components/main/Main';
import type { InferGetServerSidePropsType } from 'next';

import { wrapper } from '@/redux/store';
import { getData } from '@/redux/services/apiBeers';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { page, per_page } = context.query;
    const { data } = await store.dispatch(
      getData.initiate({ page: Number(page), per_page: Number(per_page) })
    );
    return { props: { data } };
  }
);

export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <Main data={data} />;
}
