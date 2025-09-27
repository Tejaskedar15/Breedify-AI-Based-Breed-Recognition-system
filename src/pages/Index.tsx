import * as React from "react";
import { Header } from "@/components/header";
import { UploadZone } from "@/components/ui/upload-zone";
import { BreedResults } from "@/components/breed-results";
import { FeaturesSection } from "@/components/features-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Heart, Sparkles, Users, Award } from "lucide-react";

// Mock breed data for demonstration
const mockBreedResult = {
  nameEnglish: "Gir",
  nameHindi: "गिर",
  confidence: 94,
  milkYield: "8-12 liters per day",
  bodyFat: "4.5-5.2% fat content",
  habitat: "Gujarat, Rajasthan - Semi-arid regions",
  features: [
    "Distinctive curved horns",
    "Compact, muscular build",
    "High heat tolerance",
    "Disease resistant",
    "Gentle temperament",
    "Excellent maternal instincts",
    "Long productive life",
    "Superior milk quality"
  ]
};

const Index = () => {
  const [isAnalyzing, setIsAnalyzing] = React.useState(false);
  const [result, setResult] = React.useState<typeof mockBreedResult | null>(null);
  const [uploadedImage, setUploadedImage] = React.useState<string | null>(null);
  const { toast } = useToast();

  const handleImageUpload = (file: File) => {
    // Create preview URL
    const imageUrl = URL.createObjectURL(file);
    setUploadedImage(imageUrl);
    
    // Simulate AI analysis
    setIsAnalyzing(true);
    setResult(null);
    
    toast({
      title: "Processing Image",
      description: "Analyzing cattle breed characteristics...",
    });

    // Mock analysis delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setResult(mockBreedResult);
      toast({
        title: "Analysis Complete!",
        description: `Identified as ${mockBreedResult.nameEnglish} (${mockBreedResult.nameHindi}) with ${mockBreedResult.confidence}% confidence.`,
      });
    }, 3000);
  };

  const resetAnalysis = () => {
    setResult(null);
    setUploadedImage(null);
    if (uploadedImage) {
      URL.revokeObjectURL(uploadedImage);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-primary text-primary-foreground shadow-primary animate-pulse-glow">
                <Heart className="h-12 w-12" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              AI-Powered Cattle &{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Buffalo Recognition
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-200">
              Advanced breed identification system providing instant analysis of milk yield, 
              body fat content, habitat information, and key characteristics for livestock management.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in animation-delay-300">
              <Card className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-2">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">92%</div>
                  <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-2">
                    <Users className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">75+</div>
                  <div className="text-sm text-muted-foreground">Breed Types</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-2">
                    <Award className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">0</div>
                  <div className="text-sm text-muted-foreground">Analyses Done</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Upload & Results Section */}
      <section className="py-16 bg-gradient-to-br from-background via-accent-light to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {!result ? (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Upload Your Cattle or Buffalo Image
                  </h2>
                  <p className="text-muted-foreground">
                    Get instant breed identification with detailed characteristics and farming insights
                  </p>
                </div>
                
                <UploadZone 
                  onImageUpload={handleImageUpload}
                  isAnalyzing={isAnalyzing}
                  className="max-w-2xl mx-auto"
                />
              </div>
            ) : (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold text-foreground">Analysis Results</h2>
                  <Button 
                    onClick={resetAnalysis}
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Analyze Another Image
                  </Button>
                </div>
                
                <BreedResults 
                  result={result} 
                  uploadedImage={uploadedImage || undefined}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features">
        <FeaturesSection />
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <div className="text-xl font-bold">Breedify</div>
          </div>
          <p className="text-background/80">
            © 2024 Breedify. Empowering agriculture through AI-powered livestock recognition.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
