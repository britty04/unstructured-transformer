import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download, FileJson, FileSpreadsheet, Brain } from "lucide-react";

const ExportPanel = () => {
  return (
    <Card className="shadow-lg border-gray-200">
      <CardHeader className="space-y-1">
        <CardTitle className="flex items-center gap-2">
          <Download className="h-5 w-5 text-accent" />
          Export Options
        </CardTitle>
        <CardDescription>Export your processed dataset</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button className="w-full gap-2" variant="outline">
          <FileSpreadsheet className="h-4 w-4" />
          Export as CSV
        </Button>
        <Button className="w-full gap-2" variant="outline">
          <FileJson className="h-4 w-4" />
          Export as JSON
        </Button>
        <Button className="w-full gap-2 bg-accent text-white hover:bg-accent/90">
          <Brain className="h-4 w-4" />
          Export for AI Training
        </Button>
      </CardContent>
    </Card>
  );
};

export default ExportPanel;