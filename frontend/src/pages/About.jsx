import React from 'react';
import Navbar from '../components/Navbar';
import { Target, CheckCircle2, ShieldCheck, Globe, Zap } from 'lucide-react';

const About = () => {

    const objectives = [
        {
            title: "Direct Benefit Transfer (DBT)",
            desc: "Ensure 100% timely disbursement of scholarships directly to validated beneficiaries without intermediary leakage.",
            icon: Zap
        },
        {
            title: "Unified Database Architecture",
            desc: "Create a centralized, transparent registry of all scholarship schemes and beneficiaries across different departments.",
            icon: Globe
        },
        {
            title: "Aadhaar-Based Authentication",
            desc: "Eliminate duplication and systemic fraud through mandatory cryptographic demographic verification protocols.",
            icon: ShieldCheck
        },
        {
            title: "Scheme Harmonization",
            desc: "Consolidate divergent scholarship policies under a single operational umbrella for streamlined public access.",
            icon: Target
        },
        {
            title: "Real-Time Tracking",
            desc: "Provide instantaneous status telemetry for applications affecting both student transparency and administrative oversight.",
            icon: CheckCircle2
        }
    ];

    return (
        <div className="min-vh-100 bg-light text-dark position-relative overflow-hidden d-flex flex-column">
            <Navbar />

            {/* Background Details - approximated with inline styles since Bootstrap lacks these exact utility blurs/gradients out-of-the-box */}
            <div className="position-absolute top-0 w-100 h-100" style={{ zIndex: -1 }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '400px', background: 'linear-gradient(to bottom, rgba(226, 232, 240, 0.5), transparent)' }}></div>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '600px', height: '600px', background: 'rgba(219, 234, 254, 0.3)', borderRadius: '50%', filter: 'blur(100px)', transform: 'translate(-33%, -50%)' }}></div>
            </div>

            <main className="flex-grow-1 w-100 mx-auto px-3 py-5" style={{ maxWidth: '1000px' }}>
                <div className="card border-0 shadow-sm rounded-4 overflow-hidden position-relative fade-in-up">
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '256px', height: '256px', background: 'linear-gradient(to bottom left, #eff6ff, transparent)', zIndex: 0, opacity: 0.7 }}></div>

                    <div className="card-body p-4 p-md-5 p-lg-5 position-relative" style={{ zIndex: 1 }}>
                        <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-4 mb-5 pb-4 border-bottom">
                            <div>
                                <h1 className="display-4 fw-bolder mb-2" style={{ color: '#0f172a', letterSpacing: '-0.025em' }}>About Us</h1>
                                <p className="text-secondary fw-bold text-uppercase small mb-0" style={{ letterSpacing: '0.1em', fontSize: '0.75rem' }}>Platform Telemetry & Architecture</p>
                            </div>
                            <div className="rounded-3 d-flex align-items-center justify-content-center shadow-sm" style={{ width: '64px', height: '64px', backgroundColor: '#eff6ff', border: '1px solid #dbeafe', color: '#2563eb' }}>
                                <Globe size={32} />
                            </div>
                        </div>

                        <div className="row g-5 align-items-start mb-5 pb-3">
                            <div className="col-lg-6">
                                <p className="lead text-secondary fw-medium mb-4" style={{ lineHeight: '1.8' }}>
                                    The <strong style={{ color: '#1e3a8a' }}>Smart Scholarship Portal</strong> is a state-of-the-art digital infrastructure conceptualized to revolutionize the administration and disbursal of educational grants. Recognizing systemic structural barriers, this platform acts as the definitive bridge connecting verified institutional funds with deserving candidates.
                                </p>
                                <p className="text-secondary" style={{ lineHeight: '1.8' }}>
                                    Our operational architecture integrates cryptographic verification mechanisms to guarantee precise capital allocation. By migrating the entire procedural lifecycle online, we have systematically eliminated redundant paperwork and physical friction points, allowing applicants to focus entirely on their scholastic endeavors.
                                </p>
                            </div>

                            <div className="col-lg-6">
                                <div className="rounded-4 overflow-hidden shadow border position-relative" style={{ aspectRatio: '1/1' }}>
                                    <img
                                        src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="Students Studying"
                                        className="w-100 h-100 object-fit-cover"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.insertAdjacentHTML('afterbegin', '<div class="w-100 h-100 d-flex align-items-center justify-content-center bg-light text-secondary fw-bold text-uppercase small" style={{letterSpacing: "0.1em"}}>Image Unavailable</div>');
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="d-flex align-items-center gap-3 mb-4">
                                <div className="rounded-pill" style={{ width: '4px', height: '32px', backgroundColor: '#2563eb' }}></div>
                                <h2 className="h3 fw-bold text-dark mb-0" style={{ letterSpacing: '-0.025em' }}>Core Operational Objectives</h2>
                            </div>

                            <div className="row g-4">
                                {objectives.map((obj, idx) => (
                                    <div key={idx} className={`col-md-6 ${idx === objectives.length - 1 ? 'col-md-8 mx-auto' : ''}`}>
                                        <div className="card h-100 bg-light border p-4 rounded-4 transition-all hover-shadow">
                                            <div className="d-flex align-items-start gap-3">
                                                <div className="rounded-3 bg-white border d-flex align-items-center justify-content-center flex-shrink-0 text-secondary transition-all icon-wrapper" style={{ width: '40px', height: '40px' }}>
                                                    <obj.icon size={18} strokeWidth={2} />
                                                </div>
                                                <div>
                                                    <h3 className="h6 fw-bold text-dark mb-2 text-uppercase title-wrapper" style={{ letterSpacing: '0.025em', fontSize: '0.875rem' }}>{obj.title}</h3>
                                                    <p className="small text-secondary fw-medium mb-0" style={{ lineHeight: '1.6' }}>{obj.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                .fade-in-up { animation: fadeInUp 0.6s ease-out forwards; opacity: 0; }
                .transition-all { transition: all 0.3s ease; }
                .hover-shadow:hover { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important; border-color: #bfdbfe !important; }
                .hover-shadow:hover .icon-wrapper { transform: scale(1.1); border-color: #bfdbfe !important; color: #2563eb !important; }
                .hover-shadow:hover .title-wrapper { color: #1e3a8a !important; }
            `}} />
        </div>
    );
};

export default About;
