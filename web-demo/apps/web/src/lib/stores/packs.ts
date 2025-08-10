import { writable, derived } from 'svelte/store';
import type { RegisteredPack, ExpansionPack } from '@bmad/shared';
import { PackService } from '../services/pack.service';

interface PackStore {
  packs: RegisteredPack[];
  loadedPacks: Map<string, ExpansionPack>;
  loading: boolean;
  error: string | null;
}

function createPackStore() {
  const { subscribe, set, update } = writable<PackStore>({
    packs: [],
    loadedPacks: new Map(),
    loading: false,
    error: null,
  });

  const packService = new PackService();

  return {
    subscribe,
    
    async discover() {
      update(state => ({ ...state, loading: true, error: null }));
      
      try {
        const packs = await packService.discoverPacks();
        update(state => ({
          ...state,
          packs,
          loading: false,
        }));
      } catch (error) {
        update(state => ({
          ...state,
          loading: false,
          error: error instanceof Error ? error.message : 'Failed to discover packs',
        }));
      }
    },

    async loadPack(packId: string): Promise<ExpansionPack | null> {
      // Get current state to check cache
      let currentState: PackStore | null = null;
      const unsubscribe = subscribe(state => {
        currentState = state;
      });
      unsubscribe();
      
      // Check if already loaded
      if (currentState && currentState.loadedPacks.has(packId)) {
        return currentState.loadedPacks.get(packId) || null;
      }

      try {
        const pack = await packService.loadPack(packId);
        if (pack) {
          update(state => {
            const newLoadedPacks = new Map(state.loadedPacks);
            newLoadedPacks.set(packId, pack);
            return { ...state, loadedPacks: newLoadedPacks };
          });
        }
        return pack;
      } catch (error) {
        console.error(`Failed to load pack ${packId}:`, error);
        return null;
      }
    },

    getPackById(packId: string): RegisteredPack | undefined {
      let result: RegisteredPack | undefined;
      subscribe(state => {
        result = state.packs.find(p => p.id === packId);
      })();
      return result;
    },
  };
}

export const packStore = createPackStore();

// Derived store for pack count
export const packCount = derived(
  packStore,
  $packStore => $packStore.packs.length
);

// Derived store for loaded pack IDs
export const loadedPackIds = derived(
  packStore,
  $packStore => Array.from($packStore.loadedPacks.keys())
);