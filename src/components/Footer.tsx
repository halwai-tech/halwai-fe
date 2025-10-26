import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/assets/halwai-logo.png"
              alt="Halwaiwala.In"
              width={64} // equivalent to h-16
              height={64} // maintain aspect ratio if needed
              className="w-auto"
            />

            <p className="text-muted-foreground text-sm">
              Our platform connects you with verified, experienced halwais
              across Delhi NCR who specialize in creating authentic traditional
              sweets and providing comprehensive catering services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/halwais"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Find Halwais
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Wedding Catering</li>
              <li className="text-muted-foreground">Engagement Events</li>
              <li className="text-muted-foreground">Corporate Events</li>
              <li className="text-muted-foreground">Local Celebrations</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-muted-foreground">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-primary" />
                <span className="text-sm">
                  Delhi NCR - Serving Ghaziabad, Delhi, Noida, Greater Noida,
                  Meerut
                </span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone size={18} className="flex-shrink-0 text-primary" />
                <a
                  href="tel:+919811820494"
                  className="hover:text-primary transition-colors"
                >
                  +91 9811820494
                </a>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail size={18} className="flex-shrink-0 text-primary" />
                <a
                  href="mailto:support@halwaiwala.in"
                  className="hover:text-primary transition-colors"
                >
                  support@halwaiwala.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Halwaiwala.In. All rights reserved. |{" "}
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
