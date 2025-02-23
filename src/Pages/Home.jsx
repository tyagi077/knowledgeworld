import { NavBar } from "../components/NavBar";
import { Hero } from "../components/Hero";
import { MainContent } from "../components/MainContent";
import { Footer } from "../components/Footer";

export function Home() {
    return <div className="flex flex-col flex-wrap">
        <Hero />
        <MainContent />
     </div>
}