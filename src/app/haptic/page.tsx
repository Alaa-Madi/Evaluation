"use client"
import AnimatedSections from "@/components/animation/animationSection";
import { InfityBrandScroll } from "@/components/Brands/infiniteScroll";
import HapticFooter from "@/components/Footer/hapticFooter";
import HapticHeader from "@/components/Header/hapticHeader";
import PricingSection from "@/components/Pricing/pricingPlan";
import ProjectList from "@/components/projects/projects";
import VideoSection from "@/components/Video/videoCard";
import WhyHaptics from "@/components/WhyHaptic/why";
import Partners from "@/pages/partner";
import WorkHaptic from "@/pages/work";
import { useState } from "react";

const Haptic: React.FC = () => {

    const [open, setOpen] = useState(false);

    const toggleDrawer = (open: boolean) => (
        event?: React.KeyboardEvent | React.MouseEvent
    ) => {
        if (event && event.type === 'keydown' && (event as React.KeyboardEvent).key === 'Tab') {
            return;
        }
        setOpen(open);
    };
    return (
        <>
            <HapticHeader open={open} toggleDrawer={toggleDrawer} />
            <Partners />
            <AnimatedSections />
            <WhyHaptics />
            <VideoSection />
            <InfityBrandScroll />
            <ProjectList/>
            <PricingSection />
            <AnimatedSections />
            <WorkHaptic toggleDrawer={toggleDrawer} />
            <HapticFooter />
        </>
    );
};
export default Haptic;
