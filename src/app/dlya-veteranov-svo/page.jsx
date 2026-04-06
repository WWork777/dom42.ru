import GoodDeed from "@/components/VeteranPage/GoodDeal/GoodDeed";
import styles from "./page.module.scss";
import Hero from "@/components/VeteranPage/Hero/Hero";
import JoinTeam from "@/components/VeteranPage/JoinTeam/JoinTeam";
import Tasks from "@/components/VeteranPage/Tasks/Tasks";
import WeDo from "@/components/VeteranPage/WeDo/WeDo";
import Contacts from "@/components/Home/Contacts/Contacts";

export default function Page() {
  return (
    <>
      <Hero />
      <Tasks />
      <WeDo />
      <JoinTeam />
      <GoodDeed />
      <Contacts />
    </>
  );
}
