import About from "@/components/Home/About/About";
import Contacts from "@/components/Home/Contacts/Contacts";
import Form from "@/components/Home/Form/Form";
import Hero from "@/components/Home/Hero/Hero";
import Numbers from "@/components/Home/Numbers/Numbers";
import Preview from "@/components/Home/Preview/Preview";
import Risks from "@/components/Home/Risks/Risks";
import Set from "@/components/Home/Set/Set";
import Stroybat from "@/components/Home/Stroybat/Stroybat";

export default function Home() {
  return (
    <>
      <Hero />
      <Numbers />
      <About />
      <Risks />
      <Preview />
      <Set />
      <Form />
      <Stroybat />
      <Contacts />
    </>
  );
}
