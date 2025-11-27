import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const ownerNumber = "918985756868";
  const message = encodeURIComponent("Hello, I am interested in selling the device");
  const whatsappUrl = `https://wa.me/${ownerNumber}?text=${message}`;

  return (
     <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-5 right-5
        md:top-24 md:left-8 md:bottom-auto md:right-auto
        flex items-center gap-3 px-5 py-2 bg-white shadow-lg transition z-[9999]
        rounded-l-full rounded-r-[20px]          
        md:rounded-r-full md:rounded-l-[20px]    
        hover:rounded-l-[50px] md:hover:rounded-l-[50px]
      "
    >
      <div className="bg-green-500 p-3 rounded-full transition-transform duration-200 hover:scale-125">
        <FaWhatsapp className="text-white" size={28} />
      </div>
      <span className="font-medium text-green-600 text-base md:text-lg">
        Chat on WhatsApp
      </span>
    </a>
  );
}