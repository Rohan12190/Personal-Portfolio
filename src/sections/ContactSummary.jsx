import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const ContactSummary = () => {
  const containerRef = useRef(null);
  const items = [
    "Full-Stack Development",
    "React & Next.js",
    "Animated UI/UX",
    "Data Analytics",
    "Backend Logic",
  ];
  const items2 = [
    "Let's Talk",
    "Start a Project",
    "Get in Touch",
    "Ready to Build?",
    "Let's Collaborate",
  ];

  useGSAP(() => {
   ScrollTrigger.normalizeScroll(true);
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "center center",
      end: "+=500", 
      pin: true,
      pinSpacing: true,
      // toggleClass: "is-pinned",
      markers: false,
    });
    
  }, { scope: containerRef }); 

  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16"
    >
      <Marquee items={items} className="text-white bg-black" />
      <div className="overflow-hidden font-light text-center contact-text-responsive">
        <p>
          “ Let’s build a <br />
          <span className="font-normal">memorable</span> &{" "}
          <span className="italic">inspiring</span> <br />
          web application <span className="text-gold">together</span> “
        </p>
      </div>
      <Marquee
        items={items2}
        reverse={true}
        className="text-black bg-transparent border-y-2"
        iconClassName="stroke-gold stroke-2 text-primary"
        icon="material-symbols-light:square"
      />
    </section>
  );
};

export default ContactSummary;