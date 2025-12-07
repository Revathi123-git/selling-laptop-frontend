import { useState, useEffect } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { useLocation } from "react-router-dom";

export default function WhatsappContact() {
  const location = useLocation();

  const adminRoutes = [
    "/admin",
    "/admin-login",
    "/AdminSubmissions",
    "/AdminSettings"
  ];

  if (adminRoutes.some(route => location.pathname.startsWith(route))) {
    return null;
  }

  const ownerNumber = "918985756868";
  const message = encodeURIComponent("Hello, I am interested in selling the device");
  const whatsappUrl = `https://wa.me/${ownerNumber}?text=${message}`;
  const telUrl = `tel:${ownerNumber}`;
  const instaUrl = "https://www.instagram.com/escrapeelectronics?igsh=em81djh0dXprbmV2";

  const NAVBAR_HEIGHT = 80;
  const TOP_OFFSET = NAVBAR_HEIGHT + 20;
  const BUTTON_SIZE = 56;
  const BUTTON_GAP = 16;
  const LARGE_SCREEN_WIDTH = 1024;

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Initial positions
  const initialPositions = () => {
    if (window.innerWidth >= LARGE_SCREEN_WIDTH) {
      return {
        whats: { x: 20, y: TOP_OFFSET },
        phone: { x: 20, y: TOP_OFFSET + BUTTON_SIZE + BUTTON_GAP },
        insta: { x: 20, y: TOP_OFFSET + (BUTTON_SIZE + BUTTON_GAP) * 2 }
      };
    } else {
      return {
        whats: { x: window.innerWidth - BUTTON_SIZE - 20, y: window.innerHeight - BUTTON_SIZE * 3 - BUTTON_GAP * 2 - 20 },
        phone: { x: window.innerWidth - BUTTON_SIZE - 20, y: window.innerHeight - BUTTON_SIZE * 2 - BUTTON_GAP - 20 },
        insta: { x: window.innerWidth - BUTTON_SIZE - 20, y: window.innerHeight - BUTTON_SIZE - 20 }
      };
    }
  };

  const [whatsPos, setWhatsPos] = useState(initialPositions().whats);
  const [phonePos, setPhonePos] = useState(initialPositions().phone);
  const [instaPos, setInstaPos] = useState(initialPositions().insta);

  const [whatsDragging, setWhatsDragging] = useState(false);
  const [phoneDragging, setPhoneDragging] = useState(false);
  const [instaDragging, setInstaDragging] = useState(false);

  const [whatsRel, setWhatsRel] = useState({ x: 0, y: 0 });
  const [phoneRel, setPhoneRel] = useState({ x: 0, y: 0 });
  const [instaRel, setInstaRel] = useState({ x: 0, y: 0 });

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      const newSize = { width: window.innerWidth, height: window.innerHeight };
      setWindowSize(newSize);

      if (!whatsDragging && !phoneDragging && !instaDragging) {
        const pos = initialPositions();
        setWhatsPos(pos.whats);
        setPhonePos(pos.phone);
        setInstaPos(pos.insta);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [whatsDragging, phoneDragging, instaDragging]);


  const startDrag = (e, setDragging, setRel, pos) => {
    const pageX = e.targetTouches ? e.targetTouches[0].pageX : e.pageX;
    const pageY = e.targetTouches ? e.targetTouches[0].pageY : e.pageY;
    setDragging(true);
    setRel({ x: pageX - pos.x, y: pageY - pos.y });
    e.preventDefault();
  };

  const moveDrag = (e, dragging, setPos, rel) => {
    if (!dragging) return;
    const pageX = e.targetTouches ? e.targetTouches[0].pageX : e.pageX;
    const pageY = e.targetTouches ? e.targetTouches[0].pageY : e.pageY;
    const newX = Math.min(Math.max(pageX - rel.x, 0), windowSize.width - BUTTON_SIZE);
    const newY = Math.min(Math.max(pageY - rel.y, 0), windowSize.height - BUTTON_SIZE);
    setPos({ x: newX, y: newY });
    e.preventDefault();
  };

  const endDrag = (setDragging) => setDragging(false);

  return (
    <>
      {/* Phone Button */}
      <div
        style={{ left: phonePos.x, top: phonePos.y, width: BUTTON_SIZE, height: BUTTON_SIZE }}
        className="fixed z-[9999]"
        onMouseDown={(e) => startDrag(e, setPhoneDragging, setPhoneRel, phonePos)}
        onMouseMove={(e) => moveDrag(e, phoneDragging, setPhonePos, phoneRel)}
        onMouseUp={() => endDrag(setPhoneDragging)}
        onTouchStart={(e) => startDrag(e, setPhoneDragging, setPhoneRel, phonePos)}
        onTouchMove={(e) => moveDrag(e, phoneDragging, setPhonePos, phoneRel)}
        onTouchEnd={() => endDrag(setPhoneDragging)}
      >
        <a href={telUrl} className="flex items-center justify-center bg-white rounded-full shadow-lg hover:scale-110 w-14 h-14 transition-transform">
          <FaPhoneAlt className="text-[#101324]" size={28} />
        </a>
      </div>

      {/* WhatsApp Button */}
      <div
        style={{ left: whatsPos.x, top: whatsPos.y, width: BUTTON_SIZE, height: BUTTON_SIZE }}
        className="fixed z-[9999]"
        onMouseDown={(e) => startDrag(e, setWhatsDragging, setWhatsRel, whatsPos)}
        onMouseMove={(e) => moveDrag(e, whatsDragging, setWhatsPos, whatsRel)}
        onMouseUp={() => endDrag(setWhatsDragging)}
        onTouchStart={(e) => startDrag(e, setWhatsDragging, setWhatsRel, whatsPos)}
        onTouchMove={(e) => moveDrag(e, whatsDragging, setWhatsPos, whatsRel)}
        onTouchEnd={() => endDrag(setWhatsDragging)}
      >
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-green-500 rounded-full shadow-lg hover:scale-110 w-14 h-14 transition-transform">
          <FaWhatsapp className="text-white" size={28} />
        </a>
      </div>

      {/* Instagram Button */}
      <div
        style={{ left: instaPos.x, top: instaPos.y, width: BUTTON_SIZE, height: BUTTON_SIZE }}
        className="fixed z-[9999]"
        onMouseDown={(e) => startDrag(e, setInstaDragging, setInstaRel, instaPos)}
        onMouseMove={(e) => moveDrag(e, instaDragging, setInstaPos, instaRel)}
        onMouseUp={() => endDrag(setInstaDragging)}
        onTouchStart={(e) => startDrag(e, setInstaDragging, setInstaRel, instaPos)}
        onTouchMove={(e) => moveDrag(e, instaDragging, setInstaPos, instaRel)}
        onTouchEnd={() => endDrag(setInstaDragging)}
      >
        <a
          href={instaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full shadow-lg hover:scale-110 w-14 h-14 transition-transform"
        >
          <SiInstagram className="text-white" size={26} />
        </a>
      </div>
    </>
  );
}
