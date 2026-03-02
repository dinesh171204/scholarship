import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const defaultSchemes = [
    {
        _id: 'default-1',
        name: "Merit-Cum-Means Scholarship for Professional Courses",
        description: "Provide financial assistance to the poor and meritorious students belonging to minority communities to enable them to pursue professional and technical courses.",
        amount: 25000,
        deadline: new Date("2026-12-31").toISOString(),
        eligibility: "Students with minimum 50% marks in previous examination and family income below 2.5 Lakhs."
    },
    {
        _id: 'default-2',
        name: "Post Matric Scholarships Scheme for Minorities",
        description: "Scholarships to students studying in class XI, XII including technical and vocational courses, PhD etc.",
        amount: 15000,
        deadline: new Date("2026-10-31").toISOString(),
        eligibility: "Must have secured not less than 50% marks or equivalent grade in the previous final examination."
    },
    {
        _id: 'default-3',
        name: "Central Sector Scheme of Scholarships",
        description: "To provide financial assistance to meritorious students from low income families to meet a part of their day-to-day expenses while pursuing higher studies.",
        amount: 12000,
        deadline: new Date("2026-11-15").toISOString(),
        eligibility: "Students who are above 80th percentile of successful candidates in the relevant stream."
    },
    {
        _id: 'default-4',
        name: "AICTE - Pragati Scholarship Scheme for Girl Students",
        description: "Scheme being implemented by AICTE aimed at providing assistance for advancement of Girls pursuing Technical Education.",
        amount: 50000,
        deadline: new Date("2026-09-30").toISOString(),
        eligibility: "Girl students admitted to first year of Degree/Diploma level course or second year of Degree/Diploma level course through lateral entry."
    },
    {
        _id: 'default-5',
        name: "National Means Cum Merit Scholarship",
        description: "To award scholarships to meritorious students of economically weaker sections to arrest their drop out at class VIII and encourage them to continue the study at secondary stage.",
        amount: 12000,
        deadline: new Date("2026-08-31").toISOString(),
        eligibility: "Students whose parental income from all sources is not more than Rs. 3,50,000/- per annum are eligible."
    },
    {
        _id: 'default-6',
        name: "Pre-Matric Scholarship Scheme for SC Students",
        description: "To support parents of SC children for education of their wards studying in classes IX and X so that the incidence of drop-out is minimized.",
        amount: 3000,
        deadline: new Date("2026-07-31").toISOString(),
        eligibility: "Student should belong to Scheduled Caste. His/her Parent/Guardian's income should not exceed Rs. 2.50 lakh per annum."
    }
];

const Schemes = () => {
    const [schemes, setSchemes] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSchemes = async () => {
            try {
                const { data } = await api.get('/public/schemes');
                if (data && data.length > 0) {
                    setSchemes(data);
                } else {
                    setSchemes(defaultSchemes);
                }
            } catch (error) {
                console.error(error);
                setSchemes(defaultSchemes);
            } finally {
                setLoading(false);
            }
        };
        fetchSchemes();
    }, []);

    if (loading) return <div className="p-8 text-center bg-gray-50 min-h-screen">Loading Schemes...</div>;

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="container mx-auto px-4 py-12 max-w-6xl">
                <h1 className="text-3xl font-bold text-center text-blue-900 mb-2">Available Scholarship Schemes</h1>
                <p className="text-center text-gray-600 mb-10">Explore and apply for scholarships that match your profile.</p>

                {schemes.length === 0 ? <p className="text-center text-gray-600">No active schemes found.</p> : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {schemes.map(scheme => (
                            <div key={scheme._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 flex flex-col">
                                <div className="p-6 flex-1">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{scheme.name}</h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{scheme.description}</p>

                                    <div className="space-y-2 text-sm text-gray-500">
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold text-blue-600">Amount:</span>
                                            <span>₹{scheme.amount}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold text-red-600">Deadline:</span>
                                            <span>{new Date(scheme.deadline).toLocaleDateString()}</span>
                                        </div>
                                        <div className="mt-3 bg-gray-50 p-3 rounded text-xs">
                                            <span className="font-semibold block mb-1">Eligibility:</span>
                                            {scheme.eligibility}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 bg-gray-50 border-t flex justify-between items-center">
                                    <button
                                        onClick={() => navigate('/student/login')}
                                        className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition-colors"
                                    >
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Schemes;
