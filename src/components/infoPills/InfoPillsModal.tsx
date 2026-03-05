"use client";

import { useEffect } from "react";
import { X, type LucideIcon } from "lucide-react";
import styles from "./InfoPillsModal.module.css";

type InfoItem = {
    key: string;
    label: string;
    icon: LucideIcon;
};

type HighlightItem = {
    key: string;
    label: string;
    icon: LucideIcon;
};

interface InfoPillsModalProps {
    isOpen: boolean;
    title: string;
    infos: InfoItem[];
    highlights: HighlightItem[];
    onClose: () => void;
}

export const InfoPillsModal = ({ isOpen, title, infos, highlights, onClose }: InfoPillsModalProps) => {
    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose} role="presentation">
            <div
                className={styles.modal}
                role="dialog"
                aria-modal="true"
                aria-label={title}
                onClick={(event) => event.stopPropagation()}
            >
                <div className={styles.header}>
                    <h3 className={styles.title}>{title}</h3>
                    <button
                        type="button"
                        onClick={onClose}
                        className={styles.closeButton}
                        aria-label="Close info modal"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className={styles.grid}>
                    {highlights.map((highlight) => {
                        const Icon = highlight.icon;
                        return (
                            <div key={highlight.key} className={`${styles.item} ${styles.itemHighlight}`}>
                                <Icon size={24} className={styles.icon} />
                                <span>{highlight.label}</span>
                            </div>
                        );
                    })}
                    {highlights.length > 0 && infos.length > 0 && <div className={styles.groupSpacer} aria-hidden="true" />}
                    {infos.map((info) => {
                        const Icon = info.icon;
                        return (
                            <div key={info.key} className={styles.item}>
                                <Icon size={24} className={styles.icon} />
                                <span>{info.label}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
