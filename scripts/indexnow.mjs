// Tells Bing (and other IndexNow search engines) which URLs changed, so they are re-crawled quickly.
// Run after a deploy: npm run indexnow. Reads the URL list from the live sitemap.
const HOST = "www.almaghseel.com";
const KEY = "2627820f9fe72e4348710d24f79c0f27"; // public by design: served at /2627820f9fe72e4348710d24f79c0f27.txt to prove site ownership

const sitemap = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: submitted ${urlList.length} URLs, status ${response.status}`);
if (!response.ok) process.exit(1);
