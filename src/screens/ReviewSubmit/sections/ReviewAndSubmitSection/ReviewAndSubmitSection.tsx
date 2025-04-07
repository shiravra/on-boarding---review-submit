import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

// Campaign data
const campaignSetupData = {
  name: "NutraBoost Daily Gummies",
  brand: "NutraBoost",
  objective: "Lead generation campaign",
  landingPageUrl: "https://www.boostnutra.com/?srs",
};

const scheduleData = {
  campaignSchedule: "20 Mar 2025 - 24 Mar 2025",
};

const targetingData = {
  country: "United States",
  region: "All Regions",
  platform: "Mobile, Desktop",
};

const bidBudgetData = {
  bidStrategy: "Max conversions",
  mobileDailyBudget: "25$",
  mobileMonthly: "Up to $750/Monthly",
  desktopDailyBudget: "25$",
  desktopMonthly: "Up to $750/Monthly",
};

const campaignAdsData = [
  {
    image: "https://c.animaapp.com/m963xbrqdqnMBv/img/image.png",
    title: "Your optimal health and nutrition shouldn't be a mystery",
    sponsor: "Glasses USA | Sponsored",
  },
  {
    image: "https://c.animaapp.com/m963xbrqdqnMBv/img/image-1.png",
    title:
      "Healthy Hair Bundle - Magnesium, Hair, Skin and Nails Complex & Biotin",
    sponsor: "Glasses USA | Sponsored",
  },
  {
    image: "https://c.animaapp.com/m963xbrqdqnMBv/img/image-2.png",
    title: "Multivitamin And Mineral For Children and Adults",
    sponsor: "Glasses USA | Sponsored",
  },
  {
    image: "https://c.animaapp.com/m963xbrqdqnMBv/img/image-4.png",
    title:
      "High quality supplements crafted with genuine integrity for exceptional effectiveness",
    sponsor: "Glasses USA | Sponsored",
  },
  {
    image: "https://c.animaapp.com/m963xbrqdqnMBv/img/image-5.png",
    title:
      "Healthy Hair Bundle - Magnesium, Hair, Skin and Nails Complex & Biotin",
    sponsor: "Glasses USA | Sponsored",
  },
  {
    image: "https://c.animaapp.com/m963xbrqdqnMBv/img/image-6.png",
    title: "Your optimal health and nutrition shouldn't be a mystery",
    sponsor: "Glasses USA | Sponsored",
  },
];

export const ReviewAndSubmitSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center gap-5 w-full py-8">
      <header className="flex flex-col items-center justify-center gap-3 w-full">
        <div className="flex flex-col w-full max-w-[860px] items-center gap-2">
          <h1 className="font-bold font-['Roboto',Helvetica] text-gray-9 text-[28px] text-center leading-10">
            Hooray! You've created your first campaign 🚀
          </h1>
          <p className="w-full max-w-[566px] font-['Roboto',Helvetica] text-gray-7 text-xl text-center leading-[26px]">
            Review and approve your campaign settings. The campaign will not
            launch until it approved by content review.
          </p>
        </div>
      </header>

      <div className="flex flex-wrap justify-center gap-4 w-full max-w-[1120px]">
        <div className="flex flex-col w-full max-w-[544px] gap-4">
          {/* Campaign Setup Card */}
          <Card className="border border-solid border-[#d4d9df] rounded-md">
            <CardHeader className="p-6 pb-0">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-end gap-2">
                  <img
                    className="w-6 h-6"
                    alt="Campaign"
                    src="https://c.animaapp.com/m963xbrqdqnMBv/img/campaign.svg"
                  />
                  <h2 className="font-['Roboto',Helvetica] font-semibold text-gray-9 text-xl leading-4 whitespace-nowrap">
                    Campaign setup
                  </h2>
                  <span className="font-['Roboto',Helvetica] text-gray-7 text-[13px] leading-4 whitespace-nowrap">
                    (2 Campaigns)
                  </span>
                </div>
                <button className="flex items-center">
                  <img
                    className="w-5 h-5"
                    alt="Edit"
                    src="https://c.animaapp.com/m963xbrqdqnMBv/img/edit.svg"
                  />
                </button>
              </div>
            </CardHeader>
            <Separator className="mx-6 my-5" />
            <CardContent className="p-6 pt-0">
              <div className="flex flex-col gap-6 w-full">
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col w-[244px] gap-2">
                    <label className="font-['Roboto',Helvetica] text-gray-9 text-[13px] leading-[13px]">
                      Campaign name
                    </label>
                    <p className="font-16-bold font-bold text-gray-9 text-base">
                      {campaignSetupData.name}
                    </p>
                  </div>
                  <div className="flex flex-col w-[244px] gap-2">
                    <label className="font-['Roboto',Helvetica] text-gray-9 text-[13px] leading-[13px]">
                      Brand name
                    </label>
                    <p className="font-16-bold font-bold text-gray-9 text-base">
                      {campaignSetupData.brand}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col w-[244px] gap-2">
                    <label className="font-['Roboto',Helvetica] text-gray-9 text-[13px] leading-[13px]">
                      Marketing objective
                    </label>
                    <p className="font-16-bold font-bold text-gray-9 text-base">
                      {campaignSetupData.objective}
                    </p>
                  </div>
                  <div className="flex flex-col w-[244px] gap-2">
                    <label className="font-['Roboto',Helvetica] text-gray-9 text-[13px] leading-[13px]">
                      Landing page URL
                    </label>
                    <p className="font-16-bold font-bold text-gray-9 text-base">
                      {campaignSetupData.landingPageUrl}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Schedule Card */}
          <Card className="border border-solid border-[#d4d9df] rounded-md">
            <CardHeader className="p-6 pb-0">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <img
                    className="w-6 h-6"
                    alt="Watch later"
                    src="https://c.animaapp.com/m963xbrqdqnMBv/img/watch-later.svg"
                  />
                  <h2 className="font-['Roboto',Helvetica] font-semibold text-gray-9 text-xl leading-4 whitespace-nowrap">
                    Schedule
                  </h2>
                  <span className="font-['Roboto',Helvetica] text-gray-7 text-[13px] leading-4 whitespace-nowrap">
                    (2 Campaigns)
                  </span>
                </div>
                <button className="flex items-center">
                  <img
                    className="w-5 h-5"
                    alt="Edit"
                    src="https://c.animaapp.com/m963xbrqdqnMBv/img/edit.svg"
                  />
                </button>
              </div>
            </CardHeader>
            <Separator className="mx-6 my-5" />
            <CardContent className="p-6 pt-0">
              <div className="flex flex-wrap gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-['Roboto',Helvetica] text-gray-9 text-[13px] leading-[13px]">
                    Campaign schedule
                  </label>
                  <div className="flex items-start gap-1">
                    <p className="font-16-bold font-bold text-gray-9 text-base whitespace-nowrap">
                      {scheduleData.campaignSchedule}
                    </p>
                    <img
                      className="w-[16px] h-[16px] ml-1"
                      alt="Help"
                      src="https://c.animaapp.com/m963xbrqdqnMBv/img/16---help-1.svg"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Targeting Card */}
          <Card className="border border-solid border-[#d4d9df] rounded-md">
            <CardHeader className="p-6 pb-0">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <img
                    className="w-6 h-6"
                    alt="Person outline"
                    src="https://c.animaapp.com/m963xbrqdqnMBv/img/person-outline.svg"
                  />
                  <h2 className="font-['Roboto',Helvetica] font-semibold text-gray-9 text-xl leading-4 whitespace-nowrap">
                    Targeting
                  </h2>
                  <span className="font-['Roboto',Helvetica] text-gray-7 text-[13px] leading-4 whitespace-nowrap">
                    (2 Campaigns)
                  </span>
                </div>
                <button className="flex items-center">
                  <img
                    className="w-5 h-5"
                    alt="Edit"
                    src="https://c.animaapp.com/m963xbrqdqnMBv/img/edit.svg"
                  />
                </button>
              </div>
            </CardHeader>
            <Separator className="mx-6 my-5" />
            <CardContent className="p-6 pt-0">
              <div className="flex w-full">
                <div className="w-1/3 flex flex-col gap-2">
                  <label className="font-['Roboto',Helvetica] text-gray-9 text-[13px] leading-[13px]">
                    Targeting country
                  </label>
                  <p className="font-16-bold font-bold text-gray-9 text-base">
                    {targetingData.country}
                  </p>
                </div>
                <div className="w-1/3 flex flex-col gap-2">
                  <label className="font-['Roboto',Helvetica] text-gray-9 text-[13px] leading-[13px]">
                    Region
                  </label>
                  <p className="font-16-bold font-bold text-gray-9 text-base">
                    {targetingData.region}
                  </p>
                </div>
                <div className="w-1/3 flex flex-col gap-2">
                  <label className="font-['Roboto',Helvetica] text-gray-9 text-[13px] leading-[13px]">
                    Platform
                  </label>
                  <p className="font-16-bold font-bold text-gray-9 text-base">
                    {targetingData.platform}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bid & Budget Card */}
          <Card className="border border-solid border-[#d4d9df] rounded-md">
            <CardHeader className="p-6 pb-0">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <img
                    className="w-6 h-6"
                    alt="Monetization on"
                    src="https://c.animaapp.com/m963xbrqdqnMBv/img/monetization-on.svg"
                  />
                  <h2 className="font-['Roboto',Helvetica] font-semibold text-gray-9 text-xl leading-4 whitespace-nowrap">
                    Bid &amp; budget
                  </h2>
                  <span className="font-['Roboto',Helvetica] text-gray-7 text-[13px] leading-4 whitespace-nowrap">
                    (2 Campaigns)
                  </span>
                </div>
                <button className="flex items-center">
                  <img
                    className="w-5 h-5"
                    alt="Edit"
                    src="https://c.animaapp.com/m963xbrqdqnMBv/img/edit.svg"
                  />
                </button>
              </div>
            </CardHeader>
            <Separator className="mx-6 my-5" />
            <CardContent className="p-6 pt-0 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="font-['Roboto',Helvetica] text-gray-9 text-[13px] leading-[13px]">
                  Bid strategy
                </label>
                <div className="flex items-center gap-2">
                  <p className="font-16-bold font-bold text-gray-9 text-base whitespace-nowrap">
                    {bidBudgetData.bidStrategy}
                  </p>
                  <img
                    className="w-4 h-4"
                    alt="Help"
                    src="https://c.animaapp.com/m963xbrqdqnMBv/img/16---help.svg"
                  />
                </div>
              </div>
              <div className="flex w-full gap-6">
                <div className="flex-1 flex flex-col gap-2">
                  <label className="font-['Roboto',Helvetica] text-gray-9 text-[13px] leading-[13px]">
                    Mobile Daily budget
                  </label>
                  <div className="flex items-end gap-2">
                    <p className="font-16-bold font-bold text-gray-9 text-base whitespace-nowrap">
                      {bidBudgetData.mobileDailyBudget}
                    </p>
                    <span className="font-['Roboto',Helvetica] text-gray-7 text-xs text-center leading-3 whitespace-nowrap">
                      {bidBudgetData.mobileMonthly}
                    </span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label className="font-['Roboto',Helvetica] text-gray-9 text-[13px] leading-[13px]">
                    Desktop Daily budget
                  </label>
                  <div className="flex items-end gap-2">
                    <p className="font-16-bold font-bold text-gray-9 text-base whitespace-nowrap">
                      {bidBudgetData.desktopDailyBudget}
                    </p>
                    <span className="font-['Roboto',Helvetica] text-gray-7 text-xs text-center leading-3 whitespace-nowrap">
                      {bidBudgetData.desktopMonthly}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Campaign Ads Card */}
        <Card className="border border-solid border-[#d4d9df] rounded-md w-full max-w-[544px]">
          <CardHeader className="p-6 pb-0">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <img
                  className="w-6 h-6"
                  alt="Ad units"
                  src="https://c.animaapp.com/m963xbrqdqnMBv/img/ad-units.svg"
                />
                <h2 className="font-['Roboto',Helvetica] font-semibold text-gray-9 text-xl leading-4 whitespace-nowrap">
                  Campaign ads
                </h2>
                <span className="font-['Roboto',Helvetica] text-gray-7 text-[13px] leading-4 whitespace-nowrap">
                  (2 Campaigns)
                </span>
              </div>
              <Button
                variant="outline"
                className="h-7 px-2 py-0.5 text-xs font-medium text-gray-7 border-[#9ca8b5] rounded"
              >
                Edit Ads
              </Button>
            </div>
          </CardHeader>
          <Separator className="mx-6 my-5" />
          <CardContent className="p-6 pt-0 flex flex-col gap-4 h-full">
            <label className="font-['Roboto',Helvetica] text-gray-9 text-[13px] leading-[13px]">
              10 Ads Variation
            </label>
            <div className="flex items-start justify-between w-full h-full">
              <div className="flex flex-wrap gap-3 w-full">
                {campaignAdsData.map((ad, index) => (
                  <div
                    key={index}
                    className="flex flex-col w-[236px] gap-2 bg-white"
                  >
                    <img
                      className="w-full h-[133px] object-cover"
                      alt={`Ad image ${index + 1}`}
                      src={ad.image}
                    />
                    <div className="font-['Roboto',Helvetica] text-gray-9 text-[13.2px] leading-[13.2px]">
                      <span className="font-bold text-[#212832] leading-[15.9px]">
                        {ad.title}{" "}
                      </span>
                      <span className="text-[#667686] text-[10.2px] leading-[14.9px]">
                        {ad.sponsor}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-[3.72px] h-[66px] bg-[#9fa7b2] rounded-[42px]" />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
