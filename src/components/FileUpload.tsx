import { useState } from "react";
import { Upload, FileUp } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const FileUpload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const { toast } = useToast();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    handleFiles(files);
  };

  const handleFiles = (files: File[]) => {
    toast({
      title: "Files received",
      description: `${files.length} file(s) uploaded successfully.`,
    });
    // Here we'll add the actual file processing logic in the next step
  };

  return (
    <div className="w-full p-6">
      <div
        className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-200 ${
          isDragging
            ? "border-accent bg-accent/5 scale-[0.99]"
            : "border-gray-200 hover:border-accent/50 hover:bg-gray-50/50"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="p-4 bg-accent/10 rounded-full">
            <FileUp className="h-12 w-12 text-accent" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              Drag and drop your files
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              or click to browse from your computer
            </p>
          </div>
          <label className="mt-4 inline-flex cursor-pointer items-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent/90 transition-colors">
            Browse Files
            <Upload className="ml-2 h-4 w-4" />
            <input
              type="file"
              className="hidden"
              multiple
              onChange={handleFileInput}
            />
          </label>
          <p className="text-xs text-muted-foreground mt-2">
            Supported formats: CSV, JSON, TXT, XML
          </p>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;