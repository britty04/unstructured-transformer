import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WandIcon, Sparkles, Binary, FilterX } from "lucide-react";

const TransformPanel = () => {
  return (
    <Card className="shadow-lg border-gray-200">
      <CardHeader className="space-y-1">
        <CardTitle className="flex items-center gap-2">
          <WandIcon className="h-5 w-5 text-accent" />
          Transform Data
        </CardTitle>
        <CardDescription>Apply transformations to your dataset</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button className="w-full gap-2" variant="outline">
          <Sparkles className="h-4 w-4" />
          Clean Missing Values
        </Button>
        <Button className="w-full gap-2" variant="outline">
          <Binary className="h-4 w-4" />
          Normalize Data
        </Button>
        <Button className="w-full gap-2" variant="outline">
          <FilterX className="h-4 w-4" />
          Remove Duplicates
        </Button>
      </CardContent>
    </Card>
  );
};

export default TransformPanel;