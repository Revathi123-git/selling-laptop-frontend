import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiInstagram } from "react-icons/si";
import { useState } from "react";
import PolicyModal from "./PolicyModal";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [modal, setModal] = useState(null);

  const formatPhone = (number) => {
    const digits = number.replace(/\D/g, "");
    if (digits.length === 12) {
      return `+${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(5, 8)} ${digits.slice(8, 12)}`;
    }
    return number;
  };

 const privacyPolicy = `
We collect your name, phone number, email, address, and device information when you submit a form on our website. 
This data is used only for contacting you, device pickup scheduling, verification, and completing the purchase process.

Your information is stored securely and is not shared with third parties except our trusted pickup partners.

You may request data deletion anytime at:

• Email: Escrapeelectronics@gmail.com
• Phone: +91 898 575 6868
`;

const termsOfService = `
By using Escrape Electronics, you agree to the following terms:

1. Device price is finalized only after physical inspection.
2. Customers must ensure their personal details are accurate. Device specification fields can be left blank if unknown, but complete and correct device information must be provided later during physical inspection or via phone call.
3. Fake, stolen, or tampered devices will be rejected.
4. Pickup availability depends on service locations.
5. Payment is processed only after verification.

We reserve the right to cancel any submission not meeting our criteria.
`;

const cookiePolicy = `
Our website may use cookies to improve user experience and website performance.

Cookies may help with:
• Website analytics
• Saving form session data
• Improving loading performance

You may disable cookies anytime through your browser settings.
`;

  // ---------------------------------------------------- //

  return (
    <>
      <footer className="glass-card border-t mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div>
              <Link to="/" className="flex items-center gap-2 mb-4">
                <span className="text-xl font-bold text-gradient">E Scrape Electronics</span>
              </Link>
              <p className="text-sm text-muted-foreground mb-4">
                Your trusted marketplace for buying and selling premium laptops with confidence and quality assurance.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/sell" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Sell Your Laptop
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories */}
 <div>
  <h3 className="font-semibold mb-4">Categories</h3>
  <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
    {/* Laptops */}
    <li>
      <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
        All Laptops
      </a>
    </li>
    
   
    <li>
      <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
        Ultrabooks
      </a>
    </li>

    {/* Desktops */}
    <li>
      <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
      All  Desktops
      </a>
    </li>
    {/* All-in-One PCs */}
    <li>
      <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
        All-in-One PCs
      </a>
    </li>

    {/* Tablets */}
    <li>
      <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
        Tablets
      </a>
    </li>
    {/* Printers & Accessories */}
    <li>
      <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
        Printers & Accessories
      </a>
    </li>

    {/* Other Electronic Devices */}
    <li>
      <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
        Monitors
      </a>
    </li>
    <li>
      <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
        Keyboards & Mice
      </a>
    </li>
    <li>
      <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
        Networking Devices
      </a>
    </li>
    <li>
      <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
        Other Electronics
      </a>
    </li>
  </ul>
</div>



            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary mt-0.5" />
                  <span>Escrapeelectronics@gmail.com</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary mt-0.5" />
                  <span>{formatPhone("+918985756868")}</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary mt-0.5" />
                  <span>Telangana & Andhra Pradesh</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
              <p>© {currentYear} E scrap. All rights reserved.</p>

              <div className="flex items-center gap-6">
                <button onClick={() => setModal("privacy")} className="hover:text-primary transition-colors">
                  Privacy Policy
                </button>
                <button onClick={() => setModal("terms")} className="hover:text-primary transition-colors">
                  Terms of Service
                </button>
                <button onClick={() => setModal("cookies")} className="hover:text-primary transition-colors">
                  Cookie Policy
                </button>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/escrapeelectronics?igsh=em81djh0dXprbmV2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <SiInstagram size={20} color="#E4405F" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ------------------ POPUP MODALS ------------------ */}
      {modal === "privacy" && (
        <PolicyModal title="Privacy Policy" content={privacyPolicy} onClose={() => setModal(null)} />
      )}
      {modal === "terms" && (
        <PolicyModal title="Terms of Service" content={termsOfService} onClose={() => setModal(null)} />
      )}
      {modal === "cookies" && (
        <PolicyModal title="Cookie Policy" content={cookiePolicy} onClose={() => setModal(null)} />
      )}
    </>
  );
};

export default Footer;
