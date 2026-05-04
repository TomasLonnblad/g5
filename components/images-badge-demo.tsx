"use client";
import { ImagesBadge } from "@/components/ui/images-badge";

export default function ImagesBadgeDemo() {
  return (
    <div className="flex h-[10rem] align-middle absolute bottom-0 left-40 h-16 w-16">
      <ImagesBadge
        text=""
        images={[
          "https://tomaslonnblad.github.io/jagx.jpg",
          "https://tomaslonnblad.github.io/6.jpg",
          "https://tomaslonnblad.github.io/7.jpg",
        ]}
      />
    </div>
  );
}
