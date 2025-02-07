import { useState } from "react";
import { Upload } from "lucide-react";
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
  };

  return (
    <div className="w-full p-6">
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center ${
          isDragging
            ? "border-accent bg-accent/10"
            : "border-gray-300 hover:border-accent"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-sm font-semibold">Drag and drop your files</h3>
        <p className="mt-1 text-sm text-gray-500">or</p>
        <label className="mt-4 inline-flex cursor-pointer items-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent/90">
          Browse Files
          <input
            type="file"
            className="hidden"
            multiple
            onChange={handleFileInput}
          />
        </label>
      </div>
    </div>
  );
};

export default FileUpload;