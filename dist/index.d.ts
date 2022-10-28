/// <reference types="react" />
import { FileDownload } from 'utils/fetchUtils';

declare function DownloadEntry({ file, expanded, onClick, }: {
    file: FileDownload;
    expanded?: boolean;
    onClick?: (id: string) => void;
}): JSX.Element;

declare function DownloadsList(): JSX.Element;

export { DownloadEntry, DownloadsList as DownloadList };
