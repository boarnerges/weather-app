import type { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-gradient-to-br from-background to-muted">
      header
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="boarder-t backdrop-blur">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>Made with ❤️ by Boarnerges</p>
        </div>
      </footer>
    </div>
  );
};

export default layout;
