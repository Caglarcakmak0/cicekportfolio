import React, { useState, useRef } from "react";
import Grain from "../overlay/Grain";
import "./container.css";
import { useEventListener } from "usehooks-ts";

type CustomCSSProperties = React.CSSProperties & {
    "--width"?: string | number;
    "--height"?: string | number;
    "--gradient"?: string;
    "--highlight-color"?: string;
    "--accent-color"?: string;
    "--border-radius"?: string | number;
    "--top"?: string | number;
    "--left"?: string | number;
    "--is-hovered"?: number;
    "--cursor-x"?: string;
    "--cursor-y"?: string;
    "--angle"?: string | number;
    "--spotlight-color"?: string;
};

type ContainerProps = {
    // size
    width?: string | number;
    height?: string | number;
    borderRadius?: string | number;
    // position
    top?: string | number;
    left?: string | number;
    // colors
    color: string;
    // accent
    accent?: boolean; // TODO: !!
    accentColor?: string;
    accentOffsetX?: string | number; // TODO: !!
    accentOffsetY?: string | number; // TODO: !!
    // blur
    blur?: boolean;
    // border
    border?: boolean; // TODO: !!
    borderColor?: string; // TODO: !!
    // border-highlight
    borderHighlight?: boolean; // TODO: !!
    borderHighlightColor?: string; // TODO: !!
    // spotlight
    spotlight?: boolean; // TODO: !!
    spotlightColor?: string;
    // gradient
    angle?: number;
    // grain
    grain?: boolean; // TODO: !!
    baseFrequency?: string;
    numOctaves?: number;
    // other
    position?: "relative" | "absolute";
    children: React.ReactNode;
};

const resolveSize = (value?: string | number, fallback?: string) => {
    if (typeof value === "number") {
        return `${value}px`;
    }

    if (typeof value === "string" && value.trim().length > 0) {
        return value;
    }

    return fallback ?? "100%";
};

const resolveOffset = (value?: string | number) => {
    if (typeof value === "number") {
        return `${value}px`;
    }

    if (typeof value === "string" && value.trim().length > 0) {
        return value;
    }

    return "0px";
};

const Container: React.FC<ContainerProps> = ({
    width,
    height,
    top = 0,
    left = 0,
    color,
    spotlightColor = "rgba(255, 255, 255, 0.25)", // #ffffff just a bit of white
    accentColor = "rgba(255, 255, 255, 1.0)", // #c673ff Amethyst
    blur = true,
    borderRadius = 0,
    angle,
    baseFrequency = "7",
    numOctaves = 3,
    position = "relative",
    children,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEventListener("mousemove", (e) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
            const { left: containerLeft, top: containerTop } = rect;
            const x = e.clientX - containerLeft;
            const y = e.clientY - containerTop;
            setCursorPosition({ x, y });
        }
    });

    const resolvedWidth = resolveSize(width, "100%");
    const resolvedHeight = resolveSize(height, "100%");
    const resolvedTop = resolveOffset(top);
    const resolvedLeft = resolveOffset(left);
    const resolvedBorderRadius =
        typeof borderRadius === "number" ? `${borderRadius}px` : borderRadius ?? "0px";

    const getGradientStyle = () => {
        if (typeof angle === "number" && !isNaN(angle)) {
            return `linear-gradient(${angle}deg, rgba(255, 255, 255, 0) 0%, ${color} 100%)`;
        }
        return color;
    };

    const blurClasses = blur ? "backdrop-blur-[64px]" : "";

    const grainWidthValue =
        typeof width === "number" ? width : resolvedWidth === "auto" ? "100%" : resolvedWidth;
    const grainHeightValue =
        typeof height === "number" ? height : resolvedHeight === "auto" ? "100%" : resolvedHeight;

    const containerClasses = [
        "container",
        blurClasses,
        position === "absolute" ? "container--absolute" : "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div
            className={containerClasses}
            style={
                {
                    position,
                    "--angle": typeof angle === "number" ? `${angle}deg` : angle,
                    "--width": resolvedWidth,
                    "--height": resolvedHeight,
                    "--gradient": getGradientStyle(),
                    "--spotlight-color": spotlightColor,
                    "--accent-color": accentColor,
                    "--border-radius": resolvedBorderRadius,
                    "--top": resolvedTop,
                    "--left": resolvedLeft,
                    "--is-hovered": isHovered ? 0.5 : 0,
                    "--cursor-x": `${cursorPosition.x}px`,
                    "--cursor-y": `${cursorPosition.y}px`,
                } as CustomCSSProperties
            }
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
            ref={containerRef}
        >
            {children}
            <div className="accent" />
            <div className="spotlight" />
            <div className="border" />
            <div className="border-highlight" />
            <div className="grain">
                <Grain baseFrequency={baseFrequency} numOctaves={numOctaves} w={grainWidthValue} h={grainHeightValue} />
            </div>
        </div>
    );
};

export default Container;
