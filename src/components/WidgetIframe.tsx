import styles from "./WidgetIframe.module.css";

interface WidgetIframeProps {
    src: string;
}

const WidgetIframe = ({ src }: WidgetIframeProps) => (
    <div className={styles.widgetIframe}>
        <iframe
            src={src}
            allowFullScreen
            title="WidgetIframe"
        />
    </div>
);

export default WidgetIframe;
