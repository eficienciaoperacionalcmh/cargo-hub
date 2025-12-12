"use client";
import { useEffect, useRef, useState } from "react";

const ViewTableau = ({ autoUpdate, url_tableau, refresh_time_ms }) => {
    const containerRef = useRef(null);
    const vizRef = useRef(null);
    const [tableauLoaded, setTableauLoaded] = useState(false);

    useEffect(() => {
        if (window.tableau) {
            setTableauLoaded(true);
        } else {
            const script = document.createElement("script");
            script.src = "https://public.tableausoftware.com/javascripts/api/tableau_v8.js";
            script.onload = () => setTableauLoaded(true);
            document.body.appendChild(script);
        }
    }, []);

    useEffect(() => {
        if (!tableauLoaded || vizRef.current) return;

        const { tableau } = window;
        vizRef.current = new tableau.Viz(containerRef.current, url_tableau, {
            hideTabs: false,
            width: "100%",
            height: "100%",
        });
    }, [tableauLoaded]);

    const refreshViz = () => {
        if (vizRef.current) {
            vizRef.current.refreshDataAsync().then(
                () => console.log("La data se refrescó correctamente."),
                (error) => console.error("Error al refrescar los datos:", error)
            );
        }
    };

    useEffect(() => {
        if (autoUpdate) {
            const interval = setInterval(refreshViz, refresh_time_ms);
            return () => clearInterval(interval);
        }
    }, [autoUpdate]);

    return (
        <div className="flex-1">
            <div ref={containerRef} className="w-full h-full" />
        </div>
    );
};

export default ViewTableau;
