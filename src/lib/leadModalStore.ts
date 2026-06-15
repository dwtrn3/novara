"use client";

import { useSyncExternalStore } from "react";

let isOpen = false;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

export function openLeadModal() {
  isOpen = true;
  emit();
}

export function closeLeadModal() {
  isOpen = false;
  emit();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return isOpen;
}

function getServerSnapshot() {
  return false;
}

export function useLeadModalOpen() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
