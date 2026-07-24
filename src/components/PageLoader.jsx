import { useEffect, useRef, useState } from 'react';

function PageLoader({ children }){
    const [loaded, setLoaded] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        setLoaded(false);
        const container = containerRef.current;
        if (!container) return;

        const imgs = Array.from(container.querySelectorAll('img'));
        if (imgs.length === 0) {
            setLoaded(true);
            return;
        }

        let remaining = imgs.length;
        let cancelled = false;

        const done = () => {
            if (cancelled) return;
            remaining -= 1;
            if (remaining <= 0) setLoaded(true);
        };

        const listeners = [];
        imgs.forEach((img) => {
            if (img.complete && img.naturalWidth !== 0) {
                done();
            } else {
                const onLoad = () => done();
                const onError = () => done();
                img.addEventListener('load', onLoad);
                img.addEventListener('error', onError);
                listeners.push({ img, onLoad, onError });
            }
        });

        return () => {
            cancelled = true;
            listeners.forEach(({ img, onLoad, onError }) => {
                img.removeEventListener('load', onLoad);
                img.removeEventListener('error', onError);
            });
        };
    }, [children]);

    return (
        <>
            {!loaded && (
                <div className="flex justify-center items-center py-20">
                    {/* Maybe add something here eventually. */}
                </div>
            )}
            <div
                ref={containerRef}
                style={
                    loaded
                        ? undefined
                        : {
                              position: 'absolute',
                              visibility: 'hidden',
                              pointerEvents: 'none',
                              left: 0,
                              right: 0,
                          }
                }
            >
                {children}
            </div>
        </>
    );
}

export default PageLoader;
