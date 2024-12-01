import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/features/HeroSection';
import { ServicesGrid } from '@/components/features/ServicesGrid';
import { DoctorProfiles } from '@/components/features/DoctorProfiles';
import { AppointmentForm } from '@/components/features/AppointmentForm';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <HeroSection />
        <ServicesGrid />
        <DoctorProfiles />
        <AppointmentForm />
      </main>
      <Footer />
    </>
  );
}