"use client";
import Footer from "./components/Footer";
import SkincareIntro from "./components/skincareintro";
import SkincareBenefits from "./components/skincarebenefits";
import ProductShowcase from "./components/ProductShowcase";
import ProductDisplay from "./components/ProductDisplay";
import FAQSectionWithImage from "./components/FAQSectionWithImage";
import BeautyBanner from "./components/Beautybanner";
import Landing from "./components/Landing";

export default function Home() {
  return (
    <>
    <div className="bg-[#EFF5E1]">

    {/* <Navbar></Navbar> */}
    <Landing></Landing>
    <SkincareIntro></SkincareIntro>
    <SkincareBenefits></SkincareBenefits>
    <ProductShowcase></ProductShowcase>
    <BeautyBanner></BeautyBanner>
    <ProductDisplay></ProductDisplay>
    <FAQSectionWithImage></FAQSectionWithImage>
    <Footer></Footer>
    </div>
    </>
  );
}
