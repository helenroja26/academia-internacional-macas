import { BRAND_LOGO_PATH, BRAND_NAME } from "@shared/const";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  alt?: string;
};

export default function BrandLogo({
  className,
  imageClassName,
  alt = BRAND_NAME,
}: BrandLogoProps) {
  return (
    <div className={cn("flex items-center justify-center overflow-hidden", className)}>
      <img
        src={BRAND_LOGO_PATH}
        alt={alt}
        className={cn("h-full w-full object-contain", imageClassName)}
      />
    </div>
  );
}