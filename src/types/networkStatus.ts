// ---------- Network status cards (src/data/networkStatus.ts) ----------

export type NetworkState = 'offline' | 'unreachable' | 'slow';

export type NetworkStatusCard = {
  status: string; // the small pill above the heading
  code?: string; // after the status, in code letters ("ERR_INTERNET_DISCONNECTED")
  heading: string;
  text: string; // {host} is replaced with the site's address
  primary: string; // the silver button
  primaryBusy: string; // on it while checking the connection
  secondary: string; // the dark button
  tips: string[]; // three, along the bottom
};

export type NetworkStatusContent = {
  states: Record<NetworkState, NetworkStatusCard>;
  mbps: string; // unit under the speed gauge
  slowLabel: string; // under the gauge when the browser doesn't tell the speed
  slowBelowMbps: number; // a measured speed below this counts as slow
  slowAfterMs: number; // the page still loading after this long counts as slow
};
