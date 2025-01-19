import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [activeLink, setActiveLink] = useState(null);

  const handleActive = (index) => {
    setActiveLink(index);
  };

  return (
    <aside className="w-20 text-white flex flex-col items-center h-screen py-4">
      {/* Logo */}
      <div className="mb-6">
        <img src="/assets/logo.png" alt="logo" className="h-10 w-auto" />
      </div>

      {/* Navigation */}
      <nav className="flex flex-col justify-between flex-grow w-full">
        {/* Top Icons */}
        <div className="flex flex-col items-center space-y-6">
          {[
            { src: "assets/notification.png", alt: "notification" },
            { src: "assets/history.png", alt: "history" },
            { src: "/assets/users-profiles-01.png", alt: "users-profiles" },
            { src: "/assets/message-text.png", alt: "message" },
          ].map((item, index) => (
            <Link
              key={index}
              onClick={() => handleActive(index)}
              className={`p-2 rounded-full ${
                activeLink === index ? "bg-[#a80000]" : ""
              }`}
            >
              <img src={item.src} alt={item.alt} />
            </Link>
          ))}
        </div>

        {/* Bottom Icons */}
        <div className="flex flex-col items-center space-y-6">
          {[
            { src: "assets/user-profile.png", alt: "user-profile" },
            { src: "assets/settings.png", alt: "settings" },
            { src: "/assets/help-circle-contained.png", alt: "help" },
            { src: "/assets/Logout.png", alt: "logout" },
          ].map((item, index) => (
            <Link
              key={index + 4}
              onClick={() => handleActive(index + 4)}
              className={`p-2 rounded-full ${
                activeLink === index + 4 ? "bg-[#a80000]" : ""
              }`}
            >
              <img src={item.src} alt={item.alt} />
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
