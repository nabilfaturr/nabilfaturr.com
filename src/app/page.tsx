import Intro from "@/components/shared/Intro";
import Tabs from "@/components/shared/Tabs";
import { selectedProjects } from "@/constant";

export default function Home() {
  return (
    <section className="">
      <Intro />
      <Tabs />
    </section>
  );
}
