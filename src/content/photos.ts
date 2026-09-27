// Licensed external photography. Sources and licences are recorded in IMAGE_CREDITS.md.
import brooding1600 from "@/assets/photos/poultry-brooding-1600.webp.asset.json";
import brooding800 from "@/assets/photos/poultry-brooding-800.webp.asset.json";
import rearing1600 from "@/assets/photos/poultry-rearing-1600.webp.asset.json";
import rearing800 from "@/assets/photos/poultry-rearing-800.webp.asset.json";
import eggs1600 from "@/assets/photos/poultry-laying-eggs-1600.webp.asset.json";
import eggs800 from "@/assets/photos/poultry-laying-eggs-800.webp.asset.json";
import milling1600 from "@/assets/photos/feeds-maize-milling-1600.webp.asset.json";
import milling800 from "@/assets/photos/feeds-maize-milling-800.webp.asset.json";
import maize1600 from "@/assets/photos/feeds-maize-1600.webp.asset.json";
import maize800 from "@/assets/photos/feeds-maize-800.webp.asset.json";
import sunflower1600 from "@/assets/photos/feeds-sunflower-1600.webp.asset.json";
import sunflower800 from "@/assets/photos/feeds-sunflower-800.webp.asset.json";
import field1600 from "@/assets/photos/impact-field-demo-1600.webp.asset.json";
import field800 from "@/assets/photos/impact-field-demo-800.webp.asset.json";
import gchicks1600 from "@/assets/photos/genetics-chicks-1600.webp.asset.json";
import gchicks800 from "@/assets/photos/genetics-chicks-800.webp.asset.json";
import chickWater1600 from "@/assets/photos/kenya-chick-water-1600.webp.asset.json";
import chickWater800 from "@/assets/photos/kenya-chick-water-800.webp.asset.json";

export type Photo = { src: string; srcSet: string; width: number; height: number; credit: string };

const p = (large: { url: string }, small: { url: string }, width: number, height: number, credit: string): Photo => ({
  src: large.url,
  srcSet: `${small.url} 800w, ${large.url} 1600w`,
  width,
  height,
  credit,
});

export const photos = {
  brooding: p(brooding1600, brooding800, 1600, 1200, "Photo: LubGua987, CC BY-SA 4.0, via Wikimedia Commons"),
  rearing: p(rearing1600, rearing800, 1200, 1600, "Photo: MmaBaggio, CC BY-SA 4.0, via Wikimedia Commons"),
  eggs: p(eggs1600, eggs800, 800, 1600, "Photo: EstherDje, CC BY-SA 4.0, via Wikimedia Commons"),
  maizeMilling: p(milling1600, milling800, 1600, 1060, "Photo: Emmanuel Ssekaggo, CC BY-SA 4.0, via Wikimedia Commons"),
  maize: p(maize1600, maize800, 1200, 1600, "Photo: Gaurav Dhwaj Khadka, CC BY-SA 4.0, via Wikimedia Commons"),
  sunflower: p(sunflower1600, sunflower800, 1200, 900, "Photo: Mx. Granger, CC0, via Wikimedia Commons"),
  fieldDemo: p(field1600, field800, 1600, 1200, "Photo: ILRI, CC BY 2.0, via Wikimedia Commons"),
  geneticsChicks: p(gchicks1600, gchicks800, 1560, 1560, "Photo: ELTORO.VET, CC0, via Wikimedia Commons"),
  chickWater: p(chickWater1600, chickWater800, 1200, 844, "Photo: Yganyana, CC BY-SA 4.0, via Wikimedia Commons"),
} satisfies Record<string, Photo>;
