import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";

export function AppLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar title={"WorldAtlas"} link2={"About"} link3={"Country"} />
            <div className="flex-grow">
            <Outlet />
            </div>
            <Footer />
            <NavBar title={"Copyright 2024. All Right Reserved"} link2={"Social"} link3={"Source Code"} />

        </div>
    )
}