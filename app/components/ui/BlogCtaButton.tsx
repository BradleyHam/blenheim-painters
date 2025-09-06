import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function BlogCtaButton() {
  return (
    <Button asChild className="bg-gold hover:bg-gold/90 text-white">
      <Link href="/contact" className="inline-flex items-center">
        Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </Button>
  );
} 