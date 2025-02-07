import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download } from "lucide-react";

const ExportPanel = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Download className="h-5 w-5" />
          Export Options
        </CardTitle>
        <CardDescription>Export your processed dataset</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button className="w-full" variant="outline">
          Export as CSV
        </Button>
        <Button className="w-full" variant="outline">
          Export as JSON
        </Button>
        <Button className="w-full bg-accent text-white hover:bg-accent/90">
          Export for AI Training
        </Button>
      </CardContent>
    </Card>
  );
};

export default ExportPanel;