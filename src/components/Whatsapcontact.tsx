import { useState, useEffect } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingButtons() {
  const ownerNumber = "918985756868";
  const message = encodeURIComponent("Hello, I am interested in selling the device");
  const whatsappUrl = `https://wa.me/${ownerNumber}?text=${message}`;
  const telUrl = `tel:${ownerNumber}`;

  const buttonSizes = {
    whatsapp: { width: 56, height: 56 },
    phone: { width: 140, height: 48 },
  };

  const NAVBAR_HEIGHT = 80; // adjust this to your navbar height

  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  // Initialize positions relative to screen with offset from navbar
  const [whatsPos, setWhatsPos] = useState({ x: 20, y: NAVBAR_HEIGHT + 20 });
  const [phonePos, setPhonePos] = useState({ x: 20, y: NAVBAR_HEIGHT + 100 });

  const [whatsDragging, setWhatsDragging] = useState(false);
  const [phoneDragging, setPhoneDragging] = useState(false);

  const [whatsRel, setWhatsRel] = useState({ x: 0, y: 0 });
  const [phoneRel, setPhoneRel] = useState({ x: 0, y: 0 });

  // Update window size and clamp positions
  useEffect(() => {
    const handleResize = () => {
      const newSize = { width: window.innerWidth, height: window.innerHeight };
      setWindowSize(newSize);

      // Clamp WhatsApp button
      setWhatsPos(pos => ({
        x: Math.min(pos.x, newSize.width - buttonSizes.whatsapp.width),
        y: Math.max(NAVBAR_HEIGHT + 10, Math.min(pos.y, newSize.height - buttonSizes.whatsapp.height)),
      }));

      // Clamp Phone button
      setPhonePos(pos => ({
        x: Math.min(pos.x, newSize.width - buttonSizes.phone.width),
        y: Math.max(NAVBAR_HEIGHT + 10, Math.min(pos.y, newSize.height - buttonSizes.phone.height)),
      }));
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // initial clamp
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Generic drag handlers
  const startDrag = (e, setDragging, setRel, pos) => {
    const pageX = e.targetTouches ? e.targetTouches[0].pageX : e.pageX;
    const pageY = e.targetTouches ? e.targetTouches[0].pageY : e.pageY;
    setDragging(true);
    setRel({ x: pageX - pos.x, y: pageY - pos.y });
    e.preventDefault();
  };

  const moveDrag = (e, dragging, setPos, rel, buttonWidth, buttonHeight) => {
    if (!dragging) return;
    const pageX = e.targetTouches ? e.targetTouches[0].pageX : e.pageX;
    const pageY = e.targetTouches ? e.targetTouches[0].pageY : e.pageY;
    const newX = Math.min(Math.max(pageX - rel.x, 0), windowSize.width - buttonWidth);
    const newY = Math.min(Math.max(pageY - rel.y, NAVBAR_HEIGHT + 10), windowSize.height - buttonHeight);
    setPos({ x: newX, y: newY });
    e.preventDefault();
  };

  const endDrag = (setDragging) => setDragging(false);

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div
        style={{ left: whatsPos.x, top: whatsPos.y, width: buttonSizes.whatsapp.width, height: buttonSizes.whatsapp.height }}
        className="fixed z-[9999]"
        onMouseDown={(e) => startDrag(e, setWhatsDragging, setWhatsRel, whatsPos)}
        onMouseMove={(e) => moveDrag(e, whatsDragging, setWhatsPos, whatsRel, buttonSizes.whatsapp.width, buttonSizes.whatsapp.height)}
        onMouseUp={() => endDrag(setWhatsDragging)}
        onMouseLeave={() => endDrag(setWhatsDragging)}
        onTouchStart={(e) => startDrag(e, setWhatsDragging, setWhatsRel, whatsPos)}
        onTouchMove={(e) => moveDrag(e, whatsDragging, setWhatsPos, whatsRel, buttonSizes.whatsapp.width, buttonSizes.whatsapp.height)}
        onTouchEnd={() => endDrag(setWhatsDragging)}
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-green-500 w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
        >
          <FaWhatsapp className="text-white" size={28} />
        </a>
      </div>

      {/* Phone Floating Button */}
      <div
        style={{ left: phonePos.x, top: phonePos.y }}
        className="fixed z-[9999]"
        onMouseDown={(e) => startDrag(e, setPhoneDragging, setPhoneRel, phonePos)}
        onMouseMove={(e) => moveDrag(e, phoneDragging, setPhonePos, phoneRel, buttonSizes.phone.width, buttonSizes.phone.height)}
        onMouseUp={() => endDrag(setPhoneDragging)}
        onMouseLeave={() => endDrag(setPhoneDragging)}
        onTouchStart={(e) => startDrag(e, setPhoneDragging, setPhoneRel, phonePos)}
        onTouchMove={(e) => moveDrag(e, phoneDragging, setPhonePos, phoneRel, buttonSizes.phone.width, buttonSizes.phone.height)}
        onTouchEnd={() => endDrag(setPhoneDragging)}
      >
        <a
          href={telUrl}
          className="flex items-center gap-2 bg-gray-100 text-green-600 font-medium px-4 py-2 rounded-full shadow hover:bg-gray-200 transition text-sm md:text-base"
        >
          <FaPhoneAlt className="text-green-600" size={16} />
          {ownerNumber}
        </a>
      </div>
    </>
  );
}
