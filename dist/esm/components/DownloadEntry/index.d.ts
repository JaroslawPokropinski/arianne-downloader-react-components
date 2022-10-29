/// <reference types="react" />
import { FileDownload } from "utils/fetchUtils";
import "./styles.css";
export default function DownloadEntry({ file, expanded, onClick, }: {
    file: FileDownload;
    expanded?: boolean;
    onClick?: (id: string) => void;
}): JSX.Element;
