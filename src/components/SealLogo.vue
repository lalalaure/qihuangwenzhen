<template>
  <div class="seal" aria-label="診">
    <span class="seal-char">診</span>
  </div>
</template>

<style scoped>
.seal {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background: var(--cinnabar);
  font-family: var(--font-kai);
  font-weight: 700;
  font-size: 26px;
  color: var(--paper);
  box-shadow:
    inset 0 0 0 2px var(--paper),
    inset 0 0 0 4px var(--cinnabar),
    0 3px 8px rgba(26, 22, 20, 0.3);
  transform: rotate(-3deg);
  flex-shrink: 0;
}
</style>