// =================================
//  IMPORTS
// =================================
import type { GamingPassion } from "../data/passions";
import TagBadge from "./TagBadge";

// =================================
//  TYPES
// =================================
interface GamingSectionProps {
  passion: GamingPassion;
}

// =================================
//  COMPONENT
// =================================
export default function GamingSection({ passion }: GamingSectionProps) {
  // =================================
  //  RENDER
  // =================================
  return (
    <section
      id="gaming"
      className="flex scroll-mt-6 flex-col overflow-hidden border-2
                 border-[var(--border-color)] bg-[var(--surface-color)]
                 shadow-[6px_6px_0_var(--shadow-color)]"
    >
      {/* Cartridge label strip */}
      <div
        className="flex items-center justify-between border-b-2
                   border-[var(--border-color)] bg-[var(--accent-color)] px-6 py-3"
      >
        <span className="text-lg font-black uppercase text-[var(--on-ink-color)]">
          {passion.number} — {passion.title}
        </span>
        <span className="font-mono text-xs uppercase text-[var(--on-ink-color)]/80">
          Cartridge
        </span>
      </div>

      <div className="flex flex-col gap-6 p-6">
        <p className="max-w-2xl text-[var(--text-color)]/80">
          {passion.description}
        </p>

        {/* Favourites bar */}
        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-wide text-[var(--text-color)]/60">
            Favourites
          </span>
          <div className="h-4 w-full border-2 border-[var(--border-color)] bg-[var(--surface-muted-color)]">
            <div className="h-full w-full bg-[var(--accent-color)]" />
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {passion.favouriteTags.map((tag) => (
              <TagBadge key={tag} label={tag} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wide text-[var(--text-color)]/60">
              Games that shaped me
            </span>
            {passion.influentialGames.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {passion.influentialGames.map((game) => (
                  <TagBadge key={game} label={game} />
                ))}
              </div>
            ) : (
              <span className="font-mono text-sm text-[var(--text-color)]/40">
                — add your list —
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wide text-[var(--text-color)]/60">
              Favourite genres
            </span>
            {passion.favouriteGenres.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {passion.favouriteGenres.map((genre) => (
                  <TagBadge key={genre} label={genre} />
                ))}
              </div>
            ) : (
              <span className="font-mono text-sm text-[var(--text-color)]/40">
                — add your list —
              </span>
            )}
          </div>
        </div>

        {passion.currentlyPlaying && (
          <div
            className="flex w-fit items-center gap-2 border-2
                       border-[var(--border-color)] bg-[var(--surface-muted-color)]
                       px-4 py-2"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--status-color)]" />
            <span className="font-mono text-sm font-bold uppercase text-[var(--text-color)]">
              Currently playing: {passion.currentlyPlaying}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
