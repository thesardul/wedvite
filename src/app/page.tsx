import Image from "next/image";
import Navigation from "./navigation";
import WeddingPage from "./wedding";

export default function Home() {
  return (
    <div>
      <Navigation/>
      <WeddingPage/>
    </div>
  );
}
