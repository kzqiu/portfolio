import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsdata = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');

        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterRes = matter(fileContents);
        return {
            id,
            ...matterRes.data,
        };
    });

    return allPostsdata.sort((a, b) => {
        if (a.date > b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);
    const contentHtml = matterResult.content;

    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });
}