export default async function getArticles() {
  const options = {
    next: { revalidate: 3600, tags: ['articles'] }
  }
  const res = await fetch('https://65f789eeb4f842e80885adeb.mockapi.io/porto/v1/articles', options);
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  
  return res.json();
}

