import React from "react";
import { FileDownload, showFile } from "utils/fetchUtils";
import { Button, Divider, Progress, Space } from "antd";
import { FileOutlined } from "@ant-design/icons";
import useCollapse from "react-collapsed";
import "styles.scss";

export default function DownloadEntry({
  file,
  expanded = false,
  onClick,
}: {
  file: FileDownload;
  expanded?: boolean;
  onClick?: (id: string) => void;
}): JSX.Element {
  const { getCollapseProps } = useCollapse({
    isExpanded: expanded,
  });
  const progressVal = file.size <= 0 ? 0 : file.downloadedSize / file.size;

  return (
    <div className="download-entry">
      <div className="entry-desc" onClick={() => onClick?.(file.id)}>
        <div className="entry-icon">
          <FileOutlined
            className="entry-icon-body"
            style={{ fontSize: "34px" }}
          />
        </div>
        <div className="entry-info">
          <span className="file-name" title={file.name}>
            {file.name}
          </span>

          <Progress
            percent={Math.floor(progressVal * 100)}
            status={
              file.status === "active"
                ? "active"
                : file.status === "complete"
                ? "success"
                : file.status === "error"
                ? "exception"
                : "normal"
            }
          />
        </div>
      </div>

      <div {...getCollapseProps()}>
        <Divider />

        <Space id="entry-ext">
          {/* <Button className="">Show in folder</Button> */}
          {file.status === "paused" && (
            <Button type="primary" disabled>
              Resume
            </Button>
          )}
          {file.status === "active" && (
            <Button type="primary" disabled>
              Pause
            </Button>
          )}
          {file.status === "active" ||
            (file.status === "paused" && (
              <Button type="primary" disabled>
                Cancel
              </Button>
            ))}
          {file.status === "complete" && (
            <Button type="primary" onClick={() => showFile(file.id)}>
              Show in folder
            </Button>
          )}
          {file.status === "error" && (
            <Button type="primary" disabled>
              Retry
            </Button>
          )}
        </Space>
      </div>
    </div>
  );
}
