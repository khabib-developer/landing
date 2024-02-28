import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Place from "../components/Place";
import Features from "../components/Features";
import { About } from "../components/About";

export default function Home() {
  return (
    <>
      <SeoHead title="Smart parking system" />
      <Layout>
        <Hero />
        <About />
        <Place />
        <Features />
      </Layout>
    </>
  );
}
