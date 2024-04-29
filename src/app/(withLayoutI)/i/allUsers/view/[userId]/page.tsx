export default function Page({ params }: { params: { userId: string } }) {
  return <h1>My Page {params?.userId}</h1>;
}
