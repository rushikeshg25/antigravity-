export function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-24">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© 2025 Rushikesh Ghotekar. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/rushikeshg25"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/rushikeshg10"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Twitter
          </a>
          <a
            href="mailto:hello@rushikeshg.xyz"
            className="hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
