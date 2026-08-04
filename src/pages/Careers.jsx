import { useState } from "react";
import Careers1 from "../components/Careers1";
import Careers2 from "../components/Careers2";
import Careers3 from "../components/Careers3";
import Careers4 from "../components/Careers4";
const roles = [
  {
    title: "Senior Machine Learning Engineer",
    location: "Pune, India",
    type: "Full-time",
    team: "AI & ML",
  },
  {
    title: "AI Solutions Architect",
    location: "East Brunswick, NJ",
    type: "Full-time",
    team: "Solutions",
  },
  {
    title: "Generative AI Engineer",
    location: "Remote — US",
    type: "Full-time",
    team: "GenAI",
  },
  {
    title: "Cloud Infrastructure Engineer",
    location: "Gurgaon, India",
    type: "Full-time",
    team: "Cloud",
  },
  {
    title: "Data Engineer",
    location: "Pune, India",
    type: "Full-time",
    team: "Data",
  },
  {
    title: "Engagement Manager",
    location: "Roswell, GA",
    type: "Full-time",
    team: "Delivery",
  },
];
const Careers = () => {
  const [applications, setApplications] = useState([]);
  const [selectedRole, setSelectedRole] = useState("General application");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const { name, email, phone, location, portfolio, resume, note } = form;
    if (!name.value.trim() || !email.value.trim() || !resume.files.length) {
      setError("Please add your name, email, and résumé.");
      return;
    }
    const application = {
      name: name.value.trim(),
      email: email.value.trim(),
      phone: phone.value.trim(),
      location: location.value.trim(),
      position: selectedRole,
      portfolio: portfolio.value.trim(),
      resume: resume.files[0],
      resumeName: resume.files[0].name,
      note: note.value.trim(),
      submittedAt: new Date().toLocaleString(),
    };
    setApplications((prev) => [...prev, application]);
    setSubmitted(true);
    setError("");
    form.reset();
  };
  const handleNewApplication = () => {
    setSubmitted(false);
    setError("");
  };
  return (
    <>
    <Careers1/>
    <Careers2/>
    <Careers3 roles={roles} setSelectedRole={setSelectedRole} setSubmitted={setSubmitted} setError={setError}/>
    <Careers4 roles={roles} selectedRole={selectedRole} setSelectedRole={setSelectedRole} submitted={submitted} handleSubmit={handleSubmit} handleNewApplication={handleNewApplication} error={error} />
    </>
  );
};
export default Careers;