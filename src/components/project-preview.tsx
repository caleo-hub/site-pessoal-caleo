"use client";

import { useState } from "react";

type ProjectPreviewProps = {
  title: string;
  src?: string;
};

export function ProjectPreview({ title, src }: ProjectPreviewProps) {
  const [failed, setFailed] = useState(false);
  const hasVideo = Boolean(src) && !failed;

  return (
    <div className="project-preview" aria-label={`Prévia em vídeo: ${title}`}>
      {hasVideo ? (
        <video
          autoPlay
          className="project-video"
          loop
          muted
          playsInline
          preload="metadata"
          aria-label={`Demonstração em vídeo de ${title}`}
          onError={() => setFailed(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div className="project-video-fallback">
          <span className="project-video-fallback-icon" aria-hidden="true">▶</span>
          <span>Vídeo em gravação</span>
        </div>
      )}
    </div>
  );
}

