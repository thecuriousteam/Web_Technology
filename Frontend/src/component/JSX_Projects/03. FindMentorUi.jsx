import React from "react";
import { FaStar } from "react-icons/fa";

const Profile = () => {
  const user = {
    fullName: "John Doe",
    userName: "johndoe_51bq",
    email: "johndoe@example.com",
    profilePictureURL:
      "https://yt3.ggpht.com/E2mrnvKCX3veeUeNFSYjTBTDKxYbdRINR0C1xjsADZp4u7ODC2x5tFsDw9tAHRvbXpt8AaFZMg=s88-c-k-c0x00ffffff-no-rj",
    description:
      "Experienced Software Engineer with a strong background in full-stack development, cloud computing, and system design. Passionate about mentoring, writing scalable code, and driving innovation.",
    designation: "Senior Software Engineer (SDE III)",
    experience: "8+ years in software development",
    skills: [
      "React.js",
      "SQL",
      "Node.js",
      "Docker",
      "Java",
      "Microservices",
      "Cloud Computing (AWS, GCP)",
      "System Design",
      "Kubernetes",
      "DevOps",
    ],
    specialization: [
      "Scalable Web Applications",
      "Microservices Architecture",
      "DevOps & CI/CD",
      "Database Optimization",
      "Cloud-Native Development",
    ],
    offerings: [
      "2 Mentorship Sessions Per Week",
      "3 Days Per Week Availability",
      "Up to 3 Job Referrals Per Month",
      "Resume & LinkedIn Profile Review",
      "Mock Interviews & Career Guidance",
    ],
    hourlyPrice: 120,
    location: "San Francisco, CA, USA",
    nextSlotDate: "2024-09-30T10:00:00Z",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    portfolio: "https://johndoe.dev",
  };

  return (
    <div className="max-w-xl mx-auto p-5 bg-amber-300 rounded-2xl shadow-2xl mt-5">
      {/* section 1 */}
      <div className="bg-gradient-to-r from-violet-700 to-purple-700 max-w-3xl flex p-[20px] space-x-2 rounded-xl">
        <div className="flex w-full gap-3 items-center justify-start group">
          <img
            src={user.profilePictureURL}
            alt="mentor image"
            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full transition-transform group-hover:scale-110 duration-100 shadow-2xl"
          />

          <div className="flex-col">
            <h1 className="font-bold text-white text-[16px] md:text-xl">
              {user.fullName}
            </h1>
            <p className="text-[14px] text-white md:text-[16px]">
              {user.designation}
            </p>
            <p className="text-[14px] text-white md:text-[16px]">
              {user.experience}
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-white font-bold">Hourly {user.hourlyPrice}</h2>
        </div>
      </div>
      {/* section 2 */}
      <div></div>
      {/* section 3 */}
      <div></div>
    </div>
  );
};

export default Profile;
