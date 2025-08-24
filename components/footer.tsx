import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/" },
    { label: "Blog", href: "/" },
    { label: "Contact Us", href: "/" },
    { label: "Customer support", href: "/" },
    { label: "Fraud awareness", href: "/" },
    { label: "Report security a bug", href: "/" },
    { label: "Investor relations", href: "/" },
    { label: "Careers", href: "/careers" },
    { label: "Western Union Foundation", href: "/" },
    { label: "News", href: "/" },
    { label: "Intellectual Property", href: "/" },
    { label: "Online Privacy Statement", href: "/" },
    { label: "Terms & Conditions", href: "/" },
    
  ];

  return (
    <div className="w-full items-center flex justify-center">
      <div className="  p-5  lg:py-5 flex flex-col items-center  gap-10 w-full md:w-3/5 ">
        <div className="flex gap-2 flex-wrap  justify-center font-normal ">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.label} className="text-[10px]  ">
              {link.label} {"|"}
            </Link>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row  gap-4 flex-wrap ">
          <p className=" hidden sm:flex text-[10px] text-center ">
            Services may be provided by Western Union Financial Services, Inc.
            NMLS# 906983 and/or Western Union International Services, LLC NMLS#
            906985, which are licensed as Money Transmitters by the New York
            State Department of Financial Services. See terms and conditions for
            details.
          </p>

          <div className="flex flex-col  justify-center items-center  w-auto gap-4 ">
            <p className="text-[12px]">© 2025 Western Union Holdings, Inc. All Rights Reserved</p>
            <p className="inline-block font-semibold">Follow us on</p>
            <div className="flex items-center gap-4 ">
              <Facebook color="#5091B5" />
              <Youtube color="#5091B5" />
              <Instagram color="#5091B5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
