"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Download,
  ArrowLeft,
  ExternalLink,
  FileText,
  CheckCircle2,
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Cpu,
  Sparkles,
} from "lucide-react";
import { personalData } from "@/data/portfolioData";

export default function ResumePage() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-sky-500/30 selection:text-sky-200">
      {/* Top Header / Navigation Bar */}
      <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          
          {/* Back to Portfolio Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-sky-400 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </Link>

          {/* Title Tag */}
          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-sky-400 bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full">
            <FileText className="w-3.5 h-3.5" />
            <span>CHATHUSHI JAYARATHNA — RESUME</span>
          </div>

          {/* Download & Raw PDF Actions */}
          <div className="flex items-center gap-3">
            <a
              href="/Chathushi_Jayarathna_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-xs font-mono text-slate-200 hover:text-white hover:border-slate-600 transition-all shadow-md"
            >
              <span>Raw PDF</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <a
              href="/Chathushi_Jayarathna_Resume.pdf"
              download="Chathushi_Jayarathna_Resume.pdf"
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-xs font-mono font-bold text-white shadow-lg shadow-sky-500/25 transition-all hover:scale-105 active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>{downloading ? "Downloading..." : "Download Resume (PDF)"}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Content Container */}
      <div className="flex-1 max-w-7xl mx-auto w-full p-4 sm:p-6 lg:p-8 space-y-8">
        
        {/* Banner Alert with Quick Download Action */}
        <div className="rounded-2xl bg-gradient-to-r from-sky-950/60 via-slate-900 to-purple-950/60 border border-sky-500/30 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-sm sm:text-base font-bold text-white">
                Official Curriculum Vitae — Chathushi Jayarathna
              </h1>
              <p className="text-xs text-slate-300 font-light mt-0.5">
                View the PDF directly in browser or download a copy to your device.
              </p>
            </div>
          </div>

          <a
            href="/Chathushi_Jayarathna_Resume.pdf"
            download="Chathushi_Jayarathna_Resume.pdf"
            className="px-4 py-2 rounded-xl bg-slate-900 border border-sky-400/50 hover:bg-sky-500/20 text-sky-300 text-xs font-mono font-semibold transition-all flex items-center gap-2 shrink-0 shadow-md"
          >
            <Download className="w-3.5 h-3.5" />
            Download PDF File
          </a>
        </div>

        {/* PDF Object Viewer (Desktop & Tablet) */}
        <div className="hidden md:block w-full rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
          <object
            data="/Chathushi_Jayarathna_Resume.pdf#toolbar=1&navpanes=0"
            type="application/pdf"
            className="w-full h-[80vh] rounded-2xl"
          >
            <div className="p-8 text-center space-y-4">
              <p className="text-slate-300">Your browser does not support inline PDF previews.</p>
              <a
                href="/Chathushi_Jayarathna_Resume.pdf"
                download="Chathushi_Jayarathna_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 text-white font-mono text-xs font-bold"
              >
                <Download className="w-4 h-4" /> Download Resume PDF
              </a>
            </div>
          </object>
        </div>

        {/* Digital Interactive Resume Transcript (Mobile & High Contrast View) */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl space-y-8 shadow-2xl">
          
          {/* Resume Header */}
          <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                CHATHUSHI JAYARATHNA
              </h2>
              <p className="text-xs sm:text-sm font-mono text-sky-400 font-semibold mt-1">
                Web Developer • Designer • IT Trainer • AI Enthusiast
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300">
              <a href={`mailto:${personalData.email}`} className="flex items-center gap-1.5 hover:text-sky-300 transition-colors">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                {personalData.email}
              </a>
              <span>•</span>
              <a href={`tel:${personalData.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-1.5 hover:text-sky-300 transition-colors">
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                {personalData.phone}
              </a>
            </div>
          </div>

          {/* Experience Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
              <Briefcase className="w-4 h-4 text-sky-400" />
              Work Experience
            </h3>

            <div className="space-y-6">
              {/* Job 1 */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <div>
                    <span className="font-bold text-white">Key Institute of Digital Success, Sri Lanka</span>
                    <span className="text-sky-400 font-mono text-xs block sm:inline sm:ml-2">Microsoft 365 Admin Trainer</span>
                  </div>
                  <span className="text-xs font-mono text-purple-300">May 2025 – Aug 2026</span>
                </div>
                <ul className="list-disc list-inside text-xs sm:text-sm text-slate-300 space-y-1 pl-1">
                  <li>Delivered training on Microsoft 365 administration, covering user management, security, collaboration, and cloud services.</li>
                  <li>Guided learners through practical exercises and real-world scenarios to develop hands-on Microsoft 365 administration skills.</li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <div>
                    <span className="font-bold text-white">HIP Malaysia</span>
                    <span className="text-sky-400 font-mono text-xs block sm:inline sm:ml-2">Apprentice Software Engineer</span>
                  </div>
                  <span className="text-xs font-mono text-purple-300">Oct 2024 – Jan 2025</span>
                </div>
                <ul className="list-disc list-inside text-xs sm:text-sm text-slate-300 space-y-1 pl-1">
                  <li>Built responsive websites using Webflow, WordPress, and Elementor, integrating CMS, ACF, custom JavaScript, and CSS.</li>
                  <li>Managed dynamic content and GitLab version control, including branching and merging.</li>
                </ul>
              </div>

              {/* Job 3 */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <div>
                    <span className="font-bold text-white">Edelsoft Singapore</span>
                    <span className="text-sky-400 font-mono text-xs block sm:inline sm:ml-2">Apprentice Software Developer</span>
                  </div>
                  <span className="text-xs font-mono text-purple-300">May 2024 – Sep 2024</span>
                </div>
                <ul className="list-disc list-inside text-xs sm:text-sm text-slate-300 space-y-1 pl-1">
                  <li>Developed and customized WordPress themes using PHP and ACF.</li>
                  <li>Collaborated with clients and managed code using GitHub to deliver functional web solutions.</li>
                </ul>
              </div>

              {/* Job 4 */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <div>
                    <span className="font-bold text-white">Cenozai Malaysia</span>
                    <span className="text-sky-400 font-mono text-xs block sm:inline sm:ml-2">Apprentice Frontend Developer</span>
                  </div>
                  <span className="text-xs font-mono text-purple-300">July 2023 – Jan 2024</span>
                </div>
                <ul className="list-disc list-inside text-xs sm:text-sm text-slate-300 space-y-1 pl-1">
                  <li>Developed new features, including referral code implementation, and recommended unit & integration testing.</li>
                  <li>Updated project dependencies and enhanced overall system functionality and performance.</li>
                </ul>
              </div>

              {/* Job 5 */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <div>
                    <span className="font-bold text-white">Ceylon Electricity Board</span>
                    <span className="text-sky-400 font-mono text-xs block sm:inline sm:ml-2">IT Trainee</span>
                  </div>
                  <span className="text-xs font-mono text-purple-300">Jan 2023 – July 2023</span>
                </div>
                <ul className="list-disc list-inside text-xs sm:text-sm text-slate-300 space-y-1 pl-1">
                  <li>Proficient in database management, Microsoft Office, technical support, process documentation, and customer service.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
              <GraduationCap className="w-4 h-4 text-sky-400" />
              Education & Qualifications
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <span className="font-bold text-white block">University of Roehampton, UK</span>
                <span className="text-slate-300 text-xs">BSc (Honors) in Computer Science</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <span className="font-bold text-white block">University of Colombo, Sri Lanka</span>
                <span className="text-slate-300 text-xs">Bachelor of Information Technology (BIT) · Expected July 2028</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <span className="font-bold text-white block">Lithan Academy, Singapore</span>
                <span className="text-slate-300 text-xs">Higher National Diploma in Software Engineering · March 2024</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <span className="font-bold text-white block">Bandarawela Central College</span>
                <span className="text-slate-300 text-xs">G.C.E. A/L (Maths Stream) & G.C.E. O/L (English Medium) · Aug 2020</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <span className="font-bold text-white block">Open University Sri Lanka</span>
                <span className="text-slate-300 text-xs">Human Resources Management · July 2023</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <span className="font-bold text-white block">Open University Sri Lanka</span>
                <span className="text-slate-300 text-xs">Information Communication Technology · July 2017</span>
              </div>
            </div>
          </div>

          {/* Technical Skills Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
              <Cpu className="w-4 h-4 text-sky-400" />
              Technical Skills Summary
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-mono">
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <span className="text-sky-400 font-bold block mb-1">Programming Languages</span>
                <span className="text-slate-200">Java, JavaScript, TypeScript, Python, PHP</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <span className="text-sky-400 font-bold block mb-1">Frontend Development</span>
                <span className="text-slate-200">HTML, CSS, React, Angular, Bootstrap, Tailwind CSS</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <span className="text-purple-300 font-bold block mb-1">Backend & Frameworks</span>
                <span className="text-slate-200">Spring Boot, Spring Security</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <span className="text-purple-300 font-bold block mb-1">Databases & CMS</span>
                <span className="text-slate-200">MySQL, WordPress, Webflow, Microsoft 365, Power Apps</span>
              </div>
            </div>
          </div>

          {/* Bottom Download CTA Bar */}
          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono text-slate-400">
              Need a copy for offline evaluation or HR records?
            </span>
            
            <a
              href="/Chathushi_Jayarathna_Resume.pdf"
              download="Chathushi_Jayarathna_Resume.pdf"
              onClick={handleDownload}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-xs font-mono font-bold text-white shadow-xl shadow-sky-500/20 transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Official Resume PDF</span>
            </a>
          </div>

        </div>

      </div>
    </main>
  );
}
