import { writable } from 'svelte/store';
import type { Session, HistoryEntry } from '@bmad/shared';
import { generateSessionId } from '@bmad/shared';

interface SessionStore {
  session: Session | null;
  connected: boolean;
}

function createSessionStore() {
  const { subscribe, set, update } = writable<SessionStore>({
    session: null,
    connected: false,
  });

  return {
    subscribe,

    async initialize() {
      // Check for existing session in localStorage
      const savedSessionId = localStorage.getItem('bmad_session_id');
      
      const session: Session = {
        id: savedSessionId || generateSessionId(),
        startTime: new Date(),
        activeAgents: [],
        context: {
          variables: {},
          assumptions: [],
          decisions: [],
        },
        history: [],
      };

      // Save session ID
      localStorage.setItem('bmad_session_id', session.id);

      set({
        session,
        connected: false,
      });
    },

    setConnected(connected: boolean) {
      update(state => ({ ...state, connected }));
    },

    addHistoryEntry(entry: Omit<HistoryEntry, 'id' | 'timestamp'>) {
      update(state => {
        if (!state.session) return state;

        const newEntry: HistoryEntry = {
          ...entry,
          id: `entry_${Date.now()}`,
          timestamp: new Date(),
        };

        return {
          ...state,
          session: {
            ...state.session,
            history: [...state.session.history, newEntry],
          },
        };
      });
    },

    activateAgent(agentId: string, packId: string) {
      update(state => {
        if (!state.session) return state;

        const activeAgent = {
          agentId,
          packId,
          activatedAt: new Date(),
          state: {},
          status: 'idle' as const,
        };

        return {
          ...state,
          session: {
            ...state.session,
            activeAgents: [...state.session.activeAgents, activeAgent],
          },
        };
      });
    },

    updateAgentStatus(agentId: string, status: 'idle' | 'thinking' | 'executing' | 'waiting') {
      update(state => {
        if (!state.session) return state;

        const activeAgents = state.session.activeAgents.map(agent =>
          agent.agentId === agentId ? { ...agent, status } : agent
        );

        return {
          ...state,
          session: {
            ...state.session,
            activeAgents,
          },
        };
      });
    },

    clear() {
      localStorage.removeItem('bmad_session_id');
      set({
        session: null,
        connected: false,
      });
    },
  };
}

export const sessionStore = createSessionStore();