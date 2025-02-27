import React from "react";
import {
  FaCalendar,
  FaCalendarCheck,
  FaFacebookMessenger,
  FaForward,
  FaStar,
  FaUserClock,
} from "react-icons/fa";

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
    skills: {
      primarySkills: ["React.js", "Javascript", "Node.js", "DevOps"],
      secondarySkills: [
        "Docker",
        "Java",
        "Microservices",
        "Cloud Computing (AWS, GCP)",
        "System Design",
        "Kubernetes",
        "DevOps",
      ],
    },
    specialization: [
      "Scalable Web Applications",
      "Microservices Architecture",
      "DevOps & CI/CD",
      "Database Optimization",
      "Cloud-Native Development",
    ],
    offerings: {
      sessions: ["Group Session", "Private Session"],
      availabilityHours: ["500+"],
      quickResponse: ["Group Chat", "Private Chat"],
      uniqueOffering: ["Customized Plan", "Career Guidance", "Mock Interviews"],
    },
    hourlyPrice: 120,
    category: "Technology",
    location: "San Francisco, CA, USA",
    nextSlotDate: "2025-02-25T10:00:00Z",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    portfolio: "https://johndoe.dev",
  };

  const nextSlotDate = new Date(user.nextSlotDate).getTime();
  // calculating time left
  const [timeLeft, setTimeLeft] = React.useState(timeRemaining());

  function timeRemaining() {
    // get current date and time
    const now = new Date().getTime();
    const difference = nextSlotDate - now;
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    // get the days, hours, minutes, and seconds
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  // useEffect to update the time every second
  React.useEffect(() => {
    const timer = setInterval(() => setTimeLeft(timeRemaining()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-xl mx-auto p-5 bg-white-300 rounded-2xl shadow-2xl mt-5">
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
          <h2 className="text-white font-bold">Hourly ₹{user.hourlyPrice}</h2>
        </div>
      </div>
      {/* section 2 */}
      <div className="mt-2">
        <div className="p-2 fbg-gradient-to-l from-white/100 to-gray-100 rounded-2xl shadow-xl border-2 border-slate-50">
          <p className="line-clamp-2 lg:line-clamp-3 md:line-clamp-3">
            {user.description}...
          </p>
          <div className="max-w-xl">
            <div className="flex flex-wrap space-x-2 mt-2 gap-2">
              {user.skills.primarySkills.slice(0, 3).map((eachSkill) => (
                <p
                  key={Math.random()}
                  className="text-sm bg-violet-600 p-2  text-white rounded-xl"
                >
                  #{eachSkill}
                </p>
              ))}

              {/* Know More Button */}
              {user.skills.primarySkills.length > 3 && (
                // add the button
                <button className="text-sm p-2 border-2 text-violet-600 rounded-xl">
                  Know More
                </button>
              )}
            </div>
          </div>

          {/* Offeriing */}
          <div className="text-sm">
            <h1 className="text-start mt-2 font-mono p-2 flex justify-start items-center gap-2">
              <span className="font-bold text-lg text-violet-600 flex justify-start items-center gap-2">
                {user.fullName} <FaForward />
              </span>{" "}
              <span className="text-lg">Offers In: {user.category}</span>
            </h1>

            <div className="flex flex-wrap flex-auto">
              <div className="p-2">
                <ol className="flex justify-start items-center gap-2">
                  <span className="p-2 bg-gradient-to-l from-violet-700 to-purple-600 rounded-full ">
                    <FaCalendar className="text-white " />
                  </span>
                  {user.offerings.sessions.map((eachOffering) => (
                    <li
                      key={Math.random()}
                      className=" bg-violet-600 p-2 text-white rounded-lg"
                    >
                      #{eachOffering}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="p-2">
                <ol className="flex justify-start items-center gap-2">
                  <span className="p-2 bg-gradient-to-l from-violet-700 to-purple-600 rounded-full ">
                    <FaUserClock className="text-white " />
                  </span>
                  {user.offerings.availabilityHours.map((eachOffering) => (
                    <li
                      key={Math.random()}
                      className=" bg-violet-600 p-2 text-white rounded-lg"
                    >
                      #{eachOffering}hours/week
                    </li>
                  ))}
                </ol>
              </div>
              <div className="p-2">
                <ol className="flex justify-start items-center gap-2">
                  <span className="p-2 bg-gradient-to-l from-violet-700 to-purple-600 rounded-full ">
                    <FaFacebookMessenger className="text-white " />
                  </span>
                  {user.offerings.quickResponse.map((eachOffering) => (
                    <li
                      key={Math.random()}
                      className=" bg-violet-600 p-2 text-white rounded-lg"
                    >
                      #{eachOffering}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="p-2 flex">
                <ol className="flex justify-start items-center gap-2">
                  <span className="p-2 bg-gradient-to-l from-violet-700 to-purple-600 rounded-full ">
                    <FaStar className="text-white " />
                  </span>
                  {user.offerings.uniqueOffering
                    .slice(0, 2)
                    .map((eachOffering) => (
                      <li
                        key={Math.random()}
                        className=" bg-violet-600 p-2 text-white rounded-lg"
                      >
                        #{eachOffering}
                      </li>
                    ))}
                </ol>
                {/* Know More Button */}
                {user.skills.length > 3 && (
                  // add the button
                  <button className="text-sm p-2 border-2 text-violet-600 rounded-xl ml-2">
                    Know More
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div className="flex justify-around mt-2 p-2 fbg-gradient-to-r from-gray-50 to-gray-200 rounded-xl shadow-xl border-2 border-gray-200">
        <div className="flex justify-center items-center">
          {/* timer */}
          <p className="text-2xl font-mono font-bold text-violet-600">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
            {timeLeft.seconds}s
          </p>
        </div>
        <div className="flex justify-between items-center gap-2 bg-violet-600 p-2 text-white rounded-xl transition-transform hover:scale-110 duration-100">
          {/* button */}
          <FaCalendarCheck />
          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;