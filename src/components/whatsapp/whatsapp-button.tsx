"use client";

import { MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface PhoneOption {
  label: string;
  phoneNumber: string;
}

interface WhatsAppButtonProps {
  phoneOptions: PhoneOption[];
  size?: "sm" | "md" | "lg";
}

export default function WhatsAppButton({
  phoneOptions,
  size = "md",
}: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add a small delay to show the button for a nice entrance effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Add click outside listener to close dropdown
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Determine the size of the button
  const sizeClasses = {
    sm: "h-12 w-12",
    md: "h-14 w-14",
    lg: "h-16 w-16",
  };

  return (
    <div
      ref={dropdownRef}
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute bottom-full mb-2 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 w-48">
          {phoneOptions.map((option, index) => (
            <Link
              key={index}
              href={`https://wa.me/${option.phoneNumber.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <MessageCircle className="h-5 w-5 text-green-500 mr-2" />
              <span>{option.label}</span>
            </Link>
          ))}
        </div>
      )}

      {/* Main button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center rounded-full ${
          isOpen
            ? "bg-red-500 hover:bg-red-600"
            : "bg-green-500 hover:bg-green-600"
        } text-white shadow-lg hover:shadow-xl transition-all duration-300 ${
          sizeClasses[size]
        }`}
        aria-label={
          isOpen ? "Close WhatsApp options" : "Open WhatsApp chat options"
        }
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            width={32}
            height={32}
          />
        )}
        <span className="sr-only">
          {isOpen ? "Close WhatsApp options" : "Chat with us on WhatsApp"}
        </span>
      </button>
    </div>
  );
}
