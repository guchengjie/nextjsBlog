import Layout from '../../components/layout';
import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';
import Date from '../../components/date'

export default function Post({ allPostsData }) {
  const { title, id, date, content } = allPostsData;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <ul className={utilStyles.list}>
        <li className={utilStyles.listItem}>
          {title}
          <br />
          {id}
          <br />
          <Date date={date} />
          <br />
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </li>
      </ul>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(query) {
  const {
    params: { id },
  } = query;
  const allPostsData = await getPostData(id);

  return {
    props: {
      allPostsData: allPostsData,
    },
  };
}
