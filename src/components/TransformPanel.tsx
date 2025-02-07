import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WandIcon } from "lucide-react";

const TransformPanel = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <WandIcon className="h-5 w-5" />
          Transform Data
        </CardTitle>
        <CardDescription>Apply transformations to your dataset</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button className="w-full" variant="outline">
          Clean Missing Values
        </Button>
        <Button className="w-full" variant="outline">
          Normalize Data
        </Button>
        <Button className="w-full" variant="outline">
          Remove Duplicates
        </Button>
      </CardContent>
    </Card>
  );
};

export default TransformPanel;