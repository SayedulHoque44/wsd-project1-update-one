export default function OrderDetailsPage({
  params,
}: {
  params: { orderId: string };
}) {
  return <h1>Order Details Page, order no: {params?.orderId}</h1>;
}
