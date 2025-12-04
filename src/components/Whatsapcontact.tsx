import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function WhatsAppButton() {
  const ownerNumber = "918985756868";
  const message = encodeURIComponent("Hello, I am interested in selling the device");
  const whatsappUrl = `https://wa.me/${ownerNumber}?text=${message}`;
  const telUrl = `tel:${ownerNumber}`;

  return (
    <div
      className="
        fixed bottom-5 right-5
        md:top-24 md:left-8 md:bottom-auto md:right-auto
        flex flex-col items-center gap-2 z-[9999]
      "
    >
      {/* WhatsApp Chat Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 p-3 rounded-full shadow-lg transition-transform duration-200 hover:scale-125"
      >
        <FaWhatsapp className="text-white" size={28} />
      </a>

      {/* Phone Number Button */}
      <a
        href={telUrl}
        className="
          flex items-center gap-2 bg-gray-100 text-green-600 font-medium px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition
          text-sm md:text-base
        "
      >
        <FaPhoneAlt className="text-green-600" size={16} />
        {ownerNumber}
      </a>
    </div>
  );
}
