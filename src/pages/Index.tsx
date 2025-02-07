import FileUpload from "@/components/FileUpload";
import DataPreview from "@/components/DataPreview";
import TransformPanel from "@/components/TransformPanel";
import ExportPanel from "@/components/ExportPanel";
import StatsDashboard from "@/components/StatsDashboard";
import { Database, BrainCircuit } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Database className="h-10 w-10 text-accent" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI-Ready Dataset Creator
            </h1>
            <BrainCircuit className="h-10 w-10 text-primary" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your unstructured data into AI-ready datasets with our intuitive tools
          </p>
        </div>

        <div className="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <FileUpload />
        </div>

        <div className="mb-8">
          <StatsDashboard />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Data Preview</h2>
              <DataPreview />
            </div>
          </div>
          <div className="space-y-8">
            <TransformPanel />
            <ExportPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;