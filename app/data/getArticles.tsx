export default async function getArticles() {
    const res = await fetch('https://65f789eeb4f842e80885adeb.mockapi.io/porto/v1/articles');
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
    return res.json();
}

