import { useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { searchAll, getAllSearchItems, type SearchItem } from "@/content/search";

const ENTITY_LABEL: Record<SearchItem["entity"], string> = {
  state: "States",
  destination: "Destinations",
  food: "Foods",
  festival: "Festivals",
};
const ORDER: SearchItem["entity"][] = ["destination", "state", "food", "festival"];

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const results = useMemo(() => {
    if (!query.trim()) {
      // empty state: show a few featured destinations
      return getAllSearchItems()
        .filter((i) => i.entity === "destination")
        .slice(0, 8);
    }
    return searchAll(query, 30);
  }, [query]);

  const grouped = useMemo(() => {
    const map: Record<string, SearchItem[]> = {};
    for (const r of results) {
      (map[r.entity] ||= []).push(r);
    }
    return map;
  }, [results]);

  function go(item: SearchItem) {
    onOpenChange(false);
    navigate({ to: item.url });
  }

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput
        placeholder="Search states, destinations, foods, festivals…"
        value={query}
        onValueChange={setQuery}
      />
      <CommandList>
        <CommandEmpty>No results. Try a different word.</CommandEmpty>
        {ORDER.map((entity, idx) => {
          const items = grouped[entity];
          if (!items?.length) return null;
          return (
            <div key={entity}>
              {idx > 0 && <CommandSeparator />}
              <CommandGroup heading={ENTITY_LABEL[entity]}>
                {items.map((it) => (
                  <CommandItem
                    key={`${it.entity}-${it.slug}`}
                    value={`${it.entity}-${it.slug}-${it.name}`}
                    onSelect={() => go(it)}
                  >
                    <div className="flex w-full items-center justify-between gap-3">
                      <div className="min-w-0">
                        <div className="truncate">{it.name}</div>
                        {it.subtitle && (
                          <div className="truncate text-xs text-muted-foreground">
                            {it.subtitle}
                          </div>
                        )}
                      </div>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </div>
          );
        })}
      </CommandList>
    </CommandDialog>
  );
}
