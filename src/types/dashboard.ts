import type { AppRole } from './auth';
import type { BlogBlock } from './blog';
import type { LeadRange, LeadSource, LeadStatus } from './leads';

// ---------- The staff area's frame: sidebar, top bar, bell, user menu (src/data/dashboard/dashboardShell.ts) ----------

export type DashboardNavItem = {
  label: string;
  href?: string; // no href: shown as "Soon"
  icon: 'leads' | 'blogs' | 'clients' | 'users' | 'settings';
  roles: AppRole[]; // who sees it in the sidebar
};

export type DashboardShellContent = {
  nav: DashboardNavItem[];
  soon: string; // tag on items that aren't built yet
  backToSite: string;
  roles: Record<AppRole, string>;
  menu: {
    alerts: string; // sound + desktop notifications on/off
    alertsOn: string;
    alertsOff: string;
    changePassword: string;
    logout: string;
  };
  bell: {
    label: string; // for screen readers: 'Notifications'
    title: string;
    empty: string;
    markAll: string;
  };
  alert: {
    title: string; // 'New lead'
    body: string; // '{name} · {source}'
    open: string;
    tabTitle: string; // '({count}) Leads – BMU' – the browser tab while there are new leads
    tabTitleNone: string;
  };
  password: {
    title: string;
    password: string;
    confirmPassword: string;
    placeholder: string;
    submit: string;
    sending: string;
    done: string;
    close: string;
  };
};

// ---------- The blog page (src/data/dashboard/dashboardBlogs.ts) ----------

export type DashboardBlogsContent = {
  heading: string;
  description: string;
  viewOnly: string; // for admins and managers
  newPost: string;
  search: string;
  allStatuses: string;
  empty: string;
  emptyWriter: string;
  noMatch: string;
  columns: { title: string; status: string; date: string; updated: string; actions: string };
  notYet: string; // "Published" column for drafts
  scheduledOn: string; // 'Scheduled · {date}'
  statuses: { draft: string; published: string; scheduled: string };
  edit: string; // SEO writer
  view: string; // admins and managers
  preview: string;
  viewOnSite: string;
  delete: string; // drafts, SEO writer
  deleteTitle: string;
  deleteConfirm: string; // {title} is replaced
  deleting: string;
  cancel: string;
  previewBar: string;
  backToEditor: string;
};

// ---------- The blog editor (src/data/dashboard/dashboardBlogEditor.ts) ----------

export type DashboardBlogEditorContent = {
  back: string;
  status: { draft: string; published: string; scheduled: string };
  saving: string;
  saved: string;
  unsaved: string;
  viewOnly: string;
  actions: Record<
    | 'preview'
    | 'saveDraft'
    | 'publish'
    | 'publishNow'
    | 'schedule'
    | 'scheduleAt'
    | 'scheduleConfirm'
    | 'update'
    | 'unpublish'
    | 'delete'
    | 'deleteDraft'
    | 'deleteDraftTitle'
    | 'deletePostTitle'
    | 'deleteConfirm'
    | 'deletePublishedConfirm'
    | 'deleteButton'
    | 'deleting'
    | 'unpublishTitle'
    | 'unpublishConfirm'
    | 'unpublishButton'
    | 'unpublishing'
    | 'cancel'
    | 'import'
    | 'reload'
    | 'viewOnSite',
    string
  >;
  fields: Record<
    'title' | 'excerpt' | 'faqs' | 'faqsHint' | 'question' | 'answer' | 'addFaq',
    string
  >;
  blocks: {
    names: Record<BlogBlock['type'], string>;
    short: Record<BlogBlock['type'], string>; // block toolbar
    toolbar: string;
    toolbarHint: string;
    hints: Partial<Record<BlogBlock['type'], string>>;
  } & Record<
    | 'add'
    | 'moveUp'
    | 'moveDown'
    | 'duplicate'
    | 'remove'
    | 'bold'
    | 'link'
    | 'linkTitle'
    | 'linkText'
    | 'linkTextPlaceholder'
    | 'linkAddress'
    | 'linkAddressPlaceholder'
    | 'linkHint'
    | 'linkQuick'
    | 'linkAdd'
    | 'linkInvalid'
    | 'numbered'
    | 'addRow'
    | 'addColumn'
    | 'removeRow'
    | 'removeColumn'
    | 'pickService'
    | 'reason'
    | 'addService'
    | 'ctaText'
    | 'ctaButton'
    | 'ctaLink'
    | 'empty',
    string
  >;
  image: Record<
    | 'upload'
    | 'uploading'
    | 'drop'
    | 'replace'
    | 'remove'
    | 'alt'
    | 'caption'
    | 'credit',
    string
  >;
  seo: Record<
    | 'heading'
    | 'score'
    | 'slug'
    | 'slugLocked'
    | 'metaTitle'
    | 'metaDescription'
    | 'metaHintTitle'
    | 'metaHintDescription'
    | 'preview'
    | 'keyword'
    | 'tags'
    | 'tagsHint'
    | 'category'
    | 'chooseCategory'
    | 'featured'
    | 'cover'
    | 'coverAlt'
    | 'author'
    | 'publishDate'
    | 'readTime'
    | 'checklist',
    string
  >;
  importDialog: Record<
    'title' | 'text' | 'placeholder' | 'import' | 'cancel' | 'failed' | 'done',
    string
  >;
  leaveWarning: string;
};

// ---------- The leads page (src/data/dashboard/dashboardLeads.ts) ----------

export type DashboardLeadsContent = {
  heading: string;
  description: string;
  statuses: Record<LeadStatus, string>;
  sources: Record<LeadSource, string>;
  stats: { total: string; conversion: string; conversionHint: string };
  chart: { title: string; caption: string; captionAll: string; tooltip: string; tooltipOne: string };
  ranges: Record<LeadRange, string>;
  calendar: {
    label: string;
    apply: string;
    clear: string;
    pickStart: string;
    pickEnd: string;
    previous: string;
    next: string;
  };
  filters: {
    allStatuses: string;
    allSources: string;
    search: string;
    export: string;
    active: string;
    archived: string;
  };
  table: {
    name: string;
    contact: string;
    source: string;
    received: string;
    status: string;
    empty: string;
    emptyFiltered: string;
    emptyArchived: string;
    clearFilters: string;
    showing: string; // '{from}–{to} of {total}'
    previous: string;
    next: string;
  };
  tags: { new: string; repeat: string; due: string; overdue: string; followUp: string };
  followUpPrompt: { title: string; save: string; skip: string };
  panel: {
    close: string;
    call: string;
    whatsapp: string;
    email: string;
    status: string;
    followUp: string;
    followUpNone: string;
    clearFollowUp: string;
    details: string;
    labels: {
      email: string;
      phone: string;
      business: string;
      message: string;
      source: string;
      page: string;
      landing: string;
      referrer: string;
      campaign: string;
      received: string;
    };
    direct: string; // no referring website
    notes: string;
    notesEmpty: string;
    notePlaceholder: string;
    addNote: string;
    adding: string;
    history: string;
    events: {
      received: string;
      status: string; // '{actor} changed status: {from} → {to}'
      followUp: string; // '{actor} set follow-up to {date}'
      followUpCleared: string;
      archived: string;
      restored: string;
    };
    archive: string;
    archiveTitle: string;
    archiveConfirm: string; // {name} is replaced
    archiving: string;
    cancel: string;
    restore: string;
    loading: string;
    failed: string;
  };
};
