"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Service, User } from "@/lib/types";

interface AppContextType {
  // Filtros
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  selectedEstado: string | null;
  setSelectedEstado: (estado: string | null) => void;

  // Serviços
  services: Service[];
  setServices: (services: Service[]) => void;

  // Usuário
  user: User | null;
  setUser: (user: User | null) => void;

  // Favoritos
  favorites: Set<string>;
  toggleFavorite: (serviceId: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedEstado, setSelectedEstado] = useState<string | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const toggleFavorite = (serviceId: string) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(serviceId)) {
        newFavorites.delete(serviceId);
      } else {
        newFavorites.add(serviceId);
      }
      return newFavorites;
    });
  };

  return (
    <AppContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        selectedEstado,
        setSelectedEstado,
        services,
        setServices,
        user,
        setUser,
        favorites,
        toggleFavorite,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
