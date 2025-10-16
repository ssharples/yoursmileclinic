import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  text,
  rating,
}: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="flex mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star
              key={i}
              className="h-5 w-5 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
        <p className="text-gray-700 mb-4 italic">&ldquo;{text}&rdquo;</p>
        <p className="font-semibold text-brand-slate">— {name}</p>
      </CardContent>
    </Card>
  );
}
