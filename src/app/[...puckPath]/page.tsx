import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPage } from "../../../src/lib/get-page";
import config from "../../../puck.config";
import { Render } from "@measured/puck";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ puckPath: string[] }>;
}): Promise<Metadata> {
  const { puckPath = [] } = await params;
  const path = `/${puckPath.join("/")}`;

  return {
    title: getPage(path)?.root.props?.title,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ puckPath: string[] }>;
}) {
  const { puckPath = [] } = await params;
  const path = `/${puckPath.join("/")}`;
  console.log({path});
  
  const data = getPage(path);
  if (!data) {
    return notFound();
  }

  
  return <Render data={data} config={config as any} />;
}

