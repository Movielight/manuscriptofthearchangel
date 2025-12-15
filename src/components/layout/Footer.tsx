import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground text-center md:text-left">
            <p>© {currentYear} Archangel Key. All rights reserved.</p>
            <p className="text-xs mt-1">Created by Vinícius Carlos Barbosa</p>
          </div>
          
          <nav className="flex items-center gap-6 text-sm">
            <Link 
              to="/terms" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Use
            </Link>
            <Link 
              to="/privacy" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
