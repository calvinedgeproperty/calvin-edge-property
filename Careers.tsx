import { useState } from "react";
import { useApp } from "@/contexts/AppContext";
import { t } from "@/lib/i18n";
import { motion } from "framer-motion";
import { toast } from "sonner";

const JOB_LISTINGS = [
  {
    id: "apm-1",
    title: "Assistant Property Management",
    department: "Operations",
    location: "Shanghai, China",
    type: "Full-time",
    responsibilities: [
      "Assist property managers in coordinating housing projects",
      "Maintain communication with clients",
      "Support documentation and operational tasks",
      "Track project milestones and deliverables",
    ],
    qualifications: [
      "Bachelor's degree in business, real estate, or management",
      "Strong communication skills",
      "Highly organized and detail oriented",
      "Proficiency in English and Mandarin preferred",
    ],
  },
  {
    id: "arch-2",
    title: "Modular Design Architect",
    department: "Design",
    location: "Shanghai, China",
    type: "Full-time",
    responsibilities: [
      "Design modular housing concepts and floor plans",
      "Collaborate with engineering team on structural feasibility",
      "Create 3D renderings and design presentations",
      "Research emerging architectural trends in modular construction",
    ],
    qualifications: [
      "Bachelor's or Master's in Architecture",
      "3+ years experience in residential design",
      "Proficiency in AutoCAD, SketchUp, or similar tools",
      "Portfolio showcasing residential or modular projects",
    ],
  },
  {
    id: "sales-3",
    title: "International Sales Manager",
    department: "Sales",
    location: "Dubai, UAE",
    type: "Full-time",
    responsibilities: [
      "Develop and manage international client relationships",
      "Meet sales targets for modular housing products",
      "Represent the company at industry events and expos",
      "Prepare proposals and pricing for international markets",
    ],
    qualifications: [
      "Bachelor's degree in Business or related field",
      "5+ years in international B2B sales",
      "Multilingual ability strongly preferred",
      "Experience in real estate or construction industry",
    ],
  },
  {
    id: "eng-4",
    title: "Structural Engineer",
    department: "Engineering",
    location: "Shanghai, China",
    type: "Full-time",
    responsibilities: [
      "Perform structural analysis for modular building systems",
      "Ensure compliance with international building codes",
      "Collaborate with architects on feasible modular designs",
      "Review and approve fabrication drawings",
    ],
    qualifications: [
      "Bachelor's or Master's in Civil/Structural Engineering",
      "Professional engineer license preferred",
      "Experience with steel and timber frame modular systems",
      "Knowledge of international building standards",
    ],
  },
  {
    id: "pm-5",
    title: "Senior Project Manager",
    department: "Operations",
    location: "London, UK",
    type: "Full-time",
    responsibilities: [
      "Oversee end-to-end delivery of modular housing projects",
      "Manage budgets, timelines, and cross-functional teams",
      "Coordinate with logistics for international shipping of modules",
      "Report project status to stakeholders and leadership",
    ],
    qualifications: [
      "Bachelor's degree in Engineering, Construction, or Business",
      "7+ years project management experience",
      "PMP or PRINCE2 certification preferred",
      "Experience managing international construction projects",
    ],
  },
  {
    id: "mktg-6",
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    responsibilities: [
      "Plan and execute digital marketing campaigns across channels",
      "Manage social media presence and content calendar",
      "Analyze campaign performance and optimize ROI",
      "Create compelling content for modular housing products",
    ],
    qualifications: [
      "Bachelor's degree in Marketing or Communications",
      "3+ years in digital marketing",
      "Experience with SEO, SEM, and analytics tools",
      "Strong copywriting and visual storytelling skills",
    ],
  },
  {
    id: "qa-7",
    title: "Quality Assurance Inspector",
    department: "Manufacturing",
    location: "Shanghai, China",
    type: "Full-time",
    responsibilities: [
      "Inspect modular units at each stage of factory production",
      "Ensure materials and finishes meet quality standards",
      "Document defects and coordinate corrective actions",
      "Conduct final inspections before module dispatch",
    ],
    qualifications: [
      "Diploma or degree in Engineering or Quality Management",
      "2+ years in construction or manufacturing QA",
      "Knowledge of ISO quality standards",
      "Attention to detail and strong documentation skills",
    ],
  },
  {
    id: "cs-8",
    title: "Client Relations Manager",
    department: "Sales",
    location: "Singapore",
    type: "Full-time",
    responsibilities: [
      "Serve as the primary point of contact for high-value clients",
      "Guide clients through the home configuration and purchase process",
      "Resolve client issues and ensure satisfaction throughout the build",
      "Identify upsell and cross-sell opportunities",
    ],
    qualifications: [
      "Bachelor's degree in Business or Hospitality",
      "4+ years in client-facing roles",
      "Experience in luxury real estate or premium services",
      "Excellent interpersonal and problem-solving skills",
    ],
  },
  {
    id: "log-9",
    title: "Logistics Coordinator",
    department: "Operations",
    location: "Shanghai, China",
    type: "Full-time",
    responsibilities: [
      "Coordinate international shipping of modular housing units",
      "Manage customs documentation and import/export compliance",
      "Track shipments and resolve logistics issues",
      "Optimize shipping routes and reduce delivery timelines",
    ],
    qualifications: [
      "Bachelor's degree in Logistics, Supply Chain, or related field",
      "2+ years in international freight or logistics",
      "Familiarity with customs procedures and Incoterms",
      "Proficiency in logistics management software",
    ],
  },
  {
    id: "swe-10",
    title: "Full-Stack Software Engineer",
    department: "Technology",
    location: "Remote",
    type: "Full-time",
    responsibilities: [
      "Build and maintain the modular home configurator platform",
      "Develop internal tools for project management and pricing",
      "Integrate 3D rendering and visualization features",
      "Collaborate with design and product teams on new features",
    ],
    qualifications: [
      "Bachelor's degree in Computer Science or equivalent experience",
      "3+ years full-stack development (React, Node.js, PostgreSQL)",
      "Experience with 3D web technologies (Three.js) is a plus",
      "Strong problem-solving and communication skills",
    ],
  },
];

const Careers = () => {
  const { language } = useApp();
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted successfully! We'll be in touch.");
    setFormData({ name: "", email: "", message: "" });
    setSelectedJob(null);
  };

  const departments = [...new Set(JOB_LISTINGS.map((j) => j.department))];

  return (
    <div>
      <section className="ce-section border-b border-border">
        <div className="ce-container">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <p className="ce-label mb-3">{t("careers.title", language)}</p>
            <h1 className="ce-heading-lg text-foreground mb-4">Build the Future With Us</h1>
            <p className="ce-body max-w-2xl mb-8">Join Calvin Edge Property and help shape the future of modular housing. We're looking for talented individuals who share our vision of efficient, beautiful, and accessible homes.</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: `${JOB_LISTINGS.length}`, label: "Open Positions" },
                { value: `${departments.length}`, label: "Departments" },
                { value: "8+", label: "Office Locations" },
                { value: "50+", label: "Team Members" },
              ].map((stat) => (
                <div key={stat.label} className="text-center py-4 border border-border">
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="ce-label mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="ce-section">
        <div className="ce-container">
          <p className="ce-label mb-6">{JOB_LISTINGS.length} Open Positions</p>

          <div className="space-y-4">
            {JOB_LISTINGS.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="border border-border p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{job.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{job.department} · {job.location} · {job.type}</p>
                  </div>
                  <button
                    onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                    className="self-start border border-primary text-primary px-6 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors flex-shrink-0"
                  >
                    {selectedJob === job.id ? "Close" : t("careers.apply", language)}
                  </button>
                </div>

                {selectedJob === job.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 pt-6 border-t border-border"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="ce-label mb-3">Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((r, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex gap-2">
                              <span className="text-primary mt-1">—</span> {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="ce-label mb-3">Qualifications</h4>
                        <ul className="space-y-2">
                          {job.qualifications.map((q, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex gap-2">
                              <span className="text-primary mt-1">—</span> {q}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
                      <div>
                        <label className="ce-label mb-1.5 block">{t("careers.name", language)}</label>
                        <input
                          type="text"
                          required
                          maxLength={100}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label className="ce-label mb-1.5 block">{t("careers.email", language)}</label>
                        <input
                          type="email"
                          required
                          maxLength={255}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label className="ce-label mb-1.5 block">{t("careers.resume", language)}</label>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="w-full border border-border bg-background px-3 py-2.5 text-sm file:mr-3 file:border-0 file:bg-secondary file:px-3 file:py-1 file:text-xs file:font-medium"
                        />
                      </div>
                      <div>
                        <label className="ce-label mb-1.5 block">Cover Letter</label>
                        <textarea
                          rows={4}
                          maxLength={1000}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="bg-primary text-primary-foreground px-8 py-3 text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity"
                      >
                        {t("careers.submit", language)}
                      </button>
                    </form>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
