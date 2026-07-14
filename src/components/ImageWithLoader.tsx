import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  srcSet?: string;
  priority?: boolean;
}

export default function ImageWithLoader({
  src,
  alt,
  className = '',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  srcSet,
  priority = false,
}: ImageWithLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  // Generate an automatic responsive srcSet if none is provided and src is not a base64 data URI
  const isDataUri = src.startsWith('data:');
  const finalSrcSet = srcSet || (isDataUri ? undefined : `${src}?w=400 400w, ${src}?w=800 800w, ${src} 1200w`);

  useEffect(() => {
    // Quick cache check
    const img = new Image();
    img.src = src;
    if (img.complete) {
      setIsLoaded(true);
      setShowPlaceholder(false);
    }
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`} id={`image-container-${alt.toLowerCase().replace(/\s+/g, '-')}`}>
      {/* Blurred Shimmer Placeholder */}
      <AnimatePresence>
        {showPlaceholder && (
          <motion.div
            className="absolute inset-0 bg-slate-900/10 backdrop-blur-md flex items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Ambient Animated Shimmer Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]" />
            {/* Blurred mini silhouette */}
            <img
              src={src}
              alt="loading placeholder"
              className="w-full h-full object-cover filter blur-2xl scale-110 opacity-30 select-none pointer-events-none"
              referrerPolicy="no-referrer"
              decoding="async"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary High-Resolution Image */}
      <img
        src={src}
        alt={alt}
        srcSet={finalSrcSet}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding={priority ? 'sync' : 'async'}
        onLoad={() => {
          setIsLoaded(true);
          // Small delay before removing placeholder to allow smooth visual blending
          setTimeout(() => setShowPlaceholder(false), 200);
        }}
        className={`w-full h-full object-cover transition-all duration-700 ease-out ${
          isLoaded ? 'opacity-100 scale-100 filter blur-0' : 'opacity-0 scale-[1.03] filter blur-lg'
        }`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
