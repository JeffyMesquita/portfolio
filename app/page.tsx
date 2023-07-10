import Container from "./Container";
import Navbar from "./Navbar";
import Services from "./Services";

export default function Home() {
  return (
    <main>
      <div className="w-10/12 mx-auto pt-4">
        <Navbar />
      </div>
      <Container />
      <div className="box w-10/12 mx-auto max-md:mt-[-50px] mt-8 mb-[-20px]" />
      <Services />
    </main>
  );
}
