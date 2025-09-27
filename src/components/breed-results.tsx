import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Heart, Droplets, Weight, MapPin, Zap } from "lucide-react";

interface BreedResult {
  nameEnglish: string;
  nameHindi: string;
  confidence: number;
  milkYield: string;
  bodyFat: string;
  habitat: string;
  features: string[];
  image?: string;
}

interface BreedResultsProps {
  result: BreedResult;
  uploadedImage?: string;
}

export function BreedResults({ result, uploadedImage }: BreedResultsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Uploaded Image */}
      {uploadedImage && (
        <Card className="overflow-hidden shadow-card animate-fade-in">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Heart className="h-5 w-5 text-primary" />
              Uploaded Image
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <img 
              src={uploadedImage} 
              alt="Uploaded cattle"
              className="w-full h-64 object-cover"
            />
          </CardContent>
        </Card>
      )}

      {/* Breed Information */}
      <Card className="shadow-card animate-fade-in animation-delay-100">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl">Breed Identification</CardTitle>
            <Badge variant="secondary" className="bg-success text-success-foreground">
              {result.confidence}% Match
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-bold text-primary">{result.nameEnglish}</h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-secondary">{result.nameHindi}</span>
              <span className="text-sm text-muted-foreground">(Hindi)</span>
            </div>
          </div>

          <Separator />

          <div className="grid gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Droplets className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Milk Yield</p>
                <p className="text-sm text-muted-foreground">{result.milkYield}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-secondary/10">
                <Weight className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="font-medium">Body Fat Content</p>
                <p className="text-sm text-muted-foreground">{result.bodyFat}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/10">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="font-medium">Natural Habitat</p>
                <p className="text-sm text-muted-foreground">{result.habitat}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Features & Characteristics */}
      <Card className="md:col-span-2 shadow-card animate-fade-in animation-delay-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            Key Features & Characteristics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            {result.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}