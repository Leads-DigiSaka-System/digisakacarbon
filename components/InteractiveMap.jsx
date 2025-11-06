"use client";

import { useState, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

// Dynamic import for Map component
const Map = dynamic(() => import("./Map").then((mod) => mod.default), {
  ssr: false,
});

// Sample farm data
const farms = [
  {
    id: "FARM254",
    name: "Rice Farm 254",
    location: "San Fernando, Pampanga",
    coordinates: [15.0333, 120.6833],
    farmerId: "MARK FORONDA",
    area: 0.05,
    dateCreated: "2024-03-19",
    image: "/images/farm-254.jpg",
    type: "Rice Farm",
  },
];

export default function InteractiveMap() {
  const [selectedFarm, setSelectedFarm] = useState(null);
  const [highlightedFarm, setHighlightedFarm] = useState(null);
  const mapRef = useRef(null);

  const handleFarmClick = (farm) => {
    setSelectedFarm(farm);
    setHighlightedFarm(farm.id);

    if (mapRef.current) {
      mapRef.current.setView(farm.coordinates, 6, {
        animate: true,
        duration: 1,
      });
    }

    setTimeout(() => {
      setHighlightedFarm(null);
    }, 3000);
  };

  return (
    <div className="flex w-full h-full">
      <div className="relative flex-1">
        <Map
          farms={farms}
          highlightedFarm={highlightedFarm}
          onFarmSelect={handleFarmClick}
          mapRef={mapRef}
        />

        {selectedFarm && (
          <div className="absolute z-10 overflow-hidden bg-white border shadow-lg top-4 right-4 rounded-xl w-80">
            <Card className="border-0">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-lg font-black text-dark-green">
                      Farm Details
                    </CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {selectedFarm.location}
                    </CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedFarm(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="space-y-1">
                    <div className="text-gray-500">Farm ID</div>
                    <div className="font-semibold">{selectedFarm.id}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-gray-500">Area</div>
                    <div className="font-semibold">{selectedFarm.area} ha</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-gray-500">Farmer</div>
                    <div className="font-semibold">{selectedFarm.farmerId}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-gray-500">Date Created</div>
                    <div className="font-semibold">
                      {selectedFarm.dateCreated}
                    </div>
                  </div>
                </div>

                {selectedFarm.image && (
                  <div className="pt-2">
                    <p className="mb-2 text-sm font-medium text-gray-500">
                      Farm Image
                    </p>
                    <div className="overflow-hidden border rounded-lg border-light-green/30">
                      <Image
                        src={selectedFarm.image}
                        alt={`Farm ${selectedFarm.id}`}
                        width={320}
                        height={200}
                        className="object-cover w-full h-48"
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
