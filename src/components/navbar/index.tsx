import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import LinkedIn from "../icons/LinkedIn";
import Github from "../icons/Github";

export default function Navbar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="backdrop-blur bg-white/70 dark:bg-[#18181b]/70 shadow-md sticky top-0 z-50 w-full transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <Link
            href="/"
            className="font-bold text-xl text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            Abhinav Vishwakarma
          </Link>
          <p className="font-medium text-xl text-gray-600 dark:text-gray-300 mt-1">
            Full Stack Developer
          </p>
        </div>
        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-x-3">
            <li>
              <a
                href="https://www.linkedin.com/in/abhinav-v-02bb64107/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200"
              >
                <LinkedIn />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/avabhi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <Github />
              </a>
            </li>
          </ul>
          {/* {mounted && (
            <button
              aria-label="Toggle Theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-2 p-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#23272f] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-yellow-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1.5m0 15V21m8.485-8.485h-1.5m-15 0H3m15.364-6.364l-1.06 1.06m-12.728 0l-1.06-1.06m12.728 12.728l-1.06-1.06m-12.728 0l-1.06 1.06M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-700 dark:text-gray-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0112 21.75c-5.385 0-9.75-4.365-9.75-9.75 0-4.136 2.635-7.626 6.348-9.049a.75.75 0 01.908.37.75.75 0 01-.082.976A7.501 7.501 0 0012 19.5a7.48 7.48 0 006.453-3.574.75.75 0 01.976-.082.75.75 0 01.37.908z"
                  />
                </svg>
              )}
            </button>
          )} */}
        </div>
      </div>
    </nav>
  );
}
