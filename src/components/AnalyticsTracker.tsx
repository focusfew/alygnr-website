import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../lib/analytics';

export default function AnalyticsTracker() {
  const { pathname } = useLocation();

  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  return null;
}
