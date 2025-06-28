import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <p className="text-black">Still under construction lol.</p>
      </main>
      <Footer />
    </div>
  );
}



