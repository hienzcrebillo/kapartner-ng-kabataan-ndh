import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";

const socialLinks = [
  { icon: FaFacebook, href: "https://www.facebook.com/kapartnerngNDH", label: "Facebook" },
];

const footerLinks = [
  { href: "#dashboard", label: "About Us" },
  { href: "#programs", label: "Programs" },
  { href: "#projects", label: "Projects & Activities" },
  { href: "#partners", label: "Partners" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
         <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="flex items-center  text-xl font-bold tracking-tight hover:text-primary">
             <span> <img
      src="/knk_logo.png"
      alt="KNK Logo"
      className="w-8"
    /></span>
            <span className="text-logo-red">K</span>
            <span className="text-logo-blue">N</span>
            <span className="text-logo-yellow">K</span>
         </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Kapartner ng Kabataan – North Daanghari. All Rights Reserved.
            </p>
            <p className="text-xs text-muted-foreground/60 mt-1">
  Designed & Developed by Hienz Crebillo
</p>
            
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

         
        </div>
      </div>
   
    </footer>
  );
};
