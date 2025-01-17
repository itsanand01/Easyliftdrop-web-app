import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [activeLink, setActiveLink] = useState(null);

  const handleActive = (index) => {
    setActiveLink(index);
  };
  return (
    <aside className="w-1/12 text-white flex flex-col items-center py-4">
      <div className="mb-4">
        <img src="/assets/logo.png" alt="logo" className="h-10 w-auto" />
      </div>
      <nav className="flex flex-col justify-between h-full w-full ">
        <div className="flex flex-col items-center space-y-4 pt-4">
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
                activeLink === index ? "bg-red-600" : ""
              }`}
            >
              <img src={item.src} alt={item.alt} />
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-center space-y-4 pb-4">
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
                activeLink === index + 4 ? "bg-red-600" : ""
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
