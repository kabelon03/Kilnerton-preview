import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import AdmissionsPage from "@/pages/AdmissionsPage";
import ProgramsPage from "@/pages/ProgramsPage";
import NewsEventsPage from "@/pages/NewsEventsPage";
import GalleryPage from "@/pages/GalleryPage";
import ContactPage from "@/pages/ContactPage";
import StaffPage from "@/pages/StaffPage";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/news-events" element={<NewsEventsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/staff" element={<StaffPage />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;