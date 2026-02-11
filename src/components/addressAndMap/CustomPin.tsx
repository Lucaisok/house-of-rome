import React from "react";
import styles from "./CustomPin.module.css";

interface CustomPinProps {
    name: string;
}

const CustomPin: React.FC<CustomPinProps> = ({ name }) => (
    <div className={styles.customPin}>{name}</div>
);

export default CustomPin;
