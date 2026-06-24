import { useState, useRef, useCallback, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import projectData from '../data/projects';

function loadUploads(id) {
  try {
    return JSON.parse(localStorage.getItem(`project-${id}`)) || { images: [], videoUrl: '' };
  } catch {
    return { images: [], videoUrl: '' };
  }
}

function saveUploads(id, data) {
  localStorage.setItem(`project-${id}`, JSON.stringify(data));
}

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectData[id];
  const fileInputRef = useRef(null);
  const [uploads, setUploads] = useState(() => loadUploads(id));
  const [dragOver, setDragOver] = useState(false);
  const [editingVideo, setEditingVideo] = useState(false);
  const [videoInput, setVideoInput] = useState(uploads.videoUrl);

  useEffect(() => {
    setUploads(loadUploads(id));
  }, [id]);

  const handleFiles = useCallback((files) => {
    const imageFiles = Array.from(files).filter((f) => f.type.startsWith('image/'));
    if (!imageFiles.length) return;

    Promise.all(
      imageFiles.map((file) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => resolve({ name: file.name, dataUrl: e.target.result });
          reader.readAsDataURL(file);
        });
      })
    ).then((newImages) => {
      setUploads((prev) => {
        const updated = { ...prev, images: [...prev.images, ...newImages] };
        saveUploads(id, updated);
        return updated;
      });
    });
  }, [id]);

  const removeImage = (index) => {
    setUploads((prev) => {
      const updated = { ...prev, images: prev.images.filter((_, i) => i !== index) };
      saveUploads(id, updated);
      return updated;
    });
  };

  const saveVideo = () => {
    const url = videoInput.trim();
    setUploads((prev) => {
      const updated = { ...prev, videoUrl: url };
      saveUploads(id, updated);
      return updated;
    });
    setEditingVideo(false);
  };

  if (!project) {
    return (
      <div className="detail-not-found">
        <h2>项目未找到</h2>
        <Link to="/">返回首页</Link>
      </div>
    );
  }

  const getVideoEmbed = (url) => {
    // YouTube
    const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]+)/);
    if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;
    // Bilibili
    const blMatch = url.match(/bilibili\.com\/video\/(BV[\w]+)/);
    if (blMatch) return `https://player.bilibili.com/player.html?bvid=${blMatch[1]}&page=1`;
    return url;
  };

  return (
    <div className="detail-page">
      <Link to="/#projects" className="detail-back">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        返回项目列表
      </Link>

      <article className="detail-article">
        {/* Header */}
        <header className="detail-header">
          <span className="section-label">{project.tag}</span>
          <h1 className="detail-title">{project.title}</h1>
          <div className="detail-meta-row">
            <span className="detail-meta-item">{project.role}</span>
            <span className="detail-meta-divider" />
            <span className="detail-meta-item">{project.date}</span>
          </div>
          <p className="detail-overview">{project.overview}</p>
          <div className="detail-tags">
            {project.meta.map((m) => (
              <span key={m} className="detail-tag">{m}</span>
            ))}
          </div>
        </header>

        {/* Content sections */}
        {project.sections.map((section, i) => (
          <section key={i} className="detail-section">
            <h2 className="detail-section-heading">{section.heading}</h2>
            <p className="detail-section-text">{section.content}</p>
          </section>
        ))}

        {/* Image gallery — with upload */}
        <section className="detail-section">
          <h2 className="detail-section-heading">界面展示</h2>

          {/* Drop zone */}
          <div
            className={`detail-dropzone ${dragOver ? 'drag-over' : ''}`}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files); }}
            onClick={() => fileInputRef.current?.click()}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17,8 12,3 7,8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            <span>拖放界面截图到此处</span>
            <span className="detail-dropzone-hint">或点击选择文件 · 支持 PNG / JPG / WebP</span>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              hidden
              onChange={(e) => { handleFiles(e.target.files); e.target.value = ''; }}
            />
          </div>

          {/* Uploaded images */}
          {uploads.images.length > 0 && (
            <div className="detail-gallery">
              {uploads.images.map((img, i) => (
                <div key={i} className="detail-gallery-item filled">
                  <img src={img.dataUrl} alt={img.name} />
                  <button className="detail-image-remove" onClick={() => removeImage(i)} title="删除">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Video area */}
        <section className="detail-section">
          <h2 className="detail-section-heading">演示视频</h2>

          {uploads.videoUrl && !editingVideo ? (
            <div className="detail-video-embed">
              <iframe
                src={getVideoEmbed(uploads.videoUrl)}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="项目演示视频"
              />
              <button className="detail-video-edit" onClick={() => { setEditingVideo(true); setVideoInput(uploads.videoUrl); }}>
                更换视频
              </button>
            </div>
          ) : editingVideo ? (
            <div className="detail-video-editor">
              <input
                className="detail-video-input"
                type="text"
                value={videoInput}
                onChange={(e) => setVideoInput(e.target.value)}
                placeholder="粘贴 YouTube / Bilibili 视频链接"
                onKeyDown={(e) => e.key === 'Enter' && saveVideo()}
                autoFocus
              />
              <div className="detail-video-actions">
                <button className="detail-video-save" onClick={saveVideo}>确认</button>
                <button className="detail-video-cancel" onClick={() => setEditingVideo(false)}>取消</button>
              </div>
            </div>
          ) : (
            <div className="detail-video-placeholder" onClick={() => setEditingVideo(true)}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                <polygon points="5,3 19,12 5,21" fill="currentColor" opacity="0.3"/>
              </svg>
              <span>点击添加演示视频</span>
              <p className="detail-video-hint">支持 YouTube / Bilibili 链接</p>
            </div>
          )}
        </section>
      </article>
    </div>
  );
}
