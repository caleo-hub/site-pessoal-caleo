"use client";

import { useState } from "react";
import Image from "next/image";

type ProjectPreviewProps = {
  title: string;
  src?: string;
  imageSrc?: string;
};

export function ProjectPreview({ title, src, imageSrc }: ProjectPreviewProps) {
  const [failed, setFailed] = useState(false);
  const hasVideo = Boolean(src) && !failed;

  return (
    <div className="project-preview" aria-label={`Prévia do projeto: ${title}`}>
      {imageSrc ? (
        <Image
          alt={`Imagem da pesquisa: ${title}`}
          className="project-video"
          fill
          priority={false}
          sizes="(max-width: 620px) calc(100vw - 44px), 80vw"
          src={imageSrc}
        />
      ) : hasVideo ? (
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


