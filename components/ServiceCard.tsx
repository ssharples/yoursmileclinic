import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  slug: string;
  featured?: boolean;
}

export default function ServiceCard({
  title,
  description,
  icon,
  slug,
  featured = false,
}: ServiceCardProps) {
  return (
    <Card className={`h-full flex flex-col transition-all hover:shadow-lg ${
      featured ? "border-brand-burgundy border-2" : ""
    }`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="text-5xl mb-2">{icon}</div>
          {featured && (
            <Badge className="bg-brand-burgundy">Popular</Badge>
          )}
        </div>
        <CardTitle className="text-xl font-bold text-brand-slate">
          {title}
        </CardTitle>
        <CardDescription className="text-base">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-end">
        <Button
          asChild
          variant="link"
          className="text-brand-burgundy p-0 h-auto font-semibold group"
        >
          <Link href={`/services/${slug}`} className="flex items-center">
            <span>Learn More</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
