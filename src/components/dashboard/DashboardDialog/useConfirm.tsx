'use client';

import { useCallback, useState } from 'react';
import DashboardDialog, { type DashboardDialogProps } from './DashboardDialog';

type ConfirmOptions = Omit<DashboardDialogProps, 'onConfirm' | 'onCancel'> & {
  onConfirm?: () => unknown | Promise<unknown>; // run inside the popup (its button shows busyLabel)
};

/**
 * "Are you sure?" in the dashboard's own popup:
 *   const [confirm, confirmDialog] = useConfirm();
 *   … if (await confirm({ title, message, confirmLabel, tone: 'danger', onConfirm })) …
 *   … {confirmDialog} somewhere in the page
 * Resolves true once the action is done, false when cancelled.
 */
export function useConfirm() {
  const [request, setRequest] = useState<{
    options: ConfirmOptions;
    resolve: (confirmed: boolean) => void;
  } | null>(null);

  const confirm = useCallback(
    (options: ConfirmOptions) => new Promise<boolean>((resolve) => setRequest({ options, resolve })),
    []
  );

  const dialog = request ? (
    <DashboardDialog
      {...request.options}
      onConfirm={async () => {
        await request.options.onConfirm?.();
        request.resolve(true);
        setRequest(null);
      }}
      onCancel={() => {
        request.resolve(false);
        setRequest(null);
      }}
    />
  ) : null;

  return [confirm, dialog] as const;
}
