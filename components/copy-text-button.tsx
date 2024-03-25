"use client";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ContentCopyIcon } from "@/components/icons/content-copy-icon";
import { CheckIcon } from "@/components/icons/check-icon";

export function CopyTextButton({ textToCopy }: { textToCopy: any }) {
  const [copyStatus, setCopyStatus] = useState(false); // To indicate if the text was copied

  const onCopyText = () => {
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000); // Reset status after 2 seconds
  };

  return (
    <div className="flex p-2 bg-secondary rounded-full">
      <CopyToClipboard text={textToCopy} onCopy={onCopyText}>
        {!copyStatus ? (
          <button>
            <ContentCopyIcon width={18} height={18} />
          </button>
        ) : (
          <CheckIcon width={18} height={18} />
        )}
      </CopyToClipboard>
    </div>
  );
}
