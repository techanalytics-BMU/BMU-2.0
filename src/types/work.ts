export type WorkClientLogo = {
  name: string; // also the alt text
  logo?: string; // .svg / .webp in public/images/work/clients/ – a placeholder wordmark is shown until set
};

export type WorkHeroContent = {
  badge: string;
  heading: string;
  clientsLabel: string; // small line above the logo strip
  clients: WorkClientLogo[];
};

// The blog itself (posts, listing and article text) is in ./blog.ts
