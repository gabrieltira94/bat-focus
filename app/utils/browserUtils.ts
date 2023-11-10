export const isMobile = () => {
  // Prevent SRR error
  if (!navigator)
    return false;

  const ua = navigator.userAgent;

  if (/android/i.test(ua))
    return true;

  else if (/iPad|iPhone|iPod/.test(ua))
    return true;

  return false;
};