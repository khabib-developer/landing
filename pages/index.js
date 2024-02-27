import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Place from "../components/Place";
import Features from "../components/Features";

export default function Home() {
  return (
    <>
      <SeoHead title="Smart parking system" />
      <Layout>
        <Hero />
        <Place />
        <Features />
      </Layout>
    </>
  );
}
