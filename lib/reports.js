import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from 'remark';
import remarkHtml from 'remark-html';

const reportsDirectory = path.join(process.cwd(), "reports");

export async function getList() {
  // Get file names under /reports
  const fileNames = fs.readdirSync(reportsDirectory);
  const reportsList = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(reportsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });

  // Sort reports by date
  return reportsList.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getListIds() {
  const fileNames = fs.readdirSync(reportsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getItem(id) {
  const fullPath = path.join(reportsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the report metadata section
  const matterResult = matter(fileContents);
  const content = await remark().use(remarkHtml).process(matterResult.content);

  // Combine the data with the id
  return {
    id,
    ...matterResult.data,
    text: content.toString(),
  };
}
