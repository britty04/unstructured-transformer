import FileUpload from "@/components/FileUpload";
import DataPreview from "@/components/DataPreview";
import TransformPanel from "@/components/TransformPanel";
import ExportPanel from "@/components/ExportPanel";
import StatsDashboard from "@/components/StatsDashboard";

const Index = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-primary">
          AI-Ready Dataset Creator
        </h1>
        <p className="mt-2 text-gray-600">
          Transform your unstructured data into AI-ready datasets
        </p>
      </div>

      <div className="mb-8">
        <FileUpload />
      </div>

      <div className="mb-8">
        <StatsDashboard />
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <DataPreview />
        </div>
        <div className="space-y-8">
          <TransformPanel />
          <ExportPanel />
        </div>
      </div>
    </div>
  );
};

export default Index;