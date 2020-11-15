import Page from '../../components/Page';
import Date from '../../components/Date';

import { getListIds, getItem } from '../../lib/reports';

export default function ReportPage(props) {
  const { report = {} } = props;

  return (
    <Page
      title={`${report.title} | Reports`}
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/reports", label: "Reports" },
        { label: report.title },
      ]}
    >
      <h1 className="text-xl font-bold">{report.title}</h1>
      <Date value={report.date} className="text-sm text-gray-500" />
      <article className="mt-4" dangerouslySetInnerHTML={{ __html: report.text }} />
    </Page>
  );
}

export async function getStaticPaths() {
  return {
    paths: await getListIds(),
    fallback: false,
  };
}

export async function getStaticProps(req) {
  return { props: { report: await getItem(req.params.id) } };
}
