import StoreCategoryClient from "../../components/StoreCategoryClient";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function StoreCategoryPage({ params }: PageProps) {
  const { slug } = await params;

  return <StoreCategoryClient slug={slug} />;
}
