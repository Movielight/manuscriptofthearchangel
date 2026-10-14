import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const QuizFooter = () => {
  return (
    <footer className="w-full py-4 px-4 mt-auto">
      {/* 60-Day Guarantee — shown on every quiz page */}
      <div className="max-w-md mx-auto mb-3 flex items-center justify-center gap-2 text-xs font-medium text-primary">
        <ShieldCheck className="w-4 h-4 flex-shrink-0" />
        <span className="text-center">
          60-Day Money-Back Guarantee — full refund, no questions asked
        </span>
      </div>

      <div className="max-w-md mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
        {/* Support */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="hover:text-primary transition-colors">
              Support
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Support</DialogTitle>
            </DialogHeader>
            <div className="text-center py-4">
              <p className="text-muted-foreground mb-4">
                For any questions or issues, please contact us:
              </p>
              <a 
                href="mailto:contatomovielight@gmail.com"
                className="text-primary hover:underline font-medium"
              >
                contatomovielight@gmail.com
              </a>
            </div>
          </DialogContent>
        </Dialog>

        <span className="text-border">•</span>

        {/* Refund Policy */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="hover:text-primary transition-colors">
              Refund Policy
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Refund Policy</DialogTitle>
            </DialogHeader>
            <div className="py-4 space-y-4 text-muted-foreground">
              <p>
                We offer a{" "}
                <span className="text-foreground font-medium">
                  60-day money-back guarantee
                </span>{" "}
                on all purchases.
              </p>
              <p>
                If you're not completely satisfied with your purchase, simply
                contact us within 60 days of your purchase date and we'll
                process a full refund.
              </p>
              <p className="text-sm">
                Contact:{" "}
                <a
                  href="mailto:contatomovielight@gmail.com"
                  className="text-primary hover:underline"
                >
                  contatomovielight@gmail.com
                </a>
              </p>
            </div>
          </DialogContent>
        </Dialog>

        <span className="text-border">•</span>

        {/* Privacy Policy */}
        <Link 
          to="/privacy" 
          className="hover:text-primary transition-colors"
        >
          Privacy Policy
        </Link>

        <span className="text-border">•</span>

        {/* Terms of Use */}
        <Link 
          to="/terms" 
          className="hover:text-primary transition-colors"
        >
          Terms of Use
        </Link>
      </div>
      
      <div className="max-w-md mx-auto mt-3 text-center text-[10px] text-muted-foreground/70">
        <p>Movielight LTDA • CNPJ: 48.108.988/0001-33</p>
        <p>Kaike Alves Gibertoni Snyder • CPF: 035.036.101-03</p>
      </div>
    </footer>
  );
};
