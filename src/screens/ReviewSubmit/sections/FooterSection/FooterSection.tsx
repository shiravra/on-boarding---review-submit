import { ArrowLeftIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-white py-3">
      <Separator className="w-full bg-gray-4" />

      <div className="flex justify-between items-center px-4 pt-3.5">
        <Button
          variant="ghost"
          className="flex items-center gap-0.5 text-gray-7 text-xs font-medium tracking-[0.50px] leading-6 p-2"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          Back
        </Button>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="text-blue border-[#4d86ec] text-xs font-medium tracking-[0.50px] leading-6 px-4 py-2 h-auto"
          >
            Save Draft
          </Button>

          <Button className="bg-blue hover:bg-blue/90 text-white text-xs font-medium tracking-[0.50px] leading-6 px-4 py-2 h-auto">
            Submit &amp; Set Payment
          </Button>
        </div>
      </div>
    </footer>
  );
};
