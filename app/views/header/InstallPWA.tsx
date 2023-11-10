import { useEffect, useState } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import { IconButton, Tooltip } from '@mui/material';

export default function InstallPWA() {
  const [installed, setInstalled] = useState(false);
  const [installPrompt, setInstallPrompt] = useState<Event | null>(null);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      if (isMobile())
        return;

      event.preventDefault();
      setInstallPrompt(event);
    });

    window.addEventListener('appinstalled', () => setInstalled(true));

    if (window.matchMedia('(display-mode: standalone)').matches)
      setInstalled(true);
  }, []);

  const isMobile = () => {
    const ua = navigator.userAgent;

    if (/android/i.test(ua))
      return true;

    else if (/iPad|iPhone|iPod/.test(ua))
      return true;

    return false;
  };

  const handleInstall = async () => {
    if (installed)
      return console.log('App already installed!');

    await (installPrompt as any).prompt();

    setInstallPrompt(null);
  };

  if (!installPrompt)
    return null;

  return (
    <Tooltip title="Install the App offline">
      <IconButton onClick={handleInstall}>
        <DownloadIcon color='secondary' />
      </IconButton>
    </Tooltip>
  );
}