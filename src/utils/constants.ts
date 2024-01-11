import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";

export const perks = [
  {
    name: "Instant Delivery",
    icon: ArrowDownToLine,
    description:
      "Get your assets delivered to your email in seconds and download them right way",
  },

  {
    name: "Quaranteed Quality",
    icon: CheckCircle,
    description:
      "Every product in our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 10-day refund quarantee.",
  },

  {
    name: "For the Planet",
    icon: Leaf,
    description:
      "We've pledged 1% of saled to the preservation and restoration of the natural environment",
  },
];

export const PRODUCT_CATEGORIES = [
  {
    label: "UI Kits",
    value: "ui_kits" as const,
    featured: [
      {
        name: "Editor Picks",
        href: "#",
        imageSrc: "/assets/mixed.jpg",
      },
      {
        name: "New Arrivals",
        href: "#",
        imageSrc: "/assets/blue.jpg",
      },
      {
        name: "Best Sellers",
        href: "#",
        imageSrc: "/assets/blue.jpg",
      },
    ],
  },

  {
    label: "Icons",
    value: "icons" as const,
    featured: [
      {
        name: "Favourite Icon Picks",
        href: "#",
        imageSrc: "/assets/picks.jpg",
      },
      {
        name: "New Arrivals",
        href: "#",
        imageSrc: "/assets/new.jpg",
      },
      {
        name: "Best Sellers",
        href: "#",
        imageSrc: "/assets/bestsellers.jpg",
      },
    ],
  },
];
