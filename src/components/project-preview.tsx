"use client";

import { useState } from "react";
import Image from "next/image";

type ProjectPreviewProps = {
  title: string;
  src?: string;
  imageSrc?: string;
  audioToggle?: boolean;
  locale?: "pt" | "en";
};

export function ProjectPreview({
  title,
  src,
  imageSrc,
  audioToggle = false,
  locale = "pt",
}: ProjectPreviewProps) {
  const [failed, setFailed] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const hasVideo = Boolean(src) && !failed;
  const isEnglish = locale === "en";

  return (
    <div
      className="project-preview"
      aria-label={isEnglish ? `Project preview: ${title}` : `Prévia do projeto: ${title}`}
    >
      {imageSrc ? (
        <Image
          alt={isEnglish ? `Research image: ${title}` : `Imagem da pesquisa: ${title}`}
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
          muted={!audioEnabled}
          playsInline
          preload="metadata"
          aria-label={isEnglish ? `Video demonstration of ${title}` : `Demonstração em vídeo de ${title}`}
          onError={() => setFailed(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div className="project-video-fallback">
          <span className="project-video-fallback-icon" aria-hidden="true">▶</span>
          <span>{isEnglish ? "Video coming soon" : "Vídeo em gravação"}</span>
        </div>
      )}
      {hasVideo && audioToggle ? (
        <button
          aria-pressed={audioEnabled}
          className="project-audio-toggle"
          type="button"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            setAudioEnabled((enabled) => !enabled);
          }}
        >
          {audioEnabled
            ? isEnglish ? "Mute audio" : "Silenciar áudio"
            : isEnglish ? "Enable audio" : "Ative o áudio"}
        </button>
      ) : null}
    </div>
  );
}



