export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 mt-0" data-sync>
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-neutral-500 text-sm">
        <p className="sync-item">© {new Date().getFullYear()} Nydia Tech. All rights reserved.</p>
        <div className="flex gap-4 sync-item">
          <a href="#" className="hover:text-neutral-900">Privacy</a>
          <a href="#" className="hover:text-neutral-900">Terms</a>
          <a href="#pricing" className="hover:text-neutral-900">Pricing</a>
        </div>
      </div>
    </footer>
  );
}
