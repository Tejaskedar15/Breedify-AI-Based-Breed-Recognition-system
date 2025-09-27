import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Zap, Globe, Shield, Database, Camera } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Recognition",
    description: "Advanced computer vision algorithms trained on thousands of cattle and buffalo breeds for accurate identification."
  },
  {
    icon: Zap,
    title: "Instant Analysis",
    description: "Get breed identification and detailed characteristics within seconds of uploading your image."
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Breed names displayed in both English and Hindi to serve diverse agricultural communities."
  },
  {
    icon: Shield,
    title: "High Accuracy",
    description: "State-of-the-art deep learning models ensuring reliable breed classification with confidence scores."
  },
  {
    icon: Database,
    title: "Comprehensive Database",
    description: "Extensive knowledge base covering milk yield, body fat content, habitat, and physical characteristics."
  },
  {
    icon: Camera,
    title: "Easy Upload",
    description: "Simple drag-and-drop interface supporting multiple image formats for seamless user experience."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-accent-light via-background to-secondary-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Powerful System Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our advanced AI platform provides farmers and agricultural professionals with cutting-edge
            breed recognition technology and comprehensive livestock analysis.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group shadow-card hover:shadow-primary transition-all duration-300 hover:scale-105 animate-fade-in bg-gradient-card border-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-primary text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}