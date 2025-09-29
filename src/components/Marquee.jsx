import { Icon } from "@iconify/react/dist/iconify.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

const Marquee = ({
  items,
  className = "",
  icon = "mdi:star-four-points",
  iconClassName = "",
  reverse = false,
  speed = 40,
}) => {
  const marqueeInnerRef = useRef(null);
  const marqueeTween = useRef(null);

  const duplicatedItems = [...items, ...items];

  useGSAP(() => {
    if (!marqueeInnerRef.current) return;

    gsap.set(marqueeInnerRef.current, { xPercent: reverse ? -50 : 0 });

    marqueeTween.current = gsap.to(marqueeInnerRef.current, {
      xPercent: reverse ? 0 : -50,
      duration: speed,
      ease: "none",
      repeat: -1,
    });

    const observer = Observer.create({
      type: "wheel,touch,pointer", 
      // ignore: (e) => e.target.closest(".is-pinned"),
      onChangeY: () => {
        if (!marqueeTween.current) return;
        
        gsap.to(marqueeTween.current, {
          timeScale: 5,
          duration: 0.2,
          overwrite: true,
        });
      },
      onStop: () => {
        if (!marqueeTween.current) return;

        gsap.to(marqueeTween.current, {
          timeScale: 1,
          duration: 1, 
          overwrite: true,
        });
      },
    });

    return () => {
      if (observer) {
        observer.kill();
      }
      if (marqueeTween.current) {
        marqueeTween.current.kill();
      }
    };
  }, { dependencies: [items, reverse, speed] });

  return (
    <div
      className={`overflow-hidden w-full h-20 md:h-[100px] flex items-center marquee-text-responsive font-light uppercase whitespace-nowrap ${className}`}
    >
      <div ref={marqueeInnerRef} className="flex">
        {duplicatedItems.map((text, index) => (
          <span
            key={`${text}-${index}`}
            className="flex items-center flex-shrink-0 px-16 gap-x-32"
          >
            {text} <Icon icon={icon} className={iconClassName} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;