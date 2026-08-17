<script setup>
import { computed, ref } from 'vue'
import { classicList } from '../data/classics.js'

const keyword = ref('')
const bookFilter = ref('')

const books = [...new Set(classicList.map((c) => c.book))]

const filtered = computed(() => {
  const kw = keyword.value.trim()
  return classicList.filter((c) => {
    const matchBook = !bookFilter.value || c.book === bookFilter.value
    const matchKw =
      !kw ||
      c.text.includes(kw) ||
      c.chapter.includes(kw) ||
      c.book.includes(kw) ||
      (c.note || '').includes(kw)
    return matchBook && matchKw
  })
})

const grouped = computed(() => {
  const map = {}
  for (const c of filtered.value) {
    const k = bookFilter.value || c.book
    if (!map[k]) map[k] = []
    map[k].push(c)
  }
  return Object.entries(map).map(([book, items]) => ({ book, items }))
})
</script>

<template>
  <div class="gf-page classics">
    <h1 class="gf-title page-title">典籍库</h1>
    <p class="gf-sub page-sub">逐条著录原文 · 应证于《内经》</p>

    <div class="filters">
      <input v-model="keyword" class="search" type="search" placeholder="检索原文 / 篇名 / 关键词…" />
      <div class="book-tabs">
        <button
          v-for="b in books"
          :key="b"
          class="gf-chip"
          :class="{ on: bookFilter === b }"
          @click="bookFilter = bookFilter === b ? '' : b"
        >{{ b }}</button>
      </div>
      <p class="gf-caption count">共 {{ filtered.length }} 条</p>
    </div>

    <section v-for="g in grouped" :key="g.book" class="book-block">
      <div class="gf-section-title">
        <span class="zh">{{ g.book }}</span>
        <span class="en">{{ g.book.includes('素问') ? 'Suwen' : 'Lingshu' }}</span>
      </div>

      <div class="articles">
        <article v-for="c in g.items" :key="c.id" class="gf-card article">
          <header>
            <span class="chapter">{{ c.chapter }}</span>
            <span class="badge">已核证</span>
          </header>
          <blockquote>{{ c.text }}</blockquote>
          <p v-if="c.note" class="note">{{ c.note }}</p>
        </article>
      </div>
    </section>

    <p class="gf-note tail">
      版本说明：以上条文依据人民卫生出版社通行校本著录（部分为文意节选）。读者如需引用，请对照《黄帝内经》善本复核。
      网站引用仅作知识传播与养生参考，不构成诊疗建议。
    </p>
  </div>
</template>

<style scoped>
.page-title,
.page-sub {
  text-align: center;
}
.page-title {
  font-size: 30px;
  margin-bottom: 6px;
}

.filters {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 22px 0 8px;
}
.search {
  padding: 10px 14px;
  border: 1px solid var(--ink-20);
  background: rgba(245, 239, 224, 0.6);
  font-family: var(--font-serif);
  font-size: 14px;
  color: var(--ink-deep);
  border-radius: 3px;
  width: 100%;
  max-width: 420px;
  letter-spacing: 1px;
}
.search:focus {
  outline: none;
  border-color: var(--teal-mid);
  box-shadow: 0 0 0 3px rgba(109, 138, 126, 0.18);
}
.book-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.count {
  align-self: flex-end;
}

.articles {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 18px;
}
.article {
  padding: 18px 18px 14px;
}
.article header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.article .chapter {
  font-family: var(--font-kai);
  letter-spacing: 3px;
  color: var(--vermilion);
}
.badge {
  font-size: 12px;
  color: var(--teal-dark);
  border: 1px solid var(--teal-mid);
  border-radius: 999px;
  padding: 1px 10px;
}
.article blockquote {
  margin: 0 0 8px;
  font-family: var(--font-kai);
  line-height: 2;
  color: var(--ink-deep);
  padding-left: 14px;
  border-left: 3px solid var(--gold-light);
}
.article .note {
  margin: 0;
  color: var(--ink-soft);
  font-size: 13px;
  line-height: 1.8;
}
.tail {
  margin-top: 40px;
}
</style>