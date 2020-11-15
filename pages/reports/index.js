import Link from 'next/link';
import Page from '../../components/Page';
import Date from '../../components/Date';

import { getList } from '../../lib/reports';

export default function ReportsPage(props) {
  const { reports = [] } = props;

  return (
    <Page title="Owlbeary | Reports" breadcrumbs={[
      { href: '/', label: 'Home' },
      { label: 'Reports' },
    ]}>
      <h1 className="text-xl font-bold">Reports</h1>
      <ul className="mt-4">
        {reports.map((report) => (
          <li key={report.id} className="py-1">
            <Link href={`/reports/${report.id}`}>
              <a className="block text-lg text-blue-500">{report.title}</a>
            </Link>
            <Date value={report.date} className="text-sm text-gray-500" />
          </li>
        ))}
      </ul>
    </Page>
  );
}

export async function getStaticProps() {
  return { props: { reports: await getList() } };
}
