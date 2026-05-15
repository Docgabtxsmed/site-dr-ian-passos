/* global */ /* eslint-disable */
// Small inline Lucide-style icons. Stroke 1.5, currentColor, no fill.
const Icon = ({ name, size = 20, strokeWidth = 1.5, style }) => {
  const props = {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", stroke: "currentColor",
    strokeWidth, strokeLinecap: "round", strokeLinejoin: "round",
    style,
  };
  switch (name) {
    case 'whatsapp':
      return <svg {...props}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>;
    case 'phone':
      return <svg {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
    case 'mapPin':
      return <svg {...props}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
    case 'calendar':
      return <svg {...props}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
    case 'clock':
      return <svg {...props}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
    case 'user':
      return <svg {...props}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
    case 'check':
      return <svg {...props}><polyline points="20 6 9 17 4 12"/></svg>;
    case 'arrowRight':
      return <svg {...props}><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>;
    case 'menu':
      return <svg {...props}><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>;
    case 'x':
      return <svg {...props}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
    case 'nose':
      // ENT-themed: a face-profile glyph for "nariz". Approximated.
      return <svg {...props}><path d="M9 4c0 4-3 5-3 9 0 2 2 3 4 3"/><path d="M10 16c0 2 1 4 4 4"/><path d="M14 4v6a4 4 0 0 1-4 4"/></svg>;
    case 'ear':
      return <svg {...props}><path d="M6 8a6 6 0 1 1 12 0c0 3-2 4-3 6-1 1-1 4-3 4s-2-2-3-2-3 0-3-3 0-3 0-5z"/></svg>;
    case 'throat':
      return <svg {...props}><path d="M8 3v6c0 3-2 4-2 7s3 5 6 5 6-2 6-5-2-4-2-7V3"/><path d="M8 7h8"/></svg>;
    case 'video':
      return <svg {...props}><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>;
    case 'shield':
      return <svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
    case 'star':
      return <svg {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
    case 'award':
      return <svg {...props}><circle cx="12" cy="8" r="6"/><polyline points="9 13 7 22 12 19 17 22 15 13"/></svg>;
    case 'graduationCap':
      return <svg {...props}><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5a6 4 0 0 0 12 0v-5"/></svg>;
    case 'instagram':
      return <svg {...props}><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.4a4 4 0 1 1-7.9 1.2 4 4 0 0 1 7.9-1.2z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>;
    default: return null;
  }
};

window.Icon = Icon;
