import { lazy } from "react";

export const ProductsPage = lazy(() => import("@/pages/products/products"));
export const AboutPage = lazy(() => import("@/pages/about/about"));
export const UserProfilePage = lazy(() => import("@/pages/userprofile/userProfile"));
export const OrderPage = lazy(() => import("@/pages/order/order"));
