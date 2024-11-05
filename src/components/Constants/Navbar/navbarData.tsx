import AboutLayout from "@/components/Navbar/NavLayouts/AboutLayout";
import ApplicationLayout from "@/components/Navbar/NavLayouts/ApplicationLayout";
import ProductLayout from "@/components/Navbar/NavLayouts/ProductLayout";
import ResourceGrid from "@/components/Navbar/NavLayouts/ResourceLayout";
import SupportGrid from "@/components/Navbar/NavLayouts/SupportLayout";
import VideoGrid from "@/components/Navbar/NavLayouts/VideoLayout";

export interface NavbarItem {
  name: string;
  link: string;
  component?: React.ReactNode;
  type?: string;
}

export const navbarItems: NavbarItem[] = [
  {
    name: "About Us",
    link: "about",
    component: (
      <AboutLayout
        category={""}
        data={{
          navLeftData: [],
          navRightData: [],
        }}
      />
    ),
  },
  {
    name: "Products",
    link: "product",
    component: (
      <ProductLayout
        setHoveredItem={() => {}}
        setHeading={() => {}}
        setIsVisible={() => {}}
      />
    ),
  },
  {
    name: "Application",
    link: "application",
    component: <ApplicationLayout />,
  },

  {
    name: "Support",
    link: "support",
    component: (
      <SupportGrid
        supportItem={[]}
        supportMobile={{
          mobileFirst: "",
          mobileSecond: "",
        }}
      />
    ),
  },
  {
    name: "Resources",
    link: "resources",
    component: <ResourceGrid supporItem={[]} ResourcesMobile={[]} />,
  },
  {
    name: "Video",
    link: "videos",
    component: <VideoGrid />,
  },
  {
    name: "Contact",
    link: "contact",
  },
];



// import dynamic from "next/dynamic";

// const AboutLayout = dynamic(
//   () => import("@/components/Navbar/NavLayouts/AboutLayout")
// );
// const ApplicationLayout = dynamic(
//   () => import("@/components/Navbar/NavLayouts/ApplicationLayout")
// );
// const ProductLayout = dynamic(
//   () => import("@/components/Navbar/NavLayouts/ProductLayout")
// );
// const ResourceGrid = dynamic(
//   () => import("@/components/Navbar/NavLayouts/ResourceLayout")
// );
// const SupportGrid = dynamic(
//   () => import("@/components/Navbar/NavLayouts/SupportLayout")
// );
// const VideoGrid = dynamic(
//   () => import("@/components/Navbar/NavLayouts/VideoLayout")
// );

// export interface NavbarItem {
//   name: string;
//   link: string;
//   component?: React.ReactNode;
//   type?: string;
// }

// export const navbarItems: NavbarItem[] = [
//   {
//     name: "About Us",
//     link: "about",
//     component: (
//       <AboutLayout
//         category={""}
//         data={{
//           navLeftData: [],
//           navRightData: [],
//         }}
//       />
//     ),
//   },
//   {
//     name: "Products",
//     link: "product",
//     component: (
//       <ProductLayout
//         setHoveredItem={() => {}}
//         setHeading={() => {}}
//         setIsVisible={() => {}}
//       />
//     ),
//   },
//   {
//     name: "Application",
//     link: "application",
//     component: <ApplicationLayout />,
//   },
//   {
//     name: "Support",
//     link: "support",
//     component: (
//       <SupportGrid
//         supportItem={[]}
//         supportMobile={{
//           mobileFirst: "",
//           mobileSecond: "",
//         }}
//       />
//     ),
//   },
//   {
//     name: "Resources",
//     link: "resources",
//     component: <ResourceGrid supporItem={[]} ResourcesMobile={[]} />,
//   },
//   {
//     name: "Video",
//     link: "videos",
//     component: <VideoGrid />,
//   },
//   {
//     name: "Contact",
//     link: "contact",
//   },
// ];
