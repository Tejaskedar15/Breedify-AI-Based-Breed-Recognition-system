import * as React from "react";
import { cn } from "@/lib/utils";
import { Upload, Camera, Image as ImageIcon } from "lucide-react";

interface UploadZoneProps {
  onImageUpload: (file: File) => void;
  isAnalyzing?: boolean;
  className?: string;
}

export function UploadZone({ onImageUpload, isAnalyzing = false, className }: UploadZoneProps) {
  const [isDragOver, setIsDragOver] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    const imageFile = files.find(file => file.type.startsWith('image/'));
    
    if (imageFile) {
      onImageUpload(imageFile);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      onImageUpload(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border-2 border-dashed border-border bg-gradient-card p-8 text-center shadow-upload transition-all duration-300",
        isDragOver && "border-primary bg-primary-light scale-105",
        isAnalyzing && "animate-pulse-glow",
        !isAnalyzing && "hover:border-primary hover:bg-accent-light hover:scale-102 cursor-pointer",
        className
      )}
      onDrop={handleDrop}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragOver(true);
      }}
      onDragLeave={() => setIsDragOver(false)}
      onClick={!isAnalyzing ? handleClick : undefined}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
        disabled={isAnalyzing}
      />
      
      <div className="mx-auto flex flex-col items-center gap-4">
        {isAnalyzing ? (
          <>
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent"></div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">Analyzing Breed...</h3>
              <p className="text-muted-foreground">Our AI is identifying the cattle breed and characteristics</p>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-3 rounded-full bg-primary/10">
                <Upload className="h-8 w-8 text-primary" />
              </div>
              <div className="p-3 rounded-full bg-secondary/10">
                <Camera className="h-8 w-8 text-secondary" />
              </div>
              <div className="p-3 rounded-full bg-accent/10">
                <ImageIcon className="h-8 w-8 text-accent" />
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">
                Upload Cattle or Buffalo Image
              </h3>
              <p className="text-muted-foreground max-w-md">
                Drop your image here or click to browse. We support JPG, PNG, and WEBP formats.
              </p>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4">
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                High Accuracy
              </span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                Fast Analysis
              </span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                Detailed Results
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}