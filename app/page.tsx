import { WSelect } from "@/components/washington";
import { Apple, Camera, Heart, Star, BookCheck, File, Globe } from "lucide-react";

export default function Home() {
  const fruits = [
    { value: "apple", label: "Apple", icon: <Apple className="h-4 w-4" /> },
    { value: "camera", label: "Camera", icon: <Camera className="h-4 w-4" /> },
    { value: "heart", label: "Heart", icon: <Heart className="h-4 w-4" /> },
    { value: "star", label: "Star", icon: <Star className="h-4 w-4" /> },
  ];

  const itemsWithDescriptions = [
    {
      value: "documentation",
      label: "Documentation",
      description: "View project documentation",
      icon: <File className="h-4 w-4" />,
      group: "Resources",
    },
    {
      value: "website",
      label: "Website",
      description: "Visit our website",
      icon: <Globe className="h-4 w-4" />,
      group: "Resources",
    },
    {
      value: "tutorial",
      label: "Tutorial",
      description: "Learn how to use our product",
      icon: <BookCheck className="h-4 w-4" />,
      group: "Learn",
    },
  ];

  return (
    <div className="min-h-screen p-8 bg-bg-default">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-2xl font-semibold text-fg-default">WSelect Component</h1>
        
        <div className="space-y-6">
          <div>
            <h2 className="font-medium text-fg-default mb-3">Basic Usage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-80">
                <label className="block text-sm font-medium text-fg-default mb-1">
                  Default
                </label>
                <WSelect
                  placeholder="Select a fruit"
                  items={fruits}
                />
              </div>
              <div className="w-80">
                <label className="block text-sm font-medium text-fg-default mb-1">
                  With selected value
                </label>
                <WSelect
                  value="camera"
                  items={fruits}
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-medium text-fg-default mb-3">States</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-80">
                <label className="block text-sm font-medium text-fg-default mb-1">
                  Disabled
                </label>
                <WSelect
                  placeholder="Select a fruit"
                  items={fruits}
                  disabled
                />
              </div>
              <div className="w-80">
                <label className="block text-sm font-medium text-fg-default mb-1">
                  Error state
                </label>
                <WSelect
                  placeholder="Select a fruit"
                  items={fruits}
                  error={true}
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-medium text-fg-default mb-3">
              With Icons and Descriptions
            </h2>
            <div className="w-80">
              <WSelect
                placeholder="Select an option"
                items={itemsWithDescriptions}
              />
            </div>
          </div>

          <div>
            <h2 className="font-medium text-fg-default mb-3">
              Narrow Width
            </h2>
            <div className="w-[200px]">
              <WSelect
                placeholder="Select a fruit"
                items={fruits}
                widthClassName="w-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
