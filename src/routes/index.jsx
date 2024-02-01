import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import RelocateBuyPage from "../pages/RelocateBuyPage";
import RelocateBuildPage from "../pages/RelocateBuildPage";
import RelocatePrefabPage from "../pages/RelocatePrefabPage";
import ResourcesPage from "../pages/ResourcesPage";
import MediaPage from "../pages/MediaPage";
import About from "../pages/About";
import Impact from "../pages/Impact";
import MembersPage from "../pages/MembersPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import TermsConditionsPage from "../pages/TermsConditionsPage";
import BlogItemPage from "../pages/BlogItemPage";
import BlogPage from "../pages/BlogPage";
import EarlyBird from "../pages/EarlyBird";
import { useEffect } from "react";
import AppTermsConditionsPage from "../pages/AppTermsConditionsPage copy";
import CommonPrivacyPolicyTermsConditions from "../pages/CommonPrivacyPolicyTermsConditions";
import AppPrivacyPolicyPage from "../pages/AppPrivacyPolicyPage";
import ResultHouses from "../pages/ResultHouses";
import ListingDetailsPage from "../pages/ListingDetailsPage";
import Layout from "../components/Layout";

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return <>{children}</>;
};

const RoutesApp = () => {
  return (
    <ScrollToTop>
      <Layout>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/relocate/buy" element={<RelocateBuyPage />} />
        <Route path="/relocate/build" element={<RelocateBuildPage />} />
        <Route path="/relocate/prefab" element={<RelocatePrefabPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/resources/:id" element={<BlogPage />} />
        <Route path="/resources/:category/:id" element={<BlogItemPage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/impact" element={<Impact />} />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/app-privacy-policy" element={<AppPrivacyPolicyPage />} />
        <Route path="/terms-and-conditions/:id" element={<TermsConditionsPage />} />
        <Route path="/app-terms-and-conditions/:id" element={<AppTermsConditionsPage />} />
        <Route path="/app-terms-and-conditions" element={<CommonPrivacyPolicyTermsConditions />} />
        <Route path="/early-bird-discount" element={<EarlyBird />} />
        <Route path="/marketplace" element={<ResultHouses />} />
        <Route path="/listing-details/:id" element={<ListingDetailsPage />} />
      </Routes>
      </Layout>
    </ScrollToTop>
  );
};

export default RoutesApp;
