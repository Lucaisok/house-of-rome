"use client";

import { useEffect } from "react";

export const TransparentHeader = () => {
    useEffect(() => {
        document.body.classList.add("transparent-header");
        return () => document.body.classList.remove("transparent-header");
    }, []);

    return null;
};
