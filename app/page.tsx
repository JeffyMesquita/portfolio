import Container from "./Container";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div>
      <div className="w-10/12 mx-auto pt-4">
        <Navbar />
      </div>
      <Container />
    </div>
  );
}
