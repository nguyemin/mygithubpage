import { request } from "../lib/datocms";
import Content from "../components/content";

const HOMEPAGE_QUERY = `query HomePage {
  profile: allUploads(filter: {tags: {eq: "profile"}}) {
    id
    url
  }
  drawings: allUploads(filter: {tags: {eq: "drawing"}}, first: "50") {
    id
    url
  }
  digitalArt: allUploads(filter: {tags: {eq: "digitalart"}}, first: "50") {
    id
    url
  }
  photos: allUploads(filter: {tags: {eq: "photography"}}, first: "50") {
    id
    url
  }
}
`;
export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY
  });
  return {
    props: { data }
  };
}
export default function Home({ data }) {
  console.log(data);
  return (
    <div className="body">
      <Content data={data.drawings} />
      <Content data={data.digitalArt} />
      <Content data={data.photos} />
    </div>
  );
}
