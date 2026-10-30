/** Current-page state is exact; section state also includes descendants. */
export function isCurrentPage(pathname: string, destination: string) {
  return pathname.replace(/\/$/, "") === destination.replace(/\/$/, "");
}

export function isActiveSection(pathname: string, destination: string) {
  return isCurrentPage(pathname, destination) ||
    (destination !== "/" && pathname.startsWith(`${destination}/`));
}