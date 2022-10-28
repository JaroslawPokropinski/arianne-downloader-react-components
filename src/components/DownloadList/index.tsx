import React, { useMemo, useState } from "react";
import { useQuery } from "@apollo/client";
import { GetDownloadsType, GET_DOWNLOADS } from "utils/fetchUtils";
import DownloadEntry from "components/DownloadEntry";
import { Empty, Space } from "antd";
import { getMessage } from "utils/browserUtils";
import "styles.scss";

export default function DownloadsList(): JSX.Element {
  const { data } = useQuery<GetDownloadsType>(GET_DOWNLOADS, {
    pollInterval: 500,
  });

  const files = useMemo(
    () =>
      [...(data?.files ?? [])]
        .sort((a, b) => {
          return a.createdDate < b.createdDate ? 1 : -1;
        })
        .slice(0, 5),
    [data]
  );

  const [expandedId, setExpandedId] = useState<string | null>(null);
  const handleClick = (id: string) => {
    if (id === expandedId) {
      setExpandedId(null);
      return;
    }

    setExpandedId(id);
  };

  return (
    <div className="download-list">
      <Space className="space" direction="vertical">
        {files.length === 0 && <Empty description={getMessage("emptyMsg")} />}
        {files.map((file) => (
          <DownloadEntry
            key={file.id}
            file={file}
            onClick={handleClick}
            expanded={file.id === expandedId}
          />
        ))}
      </Space>
    </div>
  );
}
