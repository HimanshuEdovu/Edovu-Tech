import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import DataSecurityHero from "@/components/DataSecurity/DataSecurityHero";
import PrivacyPrinciples from "@/components/DataSecurity/PrivacyPrinciples";
import DataEncryptionSection from "@/components/DataSecurity/DataEncryptionSection";
import UserPermissionSection from "@/components/DataSecurity/UserPermissionSection";
import WebSecuritySection from "@/components/DataSecurity/WebSecuritySection";
// import SecurityBanner from "@/components/DataSecurity/SecurityBanner";

export const metadata = {
  title: "Data Privacy & Security | EdovuTech",
  description:
    "EdovuTech LMS follows ISO 27001 Privacy Information Management System (PIMS) standards with enterprise-grade encryption, role-based access control, and advanced web application security.",
};

export default function DataSecurityPage() {
  return (
    <div className="min-h-screen bg-slate-50">

      <Navbar />

      <main>

        {/* Hero */}
        <DataSecurityHero />

        {/* Privacy Principles */}
        <PrivacyPrinciples />

        {/* Data Encryption */}
        <DataEncryptionSection />

        {/* User Permissions */}
        <UserPermissionSection />

        {/* Web Application Security */}
        <WebSecuritySection />

        {/* Final Trust Banner */}
        {/* <SecurityBanner /> */}

      </main>

      <Footer />

    </div>
  );
}