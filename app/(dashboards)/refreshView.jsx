"use client";
import { Progress, Switch } from "antd";
import { useSmoothProgress } from "@/app/(dashboards)/useSmoothProgress";

const ViewRefresh = ({ autoUpdate, setAutoUpdate, refresh_time_ms }) => {
    const progress = useSmoothProgress({
        isActive: autoUpdate,
        totalSeconds: refresh_time_ms,
        onComplete: () => {
            console.log("Actualización completa");
        },
    });

    return (
        <div className="flex flex-col bg-gray-100 w-full items-center justify-center py-2">
            <div className="flex flex-row justify-between items-center w-full max-w-4xl">
                <span className="text-sm text-black w-36">Auto-Update:</span>
                <Switch checked={autoUpdate} onChange={setAutoUpdate} />
                <Progress percent={progress} showInfo={false} className="inverted-progress px-4" />
            </div>
        </div>
    );
};

export default ViewRefresh;
