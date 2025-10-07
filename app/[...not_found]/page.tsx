import { notFound } from "next/navigation";

export const runtime = "edge";

const CatchAllRoute = () => {
    notFound();
    return null;
};

export default CatchAllRoute;

