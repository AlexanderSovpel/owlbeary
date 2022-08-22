import Page from '../../components/Page';
import MarkdownEditor from '../../components/MarkdownEditor';

export default function NewReportPage(props) {
  return (
    <Page
      title={`New Report | Reports`}
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/reports", label: "Reports" },
        { label: "New" },
      ]}
    >
      <h1 className="text-xl font-bold">New Report</h1>

      <form
        action="/api/reports"
        method="post"
      >
        <fieldset>
          <div>
            <label htmlFor="reportId">ID</label>
            <input id="reportId" name="id" />
          </div>

          <div>
            <label htmlFor="reporter">Reporter</label>
            <select id="reporter" name="reporter">
              <option value="" disabled>Select reporter</option>
            </select>
          </div>

          <div>
            <label htmlFor="reportTitle">Title</label>
            <input id="reportTitle" name="title" />
          </div>

          <div>
            <label htmlFor="reportDate">Date</label>
            <input type="date" id="reportDate" name="date" />
          </div>

          <div>
            <label htmlFor="reportText">Content</label>
            <MarkdownEditor id="reportText" name="text" />
          </div>
        </fieldset>

        <button type="submit">Save</button>
      </form>
    </Page>
  );
}
