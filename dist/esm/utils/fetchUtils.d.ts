export declare function downloadFile(linkUrl: string, pageUrl: string): Promise<{
    id: string;
}>;
export declare function showFile(fileId: string): Promise<{
    id: string;
}>;
export declare type FileDownload = {
    id: string;
    createdDate: number;
    name: string;
    size: number;
    downloadedSize: number;
    status: "active" | "waiting" | "error" | "paused" | "removed" | "complete";
};
export declare type GetDownloadsType = {
    files: FileDownload[];
};
export declare const GET_DOWNLOADS: import("@apollo/client").DocumentNode;
