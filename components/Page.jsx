import Head from 'next/head';

import Layout from '../components/Layout';
import Header from '../components/Header';
// import Footer from '../components/Footer';
import Breadcrumbs from './Breadcrumbs';

export default function Page(props) {
  const { title, breadcrumbs, children } = props;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Breadcrumbs items={breadcrumbs} className="mb-2" />

      <section className="prose">
        {children}
      </section>

      {/* <Footer /> */}
    </Layout>
  );
}
