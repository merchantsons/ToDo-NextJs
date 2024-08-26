import Image from "next/image";
import Header from "@/components/Header";
import Todo from "@/components/Todo";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Todo />     
      <Footer />
    </div>
  );
}
